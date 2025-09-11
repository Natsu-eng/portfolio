import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = ({ name, social }) => {
  return (
    <footer className="bg-blue text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green">
            <Linkedin size={24} />
          </a>
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-green">
            <Github size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {name}</p>
      </div>
    </footer>
  );
};

export default Footer;
