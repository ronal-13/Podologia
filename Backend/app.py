from flask import Flask, request, jsonify
import sqlite3
from email_handler import send_podologia_email
from whatsapp import send_whatsapp_message
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/submit-podologia-form', methods=['POST'])
def submit_podologia_form():
    try:
        data = request.json
        print("📩 Formulario recibido:", data)

        # Validación y limpieza
        nombre = data.get("nombre", "").strip()
        telefono = data.get("telefono", "").strip()
        email = data.get("email", "").strip()
        mensaje = data.get("mensaje", "").strip()

        if not all([nombre, telefono, email, mensaje]):
            return jsonify({"success": False, "error": "Todos los campos son obligatorios"}), 400

        # Guardar en DB
        with sqlite3.connect("podologia.db") as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO consultas_podologia (nombre, telefono, email, mensaje) 
                VALUES (?, ?, ?, ?)
            """, (nombre, telefono, email, mensaje))
            conn.commit()

        # Notificaciones
        send_podologia_email(nombre, telefono, email, mensaje)
        send_whatsapp_message(nombre, telefono, mensaje)

        return jsonify({
            "success": True,
            "message": "Consulta registrada correctamente"
        }), 201

    except sqlite3.IntegrityError:
        return jsonify({
            "success": False,
            "error": "Este correo ya está registrado"
        }), 400
    except Exception as e:
        print(f"❌ Error: {e}")
        return jsonify({
            "success": False,
            "error": "Error interno del servidor"
        }), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port)