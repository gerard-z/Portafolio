export type Language = 'es' | 'en';

type Translations = {
  [key in Language]: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    hello: string;
    iAm: string;
    iWorkAs: string;
    iAmLocatedIn: string;
  }
}

export const translations: Translations = {
  es: {
    home: 'Inicio',
    about: 'Sobre Mí',
    projects: 'Proyectos',
    contact: 'Contacto',
    hello: 'Hola, soy',
    iAm: 'soy',
    iWorkAs: 'Trabajo como',
    iAmLocatedIn: 'Ubicado en'
  },
  en: {
    home: 'Home',
    about: 'About Me',
    projects: 'Projects',
    contact: 'Contact',
    hello: 'Hello, I am',
    iAm: 'I am',
    iWorkAs: 'I work as',
    iAmLocatedIn: 'Located in'
  }
} 