import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StylishX from './StylishX';
import Nexus from './Nexus';
import Lumina from './Lumina';
import RaiboWeb from './RaiboWeb';
import ElectroX from './ElectroX';
import MyWebsite from './MyWebsite';
import DynamicWeb from './DynamicWeb';
import ElectroTech from './ElectroTech';

const WebsiteMap = {
  stylishx: StylishX,
  nexus: Nexus,
  lumina: Lumina,
  raiboweb: RaiboWeb,
  electrox: ElectroX,
  mywebsite: MyWebsite,
  dynamicweb: DynamicWeb,
  electrotech: ElectroTech,
};

export default function WebsiteFullPreview() {
  const { websiteName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure full screen experience by removing any margins/paddings
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    
    return () => {
      // Cleanup
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
    };
  }, []);

  if (!websiteName || !WebsiteMap[websiteName.toLowerCase()]) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-white mb-4">❌ Website Not Found</h1>
          <p className="text-gray-300 mb-8 text-lg">The website "<span className="font-semibold">{websiteName}</span>" does not exist.</p>
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg font-semibold"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const WebsiteComponent = WebsiteMap[websiteName.toLowerCase()];
  const websiteNames = {
    stylishx: 'StylishX',
    nexus: 'NEXUS',
    lumina: 'LUMINA',
    raiboweb: 'RaiboWeb',
    electrox: 'ElectroX',
    mywebsite: 'MyWebsite',
    dynamicweb: 'DynamicWeb',
    electrotech: 'ElectroTech',
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          body, html, #root {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          #website-container {
            width: 100%;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
          }
        `}
      </style>
      
      {/* Floating Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl font-bold">📱</span>
              <div>
                <h2 className="font-bold">{websiteNames[websiteName.toLowerCase()] || websiteName}</h2>
                <p className="text-xs text-gray-300">Full Page Preview</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all flex items-center gap-2 font-medium"
          >
            <span>←</span> Back
          </button>
        </div>
      </div>

      {/* Website Container */}
      <div id="website-container" className="pt-20">
        <WebsiteComponent />
      </div>
    </div>
  );
}

