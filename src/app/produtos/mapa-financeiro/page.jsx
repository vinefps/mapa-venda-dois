'use client'

import React from 'react';
import Benefits from '../../components-financeiro/Benefits';
import FAQ from '../../components-financeiro/FAQ';
import Hero from '../../components-financeiro/Hero';
import Header from '../../components-financeiro/Header';
import Pricing from '../../components-financeiro/Pricing';
import './page.css';

const MapaFinanceiroPage = () => {
  // Definir o tema com as cores verdes
  const theme = {
    primaryColor: "#2E8B57", 
    secondaryColor: "#3CB371"
  };
  
  return (
    <div className="mapa-financeiro-page">
      {/* Adicionando o Header com o tema verde */}
      <Header theme={theme} />
      
      <div className="max-w-6xl mx-auto px-4">
        <Hero theme={theme} />
        <Benefits theme={theme} />
        <Pricing theme={theme} />
        <FAQ theme={theme} />
      </div>
    </div>
  );
};

export default MapaFinanceiroPage;