import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">UI Components</h3>
            <p className="text-slate-300">
              A collection of beautiful and reusable React components
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/components" className="text-slate-300 hover:text-white">Components</a>
              </li>
              <li>
                <a href="/imports" className="text-slate-300 hover:text-white">Imports</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-slate-300">
              Have questions? <br />
              Email us at support@uicomponents.com
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} UI Components. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}