import { translations, type Language } from '../../translations';
import './ContactMe.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

interface ContactMeProps {
  language: Language
}

const SOCIAL_LINKS = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gerardcathalifaud',
      icon: FaLinkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gerard-z',
      icon: FaGithub
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://instagram.com/tu-usuario',
    //   icon: FaInstagram
    // }
  ];

export const ContactMe = ({ language }: ContactMeProps) => {  
  return (
    <div className="contact-me-container">
      <h2>{translations[language].interested}</h2>
      <p>{translations[language].contactMeThrough}</p>
      <div className="contact-me-links">
        {SOCIAL_LINKS.map((link) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.name} className="social-link">
            <link.icon className="social-icon" />
          </a>
        ))}
      </div>
      <p>{translations[language].contactMeThroughEmail}</p>
      <a href="mailto:gerard@cathalifaud.dev" target="_blank" rel="noopener noreferrer" className="email-link">
        <FaEnvelope className="email-icon" />
        gerard@cathalifaud.dev
      </a>
    </div>
  )
}