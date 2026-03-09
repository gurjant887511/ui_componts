import React from 'react';
import Navbar from './components/Navbar';
import FullWebPreview from './components/FullWebPreview';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-6">
        <FullWebPreview />
      </main>
    </div>
  );
}
