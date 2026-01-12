import React from 'react';

const ForgotPasswordCard = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white">
      <h3 className="text-2xl font-bold mb-2 text-center">Forgot Password?</h3>
      <p className="text-sm text-gray-300 text-center mb-6">Enter your email to reset your password</p>
      <form className="space-y-4">
        <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
        <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPasswordCard;
