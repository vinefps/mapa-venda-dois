'use client'
import React from 'react';
import Image from 'next/image';
import mapaImage from '../assets/images/mapa.png'; // ou o caminho correto para sua imagem

const Hero = ({ theme = { primaryColor: "#2E8B57", secondaryColor: "#3CB371" } }) => {
  const handleCTAClick = () => {
    window.location.href = "https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184";
  };

  return (
    <section className="min-h-screen bg-gray-50 relative py-20 px-4 sm:px-8">
      {/* Diagonal background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-full h-full transform -skew-y-12 origin-top-left"
          style={{ 
            background: `linear-gradient(120deg, ${theme.primaryColor}15, transparent 70%)`,
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-2/3 h-2/3 transform skew-x-12 origin-bottom-right"
          style={{ 
            background: `linear-gradient(300deg, ${theme.secondaryColor}10, transparent 60%)`,
          }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content - text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block mb-6 px-6 py-2 rounded-full border-2 border-current" style={{ color: theme.primaryColor }}>
              <span className="font-semibold tracking-wide uppercase text-sm">Numerologia Financeira</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-none">
              <span className="block text-gray-900 mb-2">Desbloqueie</span>
              <span 
                className="block font-serif italic" 
                style={{ color: theme.primaryColor }}
              >
                sua prosperidade
              </span>
              <span className="block text-gray-900 mt-2">financeira</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Transforme sua energia financeira com um mapa personalizado 
              baseado na poderosa ciência da numerologia.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-10">
              {[
                'Análise completa da sua energia financeira',
                'Desbloqueio de padrões limitantes',
                'Caminho para manifestar abundância'
              ].map((feature, index) => (
                <div key={index} className="flex items-center text-lg text-gray-700">
                  <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: theme.primaryColor }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <div className="space-y-6">
              <button 
                onClick={handleCTAClick}
                className="w-full sm:w-auto px-12 py-5 rounded-full text-white font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ 
                  background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                }}
              >
                Acessar Meu Mapa Financeiro
              </button>
              
              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">4.9 de 5 (217 avaliações)</span>
              </div>
            </div>
          </div>

          {/* Right content - image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto">
              {/* Image container */}
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div 
                  className="absolute -inset-6 rounded-3xl opacity-20 blur-2xl" 
                  style={{ background: theme.primaryColor }}
                />
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <Image 
                    src={mapaImage} 
                    alt="Mapa da Energia Financeira" 
                    width={500} 
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 bg-white rounded-full p-4 shadow-lg">
                <svg className="w-8 h-8" style={{ color: theme.primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-full px-6 py-3 shadow-lg">
                <span className="font-bold text-lg" style={{ color: theme.primaryColor }}>PDF Pronto</span>
              </div>

              {/* Urgency badge */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold animate-pulse">
                7 vagas restantes
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border" style={{ borderColor: theme.primaryColor }}>
            <svg className="w-5 h-5" style={{ color: theme.primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700">Entrega imediata por email em formato PDF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;