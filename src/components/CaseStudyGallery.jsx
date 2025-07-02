import { useState } from 'react';

const CaseStudyGallery = () => {
  const cases = [
    {
      src: 'https://podologiamiguel.com/wp-content/uploads/2019/06/AdobeStock_217125258.jpeg',
      alt: 'Pie antes del tratamiento',
      title: 'Uña Encarnada Severa',
      description: 'Tratamiento exitoso de onicocriptosis crónica con recuperación total y alivio del dolor.',
      fullDescription: 'Este caso presentaba una uña encarnada de larga evolución, causando dolor intenso e infección recurrente. Se realizó un procedimiento mínimamente invasivo para corregir la curvatura de la uña y eliminar la espícula. El paciente experimentó un alivio inmediato y una recuperación completa en pocas semanas, volviendo a sus actividades diarias sin molestias.',
    },
    {
      src: 'https://www.semana.com/resizer/v2/J6GWXFVDLBB4VLKZVASYBWCA2U.jpg?auth=c6c20bc92c7186181767bf4f01e067aabd7fce457b74bcb3dc7a925690002099&smart=true&quality=75&width=1280&fitfill=false',
      alt: 'Pie después del tratamiento',
      title: 'Eliminación de Callosidades',
      description: 'Restauración de la suavidad y salud de la piel del pie, eliminando durezas persistentes.',
      fullDescription: 'Paciente con hiperqueratosis severa en la planta del pie, causando incomodidad al caminar. Se aplicaron técnicas de deslaminación y pulido, seguidas de un tratamiento hidratante profundo. El resultado fue una piel renovada, suave y sin dolor, mejorando significativamente la calidad de vida del paciente.',
    },
    {
      src: 'https://cliniderma.co/wp-content/uploads/Imagenes%20Entradas/Onicomicosis.webp',
      alt: 'Pie con hongo',
      title: 'Tratamiento de Onicomicosis',
      description: 'Recuperación de la uña afectada por hongos, devolviendo su aspecto natural y saludable.',
      fullDescription: 'Caso de onicomicosis avanzada que había afectado la uña del dedo gordo por varios años. Se implementó un protocolo de tratamiento combinado, incluyendo terapia láser y medicación tópica. Después de varios meses de seguimiento, la uña creció completamente sana, eliminando la infección y mejorando la estética del pie.',
    },
    {
      src: 'https://arriaza.es/wp-content/uploads/hallux_valgus.jpg',
      alt: 'Pie con deformidad',
      title: 'Corrección de Deformidad Digital',
      description: 'Intervención para corregir dedos en garra, mejorando la función y reduciendo el dolor.',
      fullDescription: 'Paciente con deformidad de dedo en garra que le causaba dolor al usar calzado y formación de callosidades. Se realizó una pequeña intervención para alinear el dedo, lo que permitió al paciente volver a usar calzado cómodamente y eliminar las molestias asociadas a la deformidad.',
    },
    {
      src: 'https://clinicadelpieembajadores.com/wp-content/uploads/2017/01/PIE-ATLETA.jpg',
      alt: 'Pie de atleta',
      title: 'Manejo de Pie de Atleta',
      description: 'Tratamiento integral para eliminar la infección fúngica y prevenir recurrencias.',
      fullDescription: 'Caso de pie de atleta persistente con picazón, descamación y mal olor. Se prescribió un tratamiento antifúngico y se dieron recomendaciones detalladas sobre higiene y cuidado del calzado. La infección se resolvió completamente, y el paciente aprendió a prevenir futuros brotes.',
    },
    {
      src: 'https://clinicapoyatos.com/wp-content/uploads/2022/06/cuidados-y-tratamiento-del-pie-diabetico.jpg',
      alt: 'Pie diabético',
      title: 'Cuidado del Pie Diabético',
      description: 'Manejo preventivo y tratamiento de complicaciones en pacientes con diabetes.',
      fullDescription: 'Paciente diabético con riesgo de úlceras en el pie. Se implementó un programa de cuidado preventivo que incluyó revisiones periódicas, educación sobre el autocuidado y el uso de calzado adecuado. Gracias a este seguimiento, se evitaron complicaciones graves y se mantuvo la integridad del pie.',
    },
  ];

  const [selectedCase, setSelectedCase] = useState(null);

  const openModal = (caseItem) => {
    setSelectedCase(caseItem);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Nuestros Casos de Éxito</h2>
      <p className="text-xl text-center text-gray-600 mb-12">
        Descubre cómo hemos transformado la salud y el bienestar de los pies de nuestros pacientes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {cases.map((caseItem, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(caseItem)}
          >
            <img src={caseItem.src} alt={caseItem.alt} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{caseItem.title}</h3>
              <p className="text-gray-600">{caseItem.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCase && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-lg shadow-2xl max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 text-3xl font-bold z-10"
            >
              &times;
            </button>
            <img src={selectedCase.src} alt={selectedCase.alt} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{selectedCase.title}</h3>
              <p className="text-gray-700 text-lg">{selectedCase.fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyGallery;
