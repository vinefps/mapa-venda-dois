'use client'

import React from 'react';
import Benefits from '../../components-financeiro/Benefits';
import FAQ from '../../components-financeiro/FAQ';
import Features from '../../components-financeiro/Features';
import Hero from '../../components-financeiro/Hero';
import Pricing from '../../components-financeiro/Pricing';
import './page.css';

const MapaFinanceiroPage = () => {
  return (
    <div className="mapa-financeiro-page">
      <div className="max-w-6xl mx-auto px-4">
        <Hero />
        <Features />
        <Benefits />
        <Pricing />
        <FAQ />
      </div>
    </div>
  );
};

export default MapaFinanceiroPage;