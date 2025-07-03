# Web Podología

Sitio web profesional para un consultorio de podología. Incluye presentación de servicios, galería de casos, información de contacto y funcionalidades de backend para gestión de datos y comunicación.

## Tecnologías utilizadas

- **Frontend:** ReactJS, Tailwind CSS
- **Backend:** Python (Flask)
- **Base de datos:** SQLite
- **Otros:** Envío de emails, integración con WhatsApp

## Estructura del proyecto

```
10- WEB PODOLOGIA/
├── Backend/                # Código backend (Flask, scripts de gestión, email, WhatsApp)
│   ├── app.py
│   ├── create_table.py
│   ├── delete_data.py
│   ├── email_handler.py
│   ├── requirements.txt
│   ├── show_data.py
│   └── whatsapp.py
├── podologia.db            # Base de datos SQLite
├── public/                 # Archivos públicos (HTML principal)
├── src/                    # Código fuente del frontend (React)
│   ├── components/         # Componentes reutilizables
│   ├── img/                # Imágenes
│   ├── App.jsx
│   ├── index.jsx
│   └── styles.css
├── package.json            # Dependencias frontend
├── tailwind.config.js      # Configuración Tailwind
└── ...
```

## Instalación y ejecución

### Backend (Flask)
1. Ve a la carpeta Backend:
   ```bash
   cd Backend
   ```
2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```
3. Ejecuta el servidor Flask:
   ```bash
   python app.py
   ```

### Frontend (React)
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Ejecuta la aplicación React:
   ```bash
   npm start
   ```

La web estará disponible en `http://localhost:3000` y el backend en el puerto configurado (por defecto, 5000).

## Funcionalidades principales
- Presentación de servicios de podología
- Galería de casos de éxito
- Sección de contacto con formulario y WhatsApp
- Envío de emails desde el backend
- Gestión de datos en base SQLite

