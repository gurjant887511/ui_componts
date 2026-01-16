import React from 'react';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import StylishComponentsPreview from './StylishComponentsPreview';

export default function HomeSection() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <StylishComponentsPreview />
      <Footer />
    </div>
  );
}