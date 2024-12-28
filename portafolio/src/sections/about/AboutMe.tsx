import { translations, type Language } from '../../translations';
import './AboutMe.css';
import { FaGraduationCap } from 'react-icons/fa';
import { VerticalCard } from '../../components/items/verticalCard';

interface AboutMeProps {
  language: Language
}

export const AboutMe = ({ language }: AboutMeProps) => {  
  return (
    <>
      <div className="about-me-container">
        <div className="about-me-content">
          <h2>{translations[language].about}</h2>
          {language === 'es' ? (
            <p>
              En 2019 comencé mis estudios en la universidad de Chile, en la carrera de Ingeniería Civil en Computación. 
              En un principio, tomé la carrera para utilizar los primeros dos años de plan común para poder elegir una carrera más específica.
              LLegué a cursar un año de Ingeniería Civil en Matemáticas, donde aprendí conceptos claves sobre topología, teoría de la medida y teoría de la probabilidad.
              Sin embargo, no me sentía cómodo con la carrera, y por otro lado, los electivos de la carrera de computación me llamaron más la atención.
              Así que, en 2022 cambié a la carrera de Ingeniería Civil en Computación.
              Durante mi carrera, aprendí conceptos de matemáticas, algoritmos, bases de datos, programación, entre otros. Tomando electivos interesantes como:
              Arquitectura de Computadores, Sistemas Operativos, Redes de Computadores, Diseño e Implementación de Compiladores, Arquitectura de Motores de Videojuegos, entre otros.
              <br />
              Además, tuve la oportunidad de trabajar en proyectos de software, lo que me permitió aplicar los conocimientos teóricos en la práctica. Como la construcción de la
              página web de FabLab de la universidad de Chile, en un proyecto universitario en conjunto a un grupo de 5 estudiantes. En 2024, realicé mi proyecto de titulación,
              el cual consistió en la implementación de un sistema de inteligencia artificial para que personajes de videojuegos puedan realizar planificaciones de varios pasos,
              utilizando el algoritmo A* para encontrar la mejor solución, modelando el mundo y los efectos de las acciones como un grafo y sus transiciones.
              <br />
              Me considero una persona proactiva, con ganas de aprender y crecer profesionalmente.
              Me gusta trabajar en equipo y aportar ideas para mejorar los procesos y productos.
              Mi objetivo es seguir creciendo profesionalmente y aportar valor a la sociedad a través de la tecnología.
            </p>
          ) : (
            <p>
              In 2019 I started my studies at the University of Chile, in the career of Computer Science Engineering. 
              Initially, I took the career to use the first two years of common plan to be able to choose a more specific career.
              I took one year of Civil Engineering in Mathematics, where I learned key concepts about topology, measure theory and probability theory.
              However, I did not feel comfortable with the career, and on the other hand, the electives of the computer science career called my attention more.
              So, in 2022 I switched to the Computer Science Engineering degree.
              During my career, I learned concepts of mathematics, algorithms, databases, programming, among others. Taking interesting electives such as: 
              Computer Architecture, Operating Systems, Computer Networks, Compiler Design and Implementation, Video Game Engine Architecture, among others.
              <br />
              In addition, I had the opportunity to work on software projects, which allowed me to apply theoretical knowledge in practice. As the construction of the
              FabLab website of the University of Chile, in a university project together with a group of 5 students. In 2024, I did my degree project,
              which consisted in the implementation of an artificial intelligence system for video game characters to perform multi-step planning,
              using the A* algorithm to find the best solution, modeling the world and the effects of the actions as a graph and its transitions.
              <br />
              I consider myself a proactive person, eager to learn and grow professionally.
              I like to work in a team and contribute ideas to improve processes and products.
              My goal is to continue growing professionally and contribute value to society through technology.
            </p>
          )}
        </div>
        <div id="education" className="about-me-education">
            <h2><FaGraduationCap /> {translations[language].education}</h2>
            <ul>
                <li><VerticalCard dateFrom="2019" dateTo="2024" title="Ingeniería Civil en Computación" subtitle="Universidad de Chile">
                        <ul className="degree-list">
                            <li>Proyecto de Titulación: Utility AI para personajes no jugadores en videojuegos</li>
                            <li>Ayudante de curso: Arquitectura de Computadores, Programación de software de sistemas, Arquitectura de Motores de Videojuegos</li>
                        </ul>
                    </VerticalCard>
                </li>
                <li><VerticalCard dateFrom="2019" dateTo="2023" title="Licenciatura en Ciencias de la Computación" subtitle="Universidad de Chile">
                        <ul className="degree-list">
                            <li>Participación en proyecto estudiantil de automóvil solar EOLIAN</li>
                            <li>Realización de proyectos de videojuegos en Godot 2D para taller de videojuegos</li>
                        </ul>
                    </VerticalCard>
                </li>
            </ul>
        </div>
      </div>
    </>
  )
}