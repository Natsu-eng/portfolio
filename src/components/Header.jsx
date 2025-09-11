import React from 'react';
import { Linkedin, Github, Download } from 'lucide-react';

const Header = ({ data }) => {
  return (
    <header className="bg-blue text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <h2 className="text-2xl text-green">{data.title}</h2>
        <p className="mt-4">{data.tagline}</p>
        <div className="mt-4 flex space-x-4">
          <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green">
            <Linkedin size={24} />
          </a>
          <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-green">
            <Github size={24} />
          </a>
        </div>
        <div className="mt-4">
          <p>{data.contact.location}</p>
          <p>{data.contact.phone}</p>
          <p>{data.contact.email}</p>
        </div>
        <div className="mt-6 flex space-x-4">
          <a href="/cv.pdf" download className="bg-green text-white px-4 py-2 rounded hover:bg-opacity-80 flex items-center">
            <Download size={20} className="mr-2" />
            Télécharger CV
          </a>
          <a href="#contact" className="bg-gray-200 text-blue px-4 py-2 rounded hover:bg-opacity-80">
            Me contacter
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
