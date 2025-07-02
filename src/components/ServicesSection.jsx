import { useState } from 'react';
import ServiceDetailModal from './ServiceDetailModal'; // Importar el nuevo componente

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Podología General',
      description: 'Diagnóstico y tratamiento de afecciones comunes del pie, como callos, durezas y uñas encarnadas.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      image: 'https://www.origensalud.com/wp-content/uploads/2023/12/blog-1.png' // Placeholder image
    },
    {
      title: 'Estudios Biomecánicos',
      description: 'Análisis de la pisada y la marcha para prevenir lesiones y mejorar el rendimiento deportivo.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 2v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      image: 'https://laserclipie.es/web/laserclipie/imagenes/noticias/13/20150115135727000000.jpg' // Placeholder image
    },
    {
      title: 'Cirugía Ungueal',
      description: 'Procedimientos quirúrgicos menores para tratar uñas encarnadas crónicas o deformidades severas.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      ),
      image: 'https://clinicadelpiebehatz.com/wp-content/uploads/2019/08/cirugia-ungueal-03-1024x576.jpg' // Placeholder image
    },
    {
      title: 'Podología Deportiva',
      description: 'Prevención y tratamiento de lesiones relacionadas con la actividad física en atletas de todos los niveles.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      image: 'https://centrosanitario.es/wp-content/uploads/2023/09/photo_2023-09-24_18-33-31.jpg' // Placeholder image
    },
    {
      title: 'Tratamiento de Hongos',
      description: 'Soluciones efectivas para eliminar hongos en uñas y piel, restaurando la salud de tus pies.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      image: 'https://lugoneseditorial.com.ar/wp-content/uploads/2024/05/onicomicosis-3.jpeg' // Placeholder image
    },
    {
      title: 'Plantillas Personalizadas',
      description: 'Diseño y fabricación de plantillas ortopédicas a medida para corregir problemas de pisada.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8H4a2 2 0 01-2-2v-4A2 2 0 014 8h2m-2 4h4m-4 0h4m-4 0V8m4 4v4m-4-4h.01M12 18v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6-4H4a2 2 0 01-2-2v-4A2 2 0 014 8h2m-2 4h4m-4 0h4m-4 0V8m4 4v4m-4-4h.01M18 18v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6-4H4a2 2 0 01-2-2v-4A2 2 0 014 8h2m-2 4h4m-4 0h4m-4 0V8m4 4v4m-4-4h.01"></path>
        </svg>
      ),
      image: 'https://osten.blex.es/img/cms/Noticias/Las-plantillas-personalizadas/plantillas-personalizadas-clinica-osten-sevilla.jpg' // Placeholder image
    },
  ];

  const handleVerMasClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-8 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button
                  onClick={() => handleVerMasClick(service)}
                  className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceDetailModal service={selectedService} onClose={handleCloseModal} />
    </section>
  );
};

export default ServicesSection;

// DONE