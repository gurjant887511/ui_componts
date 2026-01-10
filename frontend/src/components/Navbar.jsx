import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ activeTab, setActiveTab, onLoginClick, onSignupClick, isLoggedIn, onLogout, userInfo }) {
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isImportsOpen, setIsImportsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
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

            {/* Components Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsComponentsOpen(!isComponentsOpen);
                  setActiveTab('components');
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded transition ${
                  activeTab === 'components'
                    ? 'bg-purple-600 text-white'
                    : 'text-white hover:text-purple-400'
                }`}
              >
                <span>Components</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Components Dropdown Menu */}
              {isComponentsOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-700">
                      Buttons
                    </button>
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-700">
                      Cards
                    </button>
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-700">
                      Forms
                    </button>
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-700">
                      Text Effects
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Imports Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsImportsOpen(!isImportsOpen);
                  setActiveTab('imports');
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded transition ${
                  activeTab === 'imports'
                    ? 'bg-purple-600 text-white'
                    : 'text-white hover:text-purple-400'
                }`}
              >
                <span>ImportsComponts</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Imports Dropdown Menu */}
              {isImportsOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-700">
                      Framer Motion
                    </button>
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-700">
                      Lucide Icons
                    </button>
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-700">
                      Tailwind CSS
                    </button>
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-700">
                      Glass Button
                    </button>
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-700">
                      Cyber Glow Card
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* WEB Button */}
            <button
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 rounded transition font-medium ${
                activeTab === 'web'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:text-purple-400'
              }`}
            >
              WEB
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
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
                >
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