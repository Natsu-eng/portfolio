import React from 'react';

const Contact = ({ contact }) => {
  return (
    <section id="contact" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue mb-8 text-center">Me contacter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
            <p className="mb-2"><strong>Adresse :</strong> {contact.location}</p>
            <p className="mb-2"><strong>Téléphone :</strong> {contact.phone}</p>
            <p className="mb-2"><strong>Email :</strong> <a href={`mailto:${contact.email}`} className="text-blue hover:underline">{contact.email}</a></p>
          </div>
          <form className="animate-fade-in">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nom</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue" required></textarea>
            </div>
            <button type="submit" className="bg-green text-white px-6 py-2 rounded-lg hover:bg-opacity-80">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
