
const PortfolioHeader = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Servicios', page: 'services' },
    { name: 'Casos de Éxito', page: 'cases' },
    { name: 'Quién Soy', page: 'about' },
    { name: 'Contacto', page: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo que lleva al inicio */}
        <button onClick={() => setCurrentPage('home')} className="focus:outline-none">
          <img
            src="https://i.pinimg.com/originals/9d/01/09/9d0109dfe9f2c2af65866b0426cc07ae.jpg" // Reemplaza con la URL de tu logo
            alt="Logo Podología Profesional"
            className="h-12 w-auto cursor-pointer" // Ajusta el tamaño según tu logo
          />
        </button>

        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => setCurrentPage(item.page)}
                className={`text-lg font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default PortfolioHeader;

// DONE