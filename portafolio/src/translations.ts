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
    contactMe: string;
    education: string;
    interested: string;
    contactMeThrough: string;
    email: string;
    contactMeThroughEmail: string;
    thesisProject: string;
    assistant: string;
    eolian: string;
    godot: string;
    degree: string;
    university: string;
    degree2: string;
    footerBuiltWith: string;
    footerHostedOn: string;
    and: string;
    skills: string;
    other: string;
    projectsSoon: string;
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
    iAmLocatedIn: 'Ubicado en',
    contactMe: 'Contáctame',
    education: 'Educación',
    interested: 'Te interesa mi trabajo?',
    contactMeThrough: 'Puedes contactarme a través de los siguientes medios:',
    email: 'Correo electrónico',
    contactMeThroughEmail: 'Puedes contactarme a través de mi correo electrónico:',
    thesisProject: "Proyecto de Titulación: Utility AI para personajes no jugadores en videojuegos",
    assistant: "Ayudante de curso: Arquitectura de Computadores, Programación de software de sistemas, Arquitectura de Motores de Videojuegos",
    eolian: "Participación en proyecto estudiantil de automóvil solar EOLIAN",
    godot: "Realización de proyectos de videojuegos en Godot 2D para taller de videojuegos",
    degree: "Ingeniería Civil en Computación",
    university: "Universidad de Chile",
    degree2: "Licenciatura en Ciencias de la Computación",
    footerBuiltWith: "Proyecto realizado con",
    footerHostedOn: "Alojado en",
    and: "y",
    skills: "Habilidades",
    other: "Otros",
    projectsSoon: "Pronto estarán disponibles",
  },
  en: {
    home: 'Home',
    about: 'About Me',
    projects: 'Projects',
    contact: 'Contact',
    hello: 'Hello, I am',
    iAm: 'I am',
    iWorkAs: 'I work as',
    iAmLocatedIn: 'Located in',
    contactMe: 'Contact Me',
    education: 'Education',
    interested: 'Are you interested in my work?',
    contactMeThrough: 'You can contact me through the following means:',
    email: 'Email',
    contactMeThroughEmail: 'You can contact me through my email:',
    thesisProject: "Thesis Project: Utility AI for NPCs in Video Games",
    assistant: "Course Assistant: Computer Architecture, Software Systems Programming, Game Engine Architecture",
    eolian: "Participation in the EOLIAN solar car student project",
    godot: "Realization of video game projects in Godot 2D for the video game workshop",
    degree: "Computer Science Engineer",
    university: "University of Chile",
    degree2: "Computer Science Bachelor",
    footerBuiltWith: "Built with",
    footerHostedOn: "Hosted on",
    and: "and",
    skills: "Skills",
    other: "Other",
    projectsSoon: "Soon available",
  }
} 