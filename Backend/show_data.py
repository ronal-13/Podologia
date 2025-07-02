import sqlite3
from datetime import datetime

def show_data():
    conn = sqlite3.connect("podologia.db")
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM consultas_podologia ORDER BY fecha DESC")
    rows = cursor.fetchall()

    if rows:
        print("\n📋 Consultas de Podología:\n")
        for row in rows:
            fecha = datetime.strptime(row[4], "%Y-%m-%d %H:%M:%S").strftime("%d/%m/%Y %H:%M")
            print(f"🆔 ID: {row[0]}")
            print(f"👤 Nombre: {row[1]}")
            print(f"📞 Teléfono: {row[2]}")
            print(f"📧 Email: {row[3]}")
            print(f"✍️ Mensaje: {row[4]}")
            print(f"📅 Fecha: {fecha}")
            print("-" * 50)
    else:
        print("No hay consultas registradas.")

    conn.close()

if __name__ == "__main__":
    show_data()