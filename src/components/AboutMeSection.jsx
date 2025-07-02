
const AboutMeSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Quién Soy</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 bg-white p-8 rounded-2xl shadow-xl">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1580828343410-e79202211192?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Foto de referencia del profesional
              alt="Foto del Podólogo/a"
              className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-200"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Dra. Brisa Gutiérrez</h3>
            <p className="text-lg text-gray-700 mb-6">
              Soy una podóloga comprometida con la salud y el bienestar integral de los pies. A lo largo de mi trayectoria, 
              me he enfocado en brindar un servicio personalizado, humano y de alta calidad, adaptado a las necesidades de 
              cada paciente. Mi objetivo es ofrecer tratamientos efectivos que mejoren la calidad de vida de las personas, 
              aplicando técnicas modernas y tecnología de vanguardia.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Mi formación incluye estudios especializados en podología, así como certificaciones actualizadas que respaldan 
              mi práctica profesional. Considero fundamental mantenerme en constante actualización para garantizar una atención 
              segura, eficaz y basada en evidencia.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Además de mi trabajo en el consultorio, disfruto realizar caminatas al aire libre y leer sobre salud y 
              bienestar, lo que me permite mantener un equilibrio personal y comprender mejor las necesidades de mis 
              pacientes en su día a día.
            </p>

            {/* Sección de Redes Sociales */}
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Sígueme en redes sociales:</h4>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/tuperfil" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.715.01 3.657.042 1.028.038 1.76.21 2.34.432.74.286 1.26.72 1.74 1.2.48.48.914 1 1.2 1.74.222.58.394 1.312.432 2.34.032.942.042 1.227.042 3.657 0 2.43-.01 2.715-.042 3.657-.038 1.028-.21 1.76-.432 2.34-.286.74-.72 1.26-1.2 1.74-.48.48-1 1.2-1.74 1.2-.58.222-1.312.394-2.34.432-.942.032-1.227.042-3.657.042-2.43 0-2.715-.01-3.657-.042-1.028-.038-1.76-.21-2.34-.432-.74-.286-1.26-.72-1.74-1.2-.48-.48-1-.914-1.2-1.74-.222-.58-.394-1.312-.432-2.34-.032-.942-.042-1.227-.042-3.657 0-2.43.01-2.715.042-3.657.038-1.028.21-1.76.432-2.34.286-.74.72-1.26 1.2-1.74.48-.48 1-.914 1.2-1.74.222-.58.394-1.312.432-2.34.032-.942.042-1.227.042-3.657zM12 1.5c-2.474 0-2.794.01-3.76.043-1.05.038-1.79.21-2.42.44-.65.24-1.12.59-1.6.97-.48.38-.83.85-1.07 1.5-.23.63-.4 1.37-.44 2.42-.03 1.05-.04 1.37-.04 3.76s.01 2.79.04 3.76c.04.99.21 1.73.44 2.36.24.65.59 1.12.97 1.6.38.48.85.83 1.5 1.07.63.23 1.37.4 2.36.44 1.05.03 1.37.04 3.76.04s2.79-.01 3.76-.04c.99-.04 1.73-.21 2.36-.44.65-.24 1.12-.59 1.6-.97.38-.48.83-.85 1.07-1.5.23-.63.4-1.37.44-2.36.03-1.05.04-1.37.04-3.76s-.01-2.79-.04-3.76c-.04-.99-.21-1.73-.44-2.36-.24-.65-.59-1.12-.97-1.6-.38-.48-.85-.83-1.5-1.07-.63-.23-1.37-.4-2.36-.44-1.05-.03-1.37-.04-3.76-.04zm0 5.83c-2.04 0-3.7 1.66-3.7 3.7s1.66 3.7 3.7 3.7 3.7-1.66 3.7-3.7-1.66-3.7-3.7-3.7zm0 6.17c-2.47 0-4.47-2-4.47-4.47s2-4.47 4.47-4.47 4.47 2 4.47 4.47-2 4.47-4.47 4.47zm5.23-11.37c-.76 0-1.37.61-1.37 1.37s.61 1.37 1.37 1.37 1.37-.61 1.37-1.37-.61-1.37-1.37-1.37z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
