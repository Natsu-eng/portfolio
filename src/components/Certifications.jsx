import React from 'react';
import { Award } from 'lucide-react';

const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md animate-fade-in transition-transform transform hover:scale-105 hover:shadow-lg">
              <Award size={24} className="text-green mr-4" />
              <div>
                <h3 className="font-bold">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.issuer} - {cert.year}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
