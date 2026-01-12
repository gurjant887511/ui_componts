import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ activeTab, setActiveTab, onLoginClick, onSignupClick, isLoggedIn, onLogout, userInfo }) {

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50">
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

            {/* Components by Category */}
            <button
              onClick={() => setActiveTab('library')}
              className={`px-4 py-2 rounded transition font-medium ${
                activeTab === 'library'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:text-purple-400'
              }`}
            >
              Library
            </button>

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

            {/* CustomizeWeb Button */}
            <button
              onClick={() => setActiveTab('customizeweb')}
              className={`px-4 py-2 rounded transition font-medium ${
                activeTab === 'customizeweb'
                  ? 'bg-purple-600 text-white'
                  : 'text-white hover:text-purple-400'
              }`}
            >
              CustomizeWeb
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

            {/* Test Button */}
            <button
              onClick={() => setActiveTab('test')}
              className={`px-4 py-2 rounded transition font-medium text-xs ${
                activeTab === 'test'
                  ? 'bg-red-600 text-white'
                  : 'text-white hover:text-red-400'
              }`}
            >
              🧪 Test API
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