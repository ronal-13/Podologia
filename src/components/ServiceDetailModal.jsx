
const ServiceDetailModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl relative transform transition-all duration-300 scale-100 opacity-100 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-bold"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <div className="flex flex-col items-center text-center mb-6">
          {service.icon}
          <h3 className="text-3xl font-bold text-gray-800 mt-4">{service.title}</h3>
        </div>
        <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <p className="text-gray-700 text-lg mb-6">
          {service.description}
        </p>
        <p className="text-gray-600 text-md mb-6">
          Aquí puedes añadir más detalles sobre el servicio, beneficios, proceso, duración, etc.
          Por ejemplo, para Podología General, podríamos hablar de la importancia de la revisión periódica,
          el uso de instrumental esterilizado, y la prevención de futuras afecciones.
          Nuestro enfoque es siempre preventivo y personalizado, buscando la raíz del problema para ofrecer
          soluciones duraderas y mejorar tu calidad de vida.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
          <li>Diagnóstico preciso con tecnología avanzada.</li>
          <li>Tratamientos personalizados para cada afección.</li>
          <li>Asesoramiento para el cuidado diario de tus pies.</li>
          <li>Ambiente cómodo y seguro con estrictas normas de higiene.</li>
        </ul>
        <button
          onClick={onClose} // Podrías cambiar esto para redirigir a la sección de contacto o a un formulario de cita
          className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailModal;