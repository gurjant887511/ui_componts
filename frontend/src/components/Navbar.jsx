import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileModal from './ProfileModal';

function Navbar({ activeTab, setActiveTab, onLoginClick, onSignupClick, isLoggedIn, onLogout, userInfo, onUpdateProfile }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={() => setActiveTab('home')} 
              className="relative text-2xl font-bold group"
            >
              <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                UI Components
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-500 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></span>
            </Link>
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

            {/* Template Button */}
            <button
              onClick={() => setActiveTab('template')}
              className={`px-4 py-2 rounded transition font-medium ${
                activeTab === 'template'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:text-purple-400'
              }`}
            >
              Template
            </button>

          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleProfileClick}
                  className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-80 transition"
                  title="View Profile"
                >
                  {userInfo?.name ? userInfo.name.charAt(0).toUpperCase() : userInfo?.email.charAt(0).toUpperCase()}
                </button>
                <button
                  onClick={onLogout}
                  className="w-10 h-10 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition flex items-center justify-center"
                  title="Logout"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
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

      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        userInfo={userInfo}
        onUpdateProfile={onUpdateProfile}
      />
    </nav>
  );
}

export default Navbar;