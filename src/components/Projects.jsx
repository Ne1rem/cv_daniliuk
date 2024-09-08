import React from "react";
import "../styles/Projects.css";
import projects from '../assets/data/projects';

function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="titleProjects">Мои проекты</h2>
      <ul className="myProjects">
        {projects.map((project, index) => (
          <li key={index} className="project">
            <a target="_blank"
            className="projectA"
          rel="noopener noreferrer"
           href={project.url} >
            <p className="nameProject">{project.projectName}</p>
            
            <div className="divProject"><img src={project.ogImage} alt={project.projectName} width={100} height={100} className="projectImg"/>
            <ul>
              <p className="titleTechn">{project.technologies}
              </p>
              {project.technologests.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul></div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
