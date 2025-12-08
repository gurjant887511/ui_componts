import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ButtonsPage from './pages/ButtonsPage';
import CardsPage from './pages/CardsPage';
import FormsPage from './pages/FormsPage';
import TextEffectsPage from './pages/TextEffectsPage';
import CyberGlowInfoCardPreview from './pages/imports/CyberGlowInfoCardPreview';
import ComponentsPage from './pages/ComponentsPage';

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
    </Routes>
  );
}

export default AppRoutes;