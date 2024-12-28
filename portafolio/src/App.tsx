import { useState, useEffect } from 'react'
import './App.css'
import { translations, type Language } from './translations'
import { SectionContainer } from './components/container/SectionContainer'
import { Home } from './sections/home/home'

function App() {
  const [language, setLanguage] = useState<Language>('es')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menu = document.querySelector('.nav-menu');
      const menuButton = document.querySelector('.menu-toggle');
      
      if (isMenuOpen && menu && menuButton && 
          !menu.contains(target) && 
          !menuButton.contains(target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
      <div className="container">
          {/* Botón hamburguesa para móvil */}
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              ☰
            </span>
          </button>

          {/* Menú navegación */}
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={handleNavClick}>{translations[language].home}</a>
            <a href="#projects" onClick={handleNavClick}>{translations[language].projects}</a>
            <a href="#about" onClick={handleNavClick}>{translations[language].about}</a>
            <a href="#contact" onClick={handleNavClick}>{translations[language].contact}</a>
          </nav>
        </div>
        <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
          {language === 'es' ? 'English' : 'Español'}
        </button>
      </header>

      <main className="main">
        <SectionContainer id="home" style={{ minHeight: '40%' }}>
          <Home language={language} />
        </SectionContainer>

        <SectionContainer id="projects" style={{ minHeight: '40%' }}>
          <h2>{translations[language].projects}</h2>
        </SectionContainer>

        <SectionContainer id="about" style={{ minHeight: '40%' }}>
          <h2>{translations[language].about}</h2>
        </SectionContainer>

        <SectionContainer id="contact" style={{ minHeight: '40%' }}>
          <h2>{translations[language].contact}</h2>
        </SectionContainer>
      </main>
    </>
  )
}

export default App
