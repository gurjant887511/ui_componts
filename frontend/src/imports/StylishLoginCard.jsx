import React, { useState } from 'react';

export default function StylishLoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
          
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Remember me</span>
              </label>
              <button className="text-blue-400 hover:text-blue-300">Forgot password?</button>
            </div>

            {/* Login Button */}
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all">
              Sign In
            </button>

            {/* Signup Link */}
            <div className="text-center">
              <span className="text-gray-400">Don't have an account? </span>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
