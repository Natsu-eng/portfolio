import React from 'react';
import { Github } from 'lucide-react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue mb-8">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-fade-in transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.year}</p>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue hover:text-green">
                <Github size={16} className="mr-2" />
                Voir sur GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
