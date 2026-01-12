import React from 'react';

const StylishLoginCard = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white">
      <h3 className="text-2xl font-bold mb-6 text-center">Login</h3>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
        <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">Sign In</button>
      </form>
    </div>
  );
};

export default StylishLoginCard;
