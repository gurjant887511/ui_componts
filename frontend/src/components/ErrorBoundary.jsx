import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import HomePage from './HomePage';
import ComponentsPage from './ComponentsPage';
import ImportsPage from './ImportsPage';

function App() {
  return (
    <Routes>
      <ErrorBoundary>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage components={components} />} />
        <Route path="/imports" element={<ImportsPage />} />
      </ErrorBoundary>
    </Routes>
  );
}

export default App;