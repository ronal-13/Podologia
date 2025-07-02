import { useState } from 'react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = {
      nombre: e.target.elements.nombre.value.trim(),
      telefono: e.target.elements.telefono.value.trim(),
      email: e.target.elements.email.value.trim(),
      mensaje: e.target.elements.mensaje.value.trim()
    };

    // Validación básica
    if (!formData.nombre || !formData.telefono || !formData.email || !formData.mensaje) {
      alert('Por favor completa todos los campos');
      setIsLoading(false);
      return;
    }

    if (!/^\d+$/.test(formData.telefono)) {
      alert('Por favor ingresa un número de teléfono válido (solo números)');
      setIsLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Por favor ingresa un correo electrónico válido');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://podologia-backend.onrender.com/submit-podologia-form', { // linea (https://podologia-backend.onrender.com) y local (http://localhost:5000)
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });

      const data = await response.json();
      
      if (data.success) {
        alert('¡Consulta enviada con éxito! Nos pondremos en contacto contigo pronto.');
        setIsOpen(false);
        e.target.reset();
      } else {
        alert(data.error || 'Hubo un error al procesar tu consulta');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema de conexión. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleForm}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 transform hover:scale-110"
        aria-label="Abrir formulario de contacto"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative transform transition-all duration-300 scale-100 opacity-100">
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-bold"
              aria-label="Cerrar formulario de contacto"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contáctanos</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu Nombre"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="telefono"
                  placeholder="Tu Número de teléfono"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu Correo Electrónico"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
              <div>
                <textarea
                  name="mensaje"
                  placeholder="Tu Mensaje"
                  rows="4"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactButton;