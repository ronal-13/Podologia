import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configuración del servidor SMTP
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_SENDER = "ronalasencio13@gmail.com"  # Cambiar por tu email
EMAIL_PASSWORD = "gnad kbtn dkgj dxok"    # Cambiar por tu contraseña de aplicación
EMAIL_RECEIVER = "ronalasencio13@gmail.com"  # Email de recepción

def send_podologia_email(nombre, telefono, email, mensaje):
    try:
        subject = "🚑 Nueva consulta de PODOLOGÍA"
        body = f"""
        🦶 ¡Nueva consulta de podología recibida!

        👤 Nombre: {nombre}
        📞 Teléfono: {telefono}
        📧 Email: {email}
        ✍️ Mensaje:
        {mensaje}

        Por favor, contactar al paciente lo antes posible.
        """

        # Configurar el mensaje
        msg = MIMEMultipart()
        msg["From"] = EMAIL_SENDER
        msg["To"] = EMAIL_RECEIVER
        msg["Subject"] = subject
        msg["X-Priority"] = "1"  # Alta prioridad

        msg.attach(MIMEText(body, "plain"))

        # Enviar el correo
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_SENDER, EMAIL_PASSWORD)
        server.sendmail(EMAIL_SENDER, EMAIL_RECEIVER, msg.as_string())
        server.quit()

        print("✅ Notificación de podología enviada correctamente.")

    except Exception as e:
        print(f"❌ Error al enviar correo de podología: {e}")