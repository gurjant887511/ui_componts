import React from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';

export default function Home(props) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <Footer />
    </div>
  );
};