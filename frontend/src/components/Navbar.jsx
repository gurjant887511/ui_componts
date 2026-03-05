import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import ProfileModal from './ProfileModal';

function Navbar({ activeTab, setActiveTab, onLoginClick, onSignupClick, isLoggedIn, onLogout, userInfo, onUpdateProfile, isDarkMode, setIsDarkMode }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 mb-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3 bg-gray-900">
        <div className="flex items-center justify-between min-h-16 sm:h-16 bg-gray-900">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link 
              to="/" 
              onClick={() => setActiveTab('home')} 
              className="flex items-center gap-2 relative text-lg sm:text-2xl font-bold group"
            >
              {/* <img src={logo} alt="Logo" className="w-9 h-9 rounded-full shadow-md border-2 border-purple-400 bg-white object-cover" style={{marginRight: '6px'}} /> */}
              <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                UI Inventory
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-500 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-800 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-2 lg:space-x-4 flex-1 ml-4 lg:ml-8">
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

          {/* Auth Buttons - Desktop */}
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a4 4 0 00-5.656 0l1.414-1.414a2 2 0 012.828 0l2.828 2.828a2 2 0 01-2.828 2.828l-1.414-1.414a4 4 0 000 5.656l2.12 2.12a1 1 0 001.414-1.414l-2.12-2.12a2 2 0 010-2.828l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a2 2 0 010-2.828z" clipRule="evenodd" />
                </svg>
              )}
            </button>

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
                  className="px-2 sm:px-4 py-2 text-white hover:text-purple-400 transition font-medium text-sm sm:text-base"
                >
                  Login
                </button>
                <button
                  onClick={onSignupClick}
                  className="px-2 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm sm:text-base"
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 pb-4 pt-2 space-y-2 animate-in fade-in">
            <button
              onClick={() => {
                setActiveTab('home');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded transition font-medium ${
                activeTab === 'home'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:bg-gray-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveTab('components');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded transition font-medium ${
                activeTab === 'components'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:bg-gray-800'
              }`}
            >
              Components
            </button>
            <button
              onClick={() => {
                setActiveTab('fullweb');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded transition font-medium ${
                activeTab === 'fullweb'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:bg-gray-800'
              }`}
            >
              Full Web
            </button>
            <button
              onClick={() => {
                setActiveTab('about');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded transition font-medium ${
                activeTab === 'about'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:bg-gray-800'
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                setActiveTab('template');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded transition font-medium ${
                activeTab === 'template'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:bg-gray-800'
              }`}
            >
              Template
            </button>
            
            {/* Mobile Auth Options */}
            {!isLoggedIn && (
              <>
                <button
                  onClick={onLoginClick}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition font-medium"
                >
                  Login
                </button>
                <button
                  onClick={onSignupClick}
                  className="block w-full text-left px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition font-medium"
                >
                  Signup
                </button>
              </>
            )}
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="block w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition font-medium flex items-center gap-2"
            >
              {isDarkMode ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a4 4 0 00-5.656 0l1.414-1.414a2 2 0 012.828 0l2.828 2.828a2 2 0 01-2.828 2.828l-1.414-1.414a4 4 0 000 5.656l2.12 2.12a1 1 0 001.414-1.414l-2.12-2.12a2 2 0 010-2.828l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a2 2 0 010-2.828z" clipRule="evenodd" />
                  </svg>
                  Dark Mode
                </>
              )}
            </button>
          </div>
        )}
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