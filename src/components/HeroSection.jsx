
const HeroSection = ({ setCurrentPage }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden pt-16"> {/* Ajustado el padding-top para el header fijo */}
      {/* Imagen de fondo que ocupa todo el section */}
      <div className="absolute inset-0">
        <img
          src="https://podologiaelenagarcia.com/wp-content/uploads/2022/09/Pies1.jpg"
          alt="Pies sanos y cuidados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay oscuro para mejor contraste */}
      </div>

      {/* Contenido principal del Hero */}
      <div className="relative z-10 text-center py-16 max-w-4xl mx-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          Cuidado Experto para tus Pies, <span className="text-blue-300">Bienestar Total</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
          Enfocados en la salud y estética de tus pies, ofrecemos tratamientos avanzados con la más alta profesionalidad y tecnología.
        </p>
        <button
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Agenda tu Cita
        </button>
      </div>

      {/* Nueva sección de contenido adicional */}
      <div className="relative z-10 w-full bg-white bg-opacity-95 shadow-2xl rounded-t-3xl p-8 md:p-12 mt-auto">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-xl shadow-md">
              <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Profesionales Certificados</h3>
              <p className="text-gray-600">Nuestro equipo está altamente capacitado y en constante actualización.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-md">
              <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5v-5a2 2 0 012-2h2.5M17 13l-2 2m0 0l-2-2m2 2v2.5"></path>
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tecnología de Vanguardia</h3>
              <p className="text-gray-600">Utilizamos equipos modernos para diagnósticos precisos y tratamientos efectivos.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-md">
              <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Atención Personalizada</h3>
              <p className="text-gray-600">Cada paciente recibe un plan de tratamiento adaptado a sus necesidades.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// DONE