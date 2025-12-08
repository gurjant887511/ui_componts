import React from "react";
import './CyberGlowInfoCard.css';

export default function CyberGlowInfoCard() {
  return (
    <div className="cyber-glow-card">
      <div className="card-container">
        <div className="glow-effect"></div>
        
        <div className="relative z-10 flex flex-col items-center p-8 text-white">
          <div className="icon-container">
            <i className="fas fa-rocket text-3xl"></i>
          </div>
          
          <h2 className="text-2xl font-bold tracking-wide mb-2">CyberGlow</h2>
          <p className="text-gray-300 text-center text-sm mb-4">
            A futuristic UI component for modern web design — clean, glowing, and interactive.
          </p>
          
          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-medium shadow-md hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">
              Explore
            </button>
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 font-medium hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="pulse-line"></div>
        </div>
      </div>
    </div>
  );
}