import React from 'react';
import { Briefcase, Link } from 'lucide-react';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue mb-8">Expériences</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-300"></div>
          {experiences.map((item, index) => (
            <div key={index} className="mb-8 flex items-center w-full">
              <div className="absolute left-0">
                <div className="bg-blue rounded-full p-2">
                  <Briefcase size={24} className="text-white" />
                </div>
              </div>
              <div className="ml-12 p-6 bg-gray-100 rounded-lg shadow-md w-full animate-fade-in transition-transform transform hover:scale-105 hover:shadow-lg">
                <h3 className="text-xl font-bold">{item.role}</h3>
                <p className="text-green">{item.company}</p>
                <p className="text-sm text-gray-600">{item.period}</p>
                <p className="mt-2">{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-blue hover:text-green">
                    <Link size={16} className="mr-2" />
                    Voir le projet
                  </a>
                )}
                 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
