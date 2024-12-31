import { translations, type Language } from '../../translations';
import './Projects.css';

interface ProjectsProps {
    language: Language;
}

export const Projects = ({ language }: ProjectsProps) => {
    return (
        <div className="projects-container">
            <h1>{translations[language].projects}</h1>
            <h2>{translations[language].projectsSoon}...</h2>
        </div>
    )
}