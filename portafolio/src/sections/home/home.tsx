import { translations, type Language } from '../../translations';
import './home.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

interface HomeProps {
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

export const Home = ({ language }: HomeProps) => {  
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <h2>{translations[language].hello}</h2>
          <h2><span className="name">Gerard Cathalifaud Salazar</span></h2>
          <p className="job">{translations[language].iWorkAs} <span></span></p>
          <p className="description">{translations[language].iAmLocatedIn} Chile.</p>
        </div>
        <div className="flex flex-col items-end justify-center">
          <img src="src/assets/images/profile.jpeg" alt="Gerard Cathalifaud Salazar" className="profile-image" />
          <div className="flex flex-row items-center justify-center">
            {SOCIAL_LINKS.map((link) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.name} className="social-link">
                <link.icon className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}