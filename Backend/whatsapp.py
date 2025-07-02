from twilio.rest import Client

# Credenciales de Twilio para podología
TWILIO_SID = 'tu_sid_twilio'
TWILIO_AUTH_TOKEN = 'tu_token_twilio'
TWILIO_PHONE_NUMBER = 'whatsapp:+14155238886'  # Número de Twilio
DESTINATION_PHONE = 'whatsapp:+51964849433'    # Tu número de WhatsApp

def send_whatsapp_message(nombre, telefono, mensaje):
    try:
        client = Client(TWILIO_SID, TWILIO_AUTH_TOKEN)

        body = f"🦶 Nueva consulta de PODOLOGÍA:\nNombre: {nombre}\nTeléfono: {telefono}\nMensaje: {mensaje}"

        client.messages.create(
            from_=TWILIO_PHONE_NUMBER,
            body=body,
            to=DESTINATION_PHONE
        )

        print("✅ Mensaje de WhatsApp enviado para consulta de podología.")
    except Exception as e:
        print(f"❌ Error al enviar WhatsApp: {e}")