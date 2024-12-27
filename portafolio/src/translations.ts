export type Language = 'es' | 'en';

type Translations = {
  [key in Language]: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  }
}

export const translations: Translations = {
  es: {
    home: 'Inicio',
    about: 'Sobre Mí',
    projects: 'Proyectos',
    contact: 'Contacto'
  },
  en: {
    home: 'Home',
    about: 'About Me',
    projects: 'Projects',
    contact: 'Contact'
  }
} 