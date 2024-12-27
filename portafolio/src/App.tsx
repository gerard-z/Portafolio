import { useState } from 'react'
import './App.css'
import { translations, type Language } from './translations'

function App() {
  const [language, setLanguage] = useState<Language>('es')

  return (
    <>
      <header>
        <div className="container">
          <a href="#home">{translations[language].home}</a>
          <a href="#about">{translations[language].about}</a>
          <a href="#projects">{translations[language].projects}</a>
          <a href="#contact">{translations[language].contact}</a>
        </div>
        <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
          {language === 'es' ? 'English' : 'Español'}
        </button>
      </header>

      <main>
        <section id="home">
          <h1>{translations[language].home}</h1>
        </section>

        <section id="about">
          <h2>{translations[language].about}</h2>
        </section>

        <section id="projects">
          <h2>{translations[language].projects}</h2>
        </section>

        <section id="contact">
          <h2>{translations[language].contact}</h2>
        </section>
      </main>
    </>
  )
}

export default App
