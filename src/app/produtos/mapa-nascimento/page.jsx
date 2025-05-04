'use client'
// src/app/produtos/mapa-nascimento/page.jsx
import Benefits from '../../../components-nascimento/Benefits';
import FAQ from '../../../components-nascimento/FAQ';
import Features from '../../../components-nascimento/Features';
import Footer from '../../../components-nascimento/Footer';
import Header from '../../../components-nascimento/Header';
import Hero from '../../../components-nascimento/Hero';
import ModalItem from '../../../components-nascimento/ModalItem';
import Pricing from '../../../components-nascimento/Pricing';
import Testimonials from '../../../components-nascimento/Testimonials';

export default function MapaNascimentoPage() {
  // Definir o tema para os componentes
  const theme = {
    primaryColor: "#8B5CF6",
    secondaryColor: "#A78BFA"
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <main>
          <Hero theme={theme} />
          <Benefits theme={theme} />
          <Features theme={theme} />
          <Testimonials theme={theme} />
          <Pricing theme={theme} />
          <FAQ theme={theme} />
        </main>
      </div>
    </>
  );
}