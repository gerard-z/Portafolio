import { HorizontalList } from '../../components/items/horizontalList';
import { translations, type Language } from '../../translations';
import './Skills.css';
import { FaAngular, FaVuejs, FaReact, FaJava } from 'react-icons/fa';
import { SiJavascript , SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython, SiDjango, SiFastapi, SiDocker, SiGooglecloud, SiPostgresql, SiMysql, SiUnrealengine, SiGodotengine, SiCplusplus, SiGit, SiLinux } from "react-icons/si";
import { IconToolTip } from '../../components/items/iconToolTip';


interface SkillsProps {
  language: Language
}

const SKILLS_FRONTEND = [
    {
        tooltip: 'JavaScript',
        icon: <SiJavascript  />,
    },
    {
        tooltip: 'TypeScript',
        icon: <SiTypescript />,
    },
    {
        tooltip: 'React',
        icon: <FaReact />,
    },
    {
        tooltip: 'Next.js',
        icon: <SiNextdotjs />,
    },
    {
        tooltip: 'Tailwind CSS',
        icon: <SiTailwindcss />,
    },
    {
        tooltip: 'Angular',
        icon: <FaAngular />,
    },
    {
        tooltip: 'Vue.js',
        icon: <FaVuejs />,
    },
  ];

const SKILLS_BACKEND = [
    {
        tooltip: 'Node.js',
        icon: <SiNodedotjs />,
    },
    {
        tooltip: 'Python',
        icon: <SiPython />,
    },
    {
        tooltip: 'Django',
        icon: <SiDjango />,
    },
    {
        tooltip: 'FastAPI',
        icon: <SiFastapi />,
    },
    {
        tooltip: 'Google Cloud',
        icon: <SiGooglecloud />,
    },
    {
        tooltip: 'PostgreSQL',
        icon: <SiPostgresql />,
    },
    {
        tooltip: 'MySQL',
        icon: <SiMysql />,
    }
  ];

  const SKILLS_GAME_DEVELOPMENT = [
    {
        tooltip: 'Godot',
        icon: <SiGodotengine  />,
    },
    {
        tooltip: 'Unreal Engine',
        icon: <SiUnrealengine />,
    },
    {
        tooltip: 'C++',
        icon: <SiCplusplus  />,
    },
    {
        tooltip: 'Java',
        icon: <FaJava />,
    }

  ];

  const SKILLS_OTHER = [
    {
        tooltip: 'Git',
        icon: <SiGit />,
    },
    {
        tooltip: 'Linux',
        icon: <SiLinux />,
    },
    {
        tooltip: 'Docker',
        icon: <SiDocker />,
    }
  ];


export const Skills = ({ language }: SkillsProps) => {  
  return (
    <div className="skills-container">
      <h2>{translations[language].skills}</h2>
      <div className="skills-list">
        <h3>Frontend</h3>
        <HorizontalList items={SKILLS_FRONTEND} renderItem={item => <IconToolTip icon={item.icon} tooltip={item.tooltip} />} />
        <h3>Backend</h3>
        <HorizontalList items={SKILLS_BACKEND} renderItem={item => <IconToolTip icon={item.icon} tooltip={item.tooltip} />} />
        <h3>Game Development / Software Development</h3>
        <HorizontalList items={SKILLS_GAME_DEVELOPMENT} renderItem={item => <IconToolTip icon={item.icon} tooltip={item.tooltip} />} />
        <h3>{translations[language].other}</h3>
        <HorizontalList items={SKILLS_OTHER} renderItem={item => <IconToolTip icon={item.icon} tooltip={item.tooltip} />} />
      </div>
    </div>
  )
}