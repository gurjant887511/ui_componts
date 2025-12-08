import React, { useState } from 'react';

export default function ForgotPasswordCard() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-2">Forgot Password</h1>
          <p className="text-gray-400 text-center mb-8">No worries, we'll help you recover your account</p>
          
          {!submitted ? (
            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
                />
              </div>

              {/* Info Text */}
              <p className="text-sm text-white/60">
                We'll send you an email with instructions to reset your password.
              </p>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                type="button"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all"
              >
                Send Reset Link
              </button>

              {/* Back to Login */}
              <div className="text-center">
                <button type="button" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Back to login
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-bold">Check your email</h2>
              <p className="text-white/60">
                We've sent password reset instructions to <span className="text-blue-400">{email}</span>
              </p>
              <button
                onClick={() => { setSubmitted(false); setEmail(''); }}
                type="button"
                className="w-full px-4 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
