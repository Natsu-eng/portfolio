import React from 'react';

const About = ({ about }) => {
  return (
    <section id="about" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue mb-4">À propos</h2>
        <p className="text-lg">{about}</p>
      </div>
    </section>
  );
};

export default About;
