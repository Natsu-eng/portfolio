import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Book, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue text-white p-4 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MHD</div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4 md:space-x-6">
          <NavLink to="/" className="hover:text-green transition flex items-center">
            <Home className="mr-1" /> Accueil
          </NavLink>
          <NavLink to="/projects" className="hover:text-green transition flex items-center">
            <Briefcase className="mr-1" /> Projets
          </NavLink>
          <NavLink to="/blog" className="hover:text-green transition flex items-center">
            <Book className="mr-1" /> Blog
          </NavLink>
          <NavLink to="/certifications" className="hover:text-green transition flex items-center">
            <Book className="mr-1" /> Certifications
          </NavLink>
          <NavLink to="/contact" className="hover:text-green transition flex items-center">
            <Mail className="mr-1" /> Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <NavLink to="/" className="block py-2 px-4 text-white hover:bg-blue-700" onClick={() => setIsOpen(false)}>Accueil</NavLink>
          <NavLink to="/projects" className="block py-2 px-4 text-white hover:bg-blue-700" onClick={() => setIsOpen(false)}>Projets</NavLink>
          <NavLink to="/blog" className="block py-2 px-4 text-white hover:bg-blue-700" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink to="/certifications" className="block py-2 px-4 text-white hover:bg-blue-700" onClick={() => setIsOpen(false)}>Certifications</NavLink>
          <NavLink to="/contact" className="block py-2 px-4 text-white hover:bg-blue-700" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
