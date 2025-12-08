import React, { useState } from 'react';

export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-2">Get In Touch</h1>
          <p className="text-gray-400 text-center mb-8">We'd love to hear from you</p>
          
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="5"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="button" className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all">
              Send Message
            </button>

            {/* Contact Info */}
            <div className="pt-4 border-t border-white/10 text-center text-sm text-gray-400">
              <p>📧 support@example.com</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
