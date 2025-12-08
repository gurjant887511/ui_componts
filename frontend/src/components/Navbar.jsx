import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isImportsOpen, setIsImportsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">UI Components</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {/* Components Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsComponentsOpen(!isComponentsOpen)}
                className="flex items-center space-x-2 hover:text-purple-400 transition"
              >
                <span>Components</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Components Dropdown Menu */}
              {isComponentsOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link to="/components/buttons" className="block px-4 py-2 hover:bg-gray-700">
                      Buttons
                    </Link>
                    <Link to="/components/cards" className="block px-4 py-2 hover:bg-gray-700">
                      Cards
                    </Link>
                    <Link to="/components/forms" className="block px-4 py-2 hover:bg-gray-700">
                      Forms
                    </Link>
                    <Link to="/components/text-effects" className="block px-4 py-2 hover:bg-gray-700">
                      Text Effects
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Imports Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsImportsOpen(!isImportsOpen)}
                className="flex items-center space-x-2 hover:text-purple-400 transition"
              >
                <span>ImportsComponts</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Imports Dropdown Menu */}
              {isImportsOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link to="/imports/framer-motion" className="block px-4 py-2 hover:bg-gray-700">
                      Framer Motion
                    </Link>
                    <Link to="/imports/lucide-icons" className="block px-4 py-2 hover:bg-gray-700">
                      Lucide Icons
                    </Link>
                    <Link to="/imports/tailwind" className="block px-4 py-2 hover:bg-gray-700">
                      Tailwind CSS
                    </Link>
                    <Link to="/imports/glass-button" className="block px-4 py-2 hover:bg-gray-700">
                      Glass Button
                    </Link>
                    <Link to="/imports/cyber-glow-card" className="block px-4 py-2 hover:bg-gray-700">
                      Cyber Glow Card
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;