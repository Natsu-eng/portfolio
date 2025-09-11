import React from 'react';


const Header = ({ data, className }) => {
  return (
    <header className={`bg-blue text-white p-8 ${className}`}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <h2 className="text-2xl text-green">{data.title}</h2>
        <p className="mt-4">{data.tagline}</p>
      </div>
    </header>
  );
};

export default Header;
