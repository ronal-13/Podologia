import { useEffect, useState } from 'react';

const ContactImageCarousel = () => {
  const images = [
    'https://thumbs.dreamstime.com/b/foto-vertical-mujer-pod%C3%B3loga-haciendo-pedicura-m%C3%A9dica-en-sal%C3%B3n-de-belleza-concepto-podolog%C3%ADa-y-cuidado-pies-187727843.jpg',
    'https://i.pinimg.com/236x/7a/62/06/7a6206d68d1074b0e3ce11edb9b8e1bb.jpg',
    'https://www.shutterstock.com/image-photo/female-podiatrist-doing-chiropody-her-260nw-2485646495.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-auto md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
      <img
        src={images[currentIndex]}
        alt="Carrusel de imágenes de contacto"
        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
      />

      {/* Flecha izquierda */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-300"
        aria-label="Imagen anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      {/* Flecha derecha */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-300"
        aria-label="Siguiente imagen"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            } transition-colors duration-300`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ContactImageCarousel;
