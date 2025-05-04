// src/components/Hero.jsx
'use client'
import React, { useEffect, useRef, useState } from 'react';
import mapaImage from '../app/assets/images/mapa.png';
import Image from 'next/image';
import './Hero.css';

const Hero = ({ theme = { primaryColor: "#8B5CF6", secondaryColor: "#4B5563" } }) => {
  // Estados e refs para animações e interações avançadas
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  
  const handleCTAClick = () => {
    window.location.href = "https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184";
  };

  // Efeito de paralaxe suave ao mover o mouse
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  // Detector de visibilidade para ativar animações
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Aplicar classes de animação quando o componente se torna visível
  useEffect(() => {
    if (!isVisible) return;

    if (titleRef.current) {
      titleRef.current.classList.add('animate-title-in');
    }
    if (imageRef.current) {
      imageRef.current.classList.add('animate-image-in');
    }
    if (subtitleRef.current) {
      subtitleRef.current.classList.add('animate-content-in');
    }
    if (ctaRef.current) {
      ctaRef.current.classList.add('animate-cta-in');
    }
  }, [isVisible]);

  // Calculando os valores de transformação para o efeito de paralaxe
  const parallaxStyles = {
    imageWrapper: {
      transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
    },
    decorElement1: {
      transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
    },
    decorElement2: {
      transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 20}px)`,
    },
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-white pt-24"
      onMouseMove={handleMouseMove}
    >
      {/* Elementos de design de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grade de pontos */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, ${theme.primaryColor}33 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Formas geométricas fluidas */}
        <div 
          className="absolute -top-1/4 right-0 w-1/3 h-1/2 rounded-full opacity-10 transition-transform duration-700 ease-out"
          style={{ 
            background: `linear-gradient(135deg, ${theme.primaryColor}33, ${theme.secondaryColor}55)`,
            filter: 'blur(80px)',
            ...parallaxStyles.decorElement1 
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-10 w-1/3 h-2/3 rounded-full opacity-10 transition-transform duration-700 ease-out"
          style={{ 
            background: `linear-gradient(135deg, ${theme.secondaryColor}33, ${theme.primaryColor}55)`,
            filter: 'blur(100px)',
            ...parallaxStyles.decorElement2
          }}
        ></div>
      </div>

      {/* Conteúdo principal com efeito de glass morphism */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
            {/* Coluna da imagem com design avançado */}
            <div className="lg:w-5/12 mb-16 lg:mb-0 transition-transform duration-700 ease-out" style={parallaxStyles.imageWrapper}>
              <div ref={imageRef} className="relative opacity-0">
                {/* Camada de glassmorphism */}
                <div className="absolute -inset-6 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-2xl"></div>
                
                {/* Moldura principal */}
                <div className="relative rounded-xl overflow-hidden p-1 bg-gradient-to-br from-white to-gray-100 shadow-2xl">
                  {/* Borda gradiente animada */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shine"></div>
                  
                  {/* Container da imagem com efeito de profundidade */}
                  <div className="relative rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.01]"
                       style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' }}>
                    {/* Gradiente sobre a imagem */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/0 z-10"></div>
                    
                    {/* A imagem em si */}
                    <Image src={mapaImage} alt="Mapa de Nascimento" width={500} height={300} />
                    
                    {/* Efeito de luz no canto */}
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white opacity-30 blur-2xl rounded-full"></div>
                  </div>
                </div>
                
                {/* Badge de formato PDF */}
                <div className="absolute -right-6 bottom-10 transform rotate-12">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 opacity-90 blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-purple-400 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      ENTREGA EM PDF
                    </div>
                  </div>
                </div>
                
                {/* Elemento de autenticidade */}
                <div className="absolute -right-3 -bottom-3">
                  <div className="bg-white rounded-full p-2 shadow-xl">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                         style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})` }}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conteúdo textual com tipografia refinada */}
            <div className="lg:w-6/12 text-left">
              {/* Cabeçalho com efeito de destaque */}
              <div className="mb-6 relative">
                <div ref={titleRef} className="opacity-0">
                  <h2 
                    className="text-3xl md:text-4xl font-serif italic relative inline-block" 
                    style={{ color: theme.primaryColor }}
                  >
                    Mapa
                    {/* Linha decorativa sob o título */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full" 
                          style={{ background: `linear-gradient(90deg, transparent, ${theme.primaryColor}, transparent)` }}></span>
                  </h2>
                  <p 
                    className="text-sm uppercase tracking-widest font-semibold mt-2 letter-spacing-2" 
                    style={{ color: theme.primaryColor }}
                  >
                    DE NASCIMENTO
                  </p>
                </div>
              </div>
              
              {/* Título principal com destaques tipográficos */}
              <div ref={subtitleRef} className="opacity-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic leading-tight mb-8 text-gray-900">
                  Descubra seu 
                  <span className="relative mx-2">
                    propósito
                    <span className="absolute bottom-1 left-0 w-full h-2 opacity-20 rounded-full bg-purple-400"></span>
                  </span> 
                  de vida e sua 
                  <span className="relative mx-2">
                    missão
                    <span className="absolute bottom-1 left-0 w-full h-2 opacity-20 rounded-full bg-purple-500"></span>
                  </span>
                  <span className="block mt-2">através da numerologia cabalística</span>
                </h1>
                
                {/* Texto descritivo com composição tipográfica avançada */}
                <div className="text-base md:text-lg mb-6 text-gray-700 max-w-xl leading-relaxed">
                  <p className="mb-4">
                    Uma análise <span className="font-semibold">personalizada</span> dos seus números vibratórios, 
                    elaborada especificamente para revelar seu verdadeiro potencial e caminho de vida.
                  </p>
                  <p>
                    Comece <span className="italic">agora mesmo</span> a viver alinhado com sua verdadeira essência, mesmo que hoje 
                    você se sinta completamente perdido e sem direção.
                  </p>
                </div>

                {/* Informação adicional sobre o formato PDF */}
                <div className="mb-6 p-3 bg-purple-50 border border-purple-100 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: theme.primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <p className="text-sm text-purple-800">
                      <span className="font-semibold">Entrega por email em arquivo PDF completo e autoexplicativo.</span> Não inclui devolutiva personalizada ou consulta.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Área de CTA com elementos de confiança premium */}
              <div ref={ctaRef} className="opacity-0">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  {/* Botão CTA com efeitos visuais sofisticados */}
                  <button 
                    onClick={handleCTAClick}
                    className="w-full sm:w-auto relative group overflow-hidden text-white font-medium text-base sm:text-lg px-6 sm:px-10 py-4 rounded-xl shadow-xl outline-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    style={{ 
                      background: `linear-gradient(135deg, #8B5CF6, #4B5563)`,
                      boxShadow: `0 10px 25px -12px rgba(139, 92, 246, 0.5)`
                    }}
                  >
                    {/* Efeito hover premium */}
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out opacity-0 group-hover:opacity-20 group-active:opacity-30"
                          style={{ background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 80%)` }}></span>
                    
                    {/* Efeito de brilho */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    
                    {/* Texto do botão */}
                    <span className="relative inline-flex items-center">
                      RECEBER MEU MAPA EM PDF
                      <svg className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                  
                  {/* Indicadores de credibilidade premium */}
                  <div className="flex flex-col justify-center">
                    {/* Sistema de classificação com micro-animações */}
                    <div className="flex items-center space-x-1 text-sm text-gray-700">
                      <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-purple-500 animate-pop" style={{ animationDelay: `${100 * i}ms` }} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 font-semibold">4.9/5</span>
                      <span className="ml-1 text-gray-500">(217 avaliações)</span>
                    </div>
                    
                    {/* Múltiplos selos de garantia */}
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <p className="text-sm text-gray-600 flex items-center">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-purple-500 mr-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </span>
                        Pagamento Seguro
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Contador de disponibilidade limitada */}
                <div className="mt-8 flex items-center space-x-2 text-sm text-gray-600">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <p>Apenas <span className="font-bold">7 vagas</span> disponíveis para análise personalizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;