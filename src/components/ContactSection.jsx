import { useState } from 'react';
import ContactImageCarousel from './ContactImageCarousel';

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

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
      const response = await fetch('http://localhost:5000/submit-podologia-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.success) {
        alert('¡Consulta enviada con éxito! Nos pondremos en contacto contigo pronto.');
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
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Contáctanos</h2>
        <div className="max-w-5xl mx-auto bg-white text-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-stretch gap-8">
          <ContactImageCarousel />

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-xl mb-8">
              ¿Tienes alguna pregunta o quieres agendar una cita? Estamos aquí para ayudarte.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  rows="5"
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
            <div className="mt-10 text-gray-700">
              <p className="text-lg mb-2">Teléfono: <a href="tel:+525512345678" className="text-blue-600 hover:underline">+52 55 1234 5678</a></p>
              <p className="text-lg">Email: <a href="mailto:info@podologiapro.com" className="text-blue-600 hover:underline">info@podologiapro.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;