import React from 'react';
import data from './data.json';
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

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Header data={data} />
      <main>
        <About about={data.about} />
        <Experience experiences={data.experiences} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Skills skills={data.skills} />
        <Certifications certifications={data.certifications} />
        <Languages languages={data.languages} />
        <Contact contact={data.contact} />
      </main>
      <Footer name={data.name} social={data.social} />
    </div>
  );
}

export default App;
