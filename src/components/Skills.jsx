import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-blue mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-blue text-white px-3 py-1 rounded-full text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue mb-8">Compétences</h2>
        <div className="animate-fade-in">
          <SkillCategory title="Langages" skills={skills.languages} />
          <SkillCategory title="Frameworks/Bibliothèques" skills={skills.frameworks} />
          <SkillCategory title="Bases de données" skills={skills.databases} />
          <SkillCategory title="Outils" skills={skills.tools} />
          <SkillCategory title="Soft Skills" skills={skills.soft_skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
