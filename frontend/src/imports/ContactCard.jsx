import React from 'react';

const ContactCard = () => {
  return (
    <div className="max-w-md p-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg text-white">
      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none" />
        <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none"></textarea>
        <button className="w-full px-4 py-2 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-opacity-90 transition">Send Message</button>
      </form>
    </div>
  );
};

export default ContactCard;
