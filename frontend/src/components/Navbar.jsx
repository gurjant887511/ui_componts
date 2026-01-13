import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ activeTab, setActiveTab, onLoginClick, onSignupClick, isLoggedIn, onLogout, userInfo }) {

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => setActiveTab('home')} className="text-xl font-bold">UI Components</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 flex-1 ml-8">
            {/* Home Button */}
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded transition font-medium ${
                activeTab === 'home'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:text-purple-400'
              }`}
            >
              Home
            </button>

            {/* Components Button - Simple */}
            <button
              onClick={() => setActiveTab('components')}
              className={`px-4 py-2 rounded transition font-medium ${
                activeTab === 'components'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:text-purple-400'
              }`}
            >
              Components
            </button>

            {/* Full Web Button */}
            <button
              onClick={() => setActiveTab('fullweb')}
              className={`px-4 py-2 rounded transition font-medium ${
                activeTab === 'fullweb'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:text-purple-400'
              }`}
            >
              Full Web
            </button>

            {/* About Button */}
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 rounded transition font-medium ${
                activeTab === 'about'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:text-purple-400'
              }`}
            >
              About
            </button>


          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-3 px-4 py-2 bg-purple-600/20 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {userInfo?.name ? userInfo.name.charAt(0).toUpperCase() : userInfo?.email.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-white">{userInfo?.name || userInfo?.email.split('@')[0]}</p>
                    <p className="text-xs text-gray-300">{userInfo?.email}</p>
                  </div>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium flex items-center gap-1.5"
                  title="Logout"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onLoginClick}
                  className="px-4 py-2 text-white hover:text-purple-400 transition font-medium"
                >
                  Login
                </button>
                <button
                  onClick={onSignupClick}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;