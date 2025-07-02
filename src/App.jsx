import { useState } from 'react';
import AboutMeSection from './components/AboutMeSection';
import CaseStudyGallery from './components/CaseStudyGallery';
import ContactSection from './components/ContactSection';
import FloatingContactButton from './components/FloatingContactButton';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import PortfolioHeader from './components/PortfolioHeader';
import ServicesSection from './components/ServicesSection';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HeroSection setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesSection />;
      case 'cases':
        return (
          <section className="py-20 bg-gray-100 min-h-screen">
            <CaseStudyGallery />
          </section>
        );
      case 'about':
        return <AboutMeSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 overflow-x-hidden custom-scrollbar"> {/* Agregado overflow-x-hidden y custom-scrollbar */}
      <style>
        {`

        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Ocultar la barra de desplazamiento para IE, Edge y Firefox */
        .custom-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        `}
      </style>
      <PortfolioHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <FooterSection />
      <FloatingContactButton />
    </div>
  );
}

export default App;
