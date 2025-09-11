import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './data.json';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';

import Footer from './components/Footer';
import Blog from './components/Blog'; // Import the new Blog component

function App() {
  return (
    <BrowserRouter basename="/portfolio-mamadou-diallo"> {/* Add basename for GitHub Pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header data={data} className="pt-16" />
            <main className="pt-16">
              <About about={data.about} />
              <Experience experiences={data.experiences} />
              <Projects projects={data.projects} />
              <Education education={data.education} />
              <Skills skills={data.skills} />
              <Certifications certifications={data.certifications} />
              <Languages languages={data.languages} />
              <Contact contact={data.contact} />
            </main>
          </>
        } />
        <Route path="/about" element={<div className="pt-16"><About about={data.about} /></div>} />
        <Route path="/experience" element={<div className="pt-16"><Experience experiences={data.experiences} /></div>} />
        <Route path="/projects" element={<div className="pt-16"><Projects projects={data.projects} /></div>} />
        <Route path="/education" element={<div className="pt-16"><Education education={data.education} /></div>} />
        <Route path="/skills" element={<div className="pt-16"><Skills skills={data.skills} /></div>} />
        <Route path="/certifications" element={<div className="pt-16"><Certifications certifications={data.certifications} /></div>} />
        <Route path="/languages" element={<div className="pt-16"><Languages languages={data.languages} /></div>} />
        <Route path="/contact" element={<div className="pt-16"><Contact contact={data.contact} /></div>} />
        <Route path="/blog" element={<div className="pt-16"><Blog /></div>} /> {/* New Blog Route */}
      </Routes>
      <Footer name={data.name} social={data.social} />
    </BrowserRouter>
  );
}

export default App;
