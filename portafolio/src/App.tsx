import { useState, useEffect } from 'react'
import './App.css'
import { translations, type Language } from './translations'
import { SectionContainer } from './components/container/SectionContainer'
import { Home } from './sections/home/home'
import { AboutMe } from './sections/about/AboutMe'
import { ContactMe } from './sections/contact/ContactMe'
import { Projects } from './sections/projects/Projects'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from './hooks/utils/useTheme'
import { Skills } from './sections/about/Skills'

function App() {
  const [language, setLanguage] = useState<Language>('es')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { nightMode, toggleNightMode } = useTheme()

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
        <div className="header-container">
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
              {isMenuOpen && <a href="#education" onClick={handleNavClick}>{translations[language].education}</a>}
              <a href="#contact" onClick={handleNavClick}>{translations[language].contact}</a>
            </nav>
          </div>
          <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
            {language === 'es' ? 'English' : 'Español'}
          </button>
          <button onClick={toggleNightMode} className="night-mode-button">
            {nightMode ? <FaSun className="text-yellow-500 text-2xl" /> : <FaMoon className="text-gray-500 text-2xl" />}
          </button>
        </div>
      </header>

      <main className="main">
        <SectionContainer id="home" style={{ minHeight: '40%' }}>
          <Home language={language} />
        </SectionContainer>

        <SectionContainer id="projects" style={{ minHeight: '40%' }}>
          <Projects language={language} />
        </SectionContainer>

        <SectionContainer id="about" style={{ minHeight: '40%' }}>
          <AboutMe language={language} />
          <Skills language={language} />
        </SectionContainer>

        <SectionContainer id="contact" style={{ minHeight: '40%', borderBottomWidth: 0 }}>
          <ContactMe language={language} />
        </SectionContainer>
      </main>

      <footer className="footer-container">
        <p className="footer-text">
          {translations[language].footerBuiltWith}
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>, 
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>, 
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> {translations[language].and} 
          <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>. {translations[language].footerHostedOn}
          <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>.
        </p>
        <p className="footer-text">© 2025 Gerard Cathalifaud.</p>
      </footer>
    </>
  )
}

export default App
