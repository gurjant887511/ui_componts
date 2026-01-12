import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ButtonsPage from './pages/ButtonsPage';
import CardsPage from './pages/CardsPage';
import FormsPage from './pages/FormsPage';
import TextEffectsPage from './pages/TextEffectsPage';
import CyberGlowInfoCardPreview from './pages/imports/CyberGlowInfoCardPreview';
import ComponentsPage from './pages/ComponentsPage';
import StylishX from './components/StylishX';
import Nexus from './components/Nexus';
import Lumina from './components/Lumina';
import RaiboWeb from './components/RaiboWeb';
import ElectroX from './components/ElectroX';
import MyWebsite from './components/MyWebsite';
import DynamicWeb from './components/DynamicWeb';
import ElectroTech from './components/ElectroTech';
import WebsiteFullPreview from './components/WebsiteFullPreview';

function AppRoutes({ components }) {
  return (
    <Routes>
      <Route path="/" element={<ButtonsPage components={components} />} />
      <Route path="/components" element={<ComponentsPage components={components} />} />
      <Route
        path="/components/buttons"
        element={<ButtonsPage components={components} />}
      />
      <Route
        path="/components/cards"
        element={<CardsPage components={components} />}
      />
      <Route
        path="/components/forms"
        element={<FormsPage components={components} />}
      />
      <Route
        path="/components/text-effects"
        element={<TextEffectsPage components={components} />}
      />
      <Route
        path="/imports/cyber-glow-card"
        element={<CyberGlowInfoCardPreview />}
      />
      <Route path="/websites/stylishx" element={<StylishX />} />
      <Route path="/websites/nexus" element={<Nexus />} />
      <Route path="/websites/lumina" element={<Lumina />} />
      <Route path="/websites/raiboweb" element={<RaiboWeb />} />
      <Route path="/websites/electrox" element={<ElectroX />} />
      <Route path="/websites/mywebsite" element={<MyWebsite />} />
      <Route path="/websites/dynamicweb" element={<DynamicWeb />} />
      <Route path="/websites/electrotech" element={<ElectroTech />} />
      
      {/* Full Page Preview Routes */}
      <Route path="/preview/website/:websiteName" element={<WebsiteFullPreview />} />
    </Routes>
  );
}

export default AppRoutes;