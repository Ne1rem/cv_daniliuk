import React, { useState } from 'react';
import '../styles/Projects.css';
import projects from '../assets/data/projects';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="container">
      <h2 className="titleProjects">My projects</h2>
      <ul className="myProjects">
        {projects.map((project, index) => (
          <li
            key={index}
            className="project"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              target="_blank"
              className="projectA"
              rel="noopener noreferrer"
              href={project.url}
            >
              {hoveredIndex === index ? (
                <img
                  src={project.gifImage}
                  alt="projectGif"
                  className="projectGif"
                  width={100}
                  height={100}
                />
              ) : (
                <>
                  <p className="nameProject">{project.projectName}</p>
                  <div className="divProject">
                    <img
                      src={project.ogImage}
                      alt={project.projectName}
                      width={100}
                      height={100}
                      className="projectImg"
                    />
                    <ul>
                      <p className="titleTechn">{project.technologies}</p>
                      {project.technologests.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
