import React from 'react';
import { Globe } from 'lucide-react';

const Languages = ({ languages }) => {
  return (
    <section id="languages" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-custom-blue mb-8">Langues</h2>
        <div className="flex flex-wrap gap-8 justify-center animate-fade-in">
          {languages.map((lang, index) => (
            <div key={index} className="flex flex-col items-center">
              <Globe size={32} className="text-custom-blue" />
              <h3 className="text-xl font-semibold mt-2">{lang.name}</h3>
              <p className="text-gray-600">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
