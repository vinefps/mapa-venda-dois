'use client'
import React from 'react';
import Image from 'next/image';
import mapaImage from '../assets/images/mapaf.png'; // ou o caminho correto para sua imagem

const Hero = ({ theme = { primaryColor: "#2E8B57", secondaryColor: "#3CB371" } }) => {
  const handleCTAClick = () => {
    window.location.href = "https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184";
  };

  return (
    <section className="min-h-screen bg-white relative py-20 px-4 sm:px-8">
      {/* Novo padrão de fundo com formas geométricas sutis */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill={theme.primaryColor} d="M48.8,-64.9C63.7,-55.8,76.5,-42.5,81.8,-26.5C87.1,-10.5,84.8,8.2,77.8,24.5C70.8,40.8,59.2,54.7,44.4,64.9C29.6,75.1,11.6,81.5,-5.6,79.9C-22.7,78.3,-39.1,68.7,-53.1,56.3C-67.1,43.9,-78.9,28.7,-82.5,11.2C-86.1,-6.3,-81.5,-26.1,-70.2,-39.7C-58.9,-53.4,-40.8,-61,-24.3,-68.9C-7.8,-76.7,7.1,-84.9,22.7,-83.5C38.4,-82.2,54,-74.1,48.8,-64.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill={theme.secondaryColor} d="M40.9,-56.5C51.1,-46.7,56.3,-32.4,60.6,-17.6C64.9,-2.8,68.2,12.6,63.2,25C58.2,37.3,44.8,46.7,30.4,53.4C16,60.1,0.6,64.1,-17.2,63.7C-35,63.2,-55.3,58.3,-65.2,45.6C-75.1,32.8,-74.7,12.1,-70.4,-6.4C-66.1,-24.9,-57.9,-41.2,-45.1,-51.2C-32.3,-61.3,-14.8,-65.1,0.8,-66.1C16.4,-67.1,30.7,-66.3,40.9,-56.5Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content - text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div 
              className="inline-block mb-6 px-6 py-2 rounded-full" 
              style={{ 
                background: `linear-gradient(45deg, ${theme.primaryColor}15, ${theme.secondaryColor}15)`,
                color: theme.primaryColor
              }}
            >
              <span className="font-semibold tracking-wide uppercase text-sm">Numerologia Financeira</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-gray-900 mb-2">Desbloqueie</span>
              <span 
                className="block font-serif italic" 
                style={{ color: theme.primaryColor }}
              >
                sua prosperidade
              </span>
              <span className="block text-gray-900 mt-2">financeira</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0">
              Transforme sua energia financeira com um mapa personalizado 
              baseado na poderosa ciência da numerologia.
            </p>

            {/* Features list - redesenhado */}
            <div className="space-y-5 mb-12">
              {[
                'Análise completa da sua energia financeira',
                'Desbloqueio de padrões limitantes',
                'Caminho para manifestar abundância'
              ].map((feature, index) => (
                <div key={index} className="flex items-start text-lg text-gray-700">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <svg 
                      width="22" 
                      height="22" 
                      viewBox="0 0 22 22" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: theme.primaryColor }}
                    >
                      <circle cx="11" cy="11" r="11" fill="currentColor" fillOpacity="0.1"/>
                      <path d="M7 11L10 14L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <div className="space-y-6">
              <button 
                onClick={handleCTAClick}
                className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                style={{ 
                  background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                }}
              >
                <span>Acessar Meu Mapa Financeiro</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16669 10H15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8334 5L15.8334 10L10.8334 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600 font-medium">4.9 de 5 (217 avaliações)</span>
              </div>
            </div>
          </div>

          {/* Right content - image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto">
              {/* Image container com design aprimorado */}
              <div className="relative group">
                <div 
                  className="absolute -inset-3 rounded-2xl opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(45deg, ${theme.primaryColor}50, ${theme.secondaryColor}50)` }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src={mapaImage} 
                    alt="Mapa da Energia Financeira" 
                    width={500} 
                    height={300}
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay com gradiente */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{ 
                      background: `linear-gradient(45deg, ${theme.primaryColor}, transparent)`,
                    }}
                  />
                </div>
              </div>

              {/* Floating elements redesenhados */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <svg className="w-8 h-8" style={{ color: theme.primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl px-6 py-3 shadow-lg"
                style={{ borderLeft: `4px solid ${theme.primaryColor}` }}
              >
                <span className="font-bold text-lg" style={{ color: theme.primaryColor }}>PDF Pronto</span>
              </div>

              {/* Badge de urgência redesenhado */}
              <div 
                className="absolute top-4 left-4 px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 bg-white shadow-md"
                style={{ color: "#E02424" }}
              >
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span>7 vagas restantes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info redesenhado */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: theme.primaryColor }}
            >
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-gray-700">Entrega em até 3 dias em formato de PDF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;