import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4">© 2023 Podología Profesional. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;