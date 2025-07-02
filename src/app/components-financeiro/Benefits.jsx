// src/components/Benefits.jsx
import React, { useEffect, useRef, useState } from 'react';
import mapaNumericImage from '../assets/images/atendimentoo.png';
import mapaImage from '../assets/images/mapaf.png';
import Image from 'next/image';
import ModalItem from './ModalItem';

const Benefits = ({ theme = { 
  primaryColor: "#2E8B57", 
  secondaryColor: "#3CB371", 
  tertiaryColor: "#66CDAA" 
}}) => {
  // Mantém toda a lógica original de estados e refs
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);
  const [isSecondSectionVisible, setIsSecondSectionVisible] = useState(false);
  const [isThirdSectionVisible, setIsThirdSectionVisible] = useState(false);
  const [hoverCard, setHoverCard] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const statsRef = useRef(null);
  const cardRefs = useRef([]);

  // Mantém os arrays originais
  const numerologyElements = [
    {
      id: 'bloqueios',
      title: 'Camadas de Bloqueios',
      description: 'Decodificando barreiras energéticas financeiras',
      icon: 'bloqueio',
      color: theme.primaryColor
    },
    {
      id: 'ciclos',
      title: 'Dinâmicas Cíclicas',
      description: 'Mapeando ondas de potencial financeiro',
      icon: 'ciclo',
      color: theme.secondaryColor
    },
    {
      id: 'abundancia',
      title: 'Arquitetura da Abundância',
      description: 'Estratégias personalizadas de manifestação',
      icon: 'abundancia',
      color: theme.tertiaryColor
    }
  ];

  const lifeInsights = [
    {
      id: 'self-understanding',
      title: 'Padrões Ocultos',
      description: 'Revelando obstáculos inconscientes de prosperidade',
      icon: 'chart-down',
      stat: '79%',
      statDesc: 'impacto identificado'
    },
    {
      id: 'path',
      title: 'Potencial Não Revelado',
      description: 'Desbloqueando recursos energéticos latentes',
      icon: 'lock',
      stat: '68%',
      statDesc: 'potencial recuperável'
    },
    {
      id: 'patterns',
      title: 'Dinâmicas Repetitivas',
      description: 'Interrupção de ciclos financeiros limitantes',
      icon: 'cycle',
      stat: '3.8x',
      statDesc: 'chances de transformação'
    }
  ];

  // Mantém o modalContent idêntico ao original
  const modalContent = {
    bloqueios: {
      title: "Bloqueios Financeiros",
      content: (
        <div>
          <p className="text-gray-700 mb-4">O mapeamento de bloqueios financeiros identifica os padrões inconscientes que impedem o fluxo natural de prosperidade em sua vida.</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Como influencia sua vida:</h3>
          <p className="text-gray-700 mb-4">Estes bloqueios estão frequentemente enraizados em crenças limitantes sobre dinheiro e abundância que você absorveu durante sua formação. Eles criam resistência invisível ao seu progresso financeiro.</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium text-gray-800 mb-2">No Mapa Financeiro:</h4>
            <p className="text-gray-700">Os bloqueios são revelados através da análise da sua data de nascimento e nome, mostrando padrões energéticos que podem estar interferindo na sua relação com dinheiro.</p>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Exemplos de bloqueios comuns:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-medium text-gray-800">Medo de escassez:</span> Ansiedade constante sobre não ter o suficiente</li>
            <li><span className="font-medium text-gray-800">Autossabotagem:</span> Comportamentos que comprometem seu progresso financeiro</li>
            <li><span className="font-medium text-gray-800">Desvalorização:</span> Dificuldade em cobrar adequadamente por seus produtos ou serviços</li>
          </ul>
        </div>
      )
    },
    ciclos: {
      title: "Ciclos Financeiros",
      content: (
        <div>
          <p className="text-gray-700 mb-4">Os ciclos financeiros pessoais representam períodos naturais de fluxo e refluxo na sua energia financeira, determinando fases de maior ou menor prosperidade.</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Como influenciam sua vida:</h3>
          <p className="text-gray-700 mb-4">Entender seus ciclos permite planejar investimentos, negócios e decisões financeiras em períodos mais favoráveis, maximizando resultados e minimizando riscos.</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium text-gray-800 mb-2">No Mapa Financeiro:</h4>
            <p className="text-gray-700">Os ciclos são calculados usando a numerologia cabalística aplicada a seus dados pessoais, revelando períodos de 7, 9 e 12 anos que influenciam sua prosperidade.</p>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Principais tipos de ciclos:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-medium text-gray-800">Ciclo de Sementes:</span> Ideal para iniciar projetos e plantar ideias</li>
            <li><span className="font-medium text-gray-800">Ciclo de Crescimento:</span> Período para expandir e desenvolver projetos existentes</li>
            <li><span className="font-medium text-gray-800">Ciclo de Colheita:</span> Momento de colher resultados e capitalizar investimentos</li>
          </ul>
        </div>
      )
    },
    abundancia: {
      title: "Estratégias de Abundância",
      content: (
        <div>
          <p className="text-gray-700 mb-4">As estratégias de abundância são técnicas e práticas personalizadas baseadas em sua vibração numérica para amplificar seu potencial de prosperidade.</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Como transformam sua vida:</h3>
          <p className="text-gray-700 mb-4">Ao aplicar estratégias alinhadas com sua energia pessoal, você cria um caminho de menor resistência para a manifestação da abundância, atraindo oportunidades e recursos de forma mais natural.</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium text-gray-800 mb-2">No Mapa Financeiro:</h4>
            <p className="text-gray-700">Cada estratégia é cuidadosamente selecionada com base nos seus números pessoais, considerando seus pontos fortes naturais e áreas que podem ser desenvolvidas.</p>
          </div>
          <div className="border-l-4 border-gray-500 pl-4 py-2 mb-4">
            <p className="text-gray-600 italic">As estratégias podem variar amplamente entre indivíduos. O que funciona perfeitamente para uma pessoa pode não ser eficaz para outra, devido às diferentes vibrações numéricas pessoais.</p>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Exemplos de estratégias:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-medium text-gray-800">Alinhamento energético:</span> Práticas diárias para sintonizar sua energia com a prosperidade</li>
            <li><span className="font-medium text-gray-800">Ativação numérica:</span> Utilização de números específicos para potencializar resultados</li>
            <li><span className="font-medium text-gray-800">Rituais de prosperidade:</span> Técnicas personalizadas para manifestar abundância</li>
          </ul>
        </div>
      )
    }
  };

  // Mantém toda a lógica original de useEffect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px'
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.target === firstSectionRef.current && entry.isIntersecting) {
          setIsFirstSectionVisible(true);
        }
        if (entry.target === secondSectionRef.current && entry.isIntersecting) {
          setIsSecondSectionVisible(true);
        }
        if (entry.target === thirdSectionRef.current && entry.isIntersecting) {
          setIsThirdSectionVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (firstSectionRef.current) observer.observe(firstSectionRef.current);
    if (secondSectionRef.current) observer.observe(secondSectionRef.current);
    if (thirdSectionRef.current) observer.observe(thirdSectionRef.current);

    return () => {
      if (firstSectionRef.current) observer.unobserve(firstSectionRef.current);
      if (secondSectionRef.current) observer.unobserve(secondSectionRef.current);
      if (thirdSectionRef.current) observer.unobserve(thirdSectionRef.current);
    };
  }, []);

  // Mantém toda a lógica original de renderização de ícones
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'bloqueio':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        );
      case 'ciclo':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        );
      case 'abundancia':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
      case 'chart-down':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        );
      case 'lock':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        );
      case 'cycle':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="beneficios" className="relative overflow-hidden">
      {/* Primeira seção - Layout Horizontal com formas geométricas sutis */}
      <div ref={firstSectionRef} className="relative py-24">
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
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div 
                className="inline-block mb-6 px-6 py-2 rounded-full"
                style={{ 
                  background: `linear-gradient(45deg, ${theme.primaryColor}15, ${theme.secondaryColor}15)`,
                  color: theme.primaryColor
                }}
              >
                <span className="font-medium text-sm tracking-wide uppercase">Insights Numerológicos</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Mapeando seu<br />
                <span 
                  className="font-serif italic"
                  style={{ color: theme.primaryColor }}
                >
                  DNA Financeiro
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Desvende os padrões ocultos que governam sua relação com dinheiro e prosperidade. 
                Uma análise profunda da sua energia financeira.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-6">
                <button 
                  className="px-8 py-3 rounded-full text-white font-medium shadow-lg transform hover:scale-105 transition-all duration-300"
                  style={{ 
                    background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  }}
                >
                  Explorar Agora
                </button>
                <div className="flex items-center gap-2 text-gray-600">
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
                  <span>100% Personalizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda seção - Layout Vertical com Imagem Circular */}
      <div ref={secondSectionRef} className="py-24 bg-white relative">
        {/* Adiciona padrão de fundo sutil */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              backgroundImage: `radial-gradient(${theme.primaryColor} 2px, transparent 2px)`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
      
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visão Integral da sua <span style={{ color: theme.primaryColor }}>Energia Financeira</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entenda como cada aspecto da sua numerologia influencia sua relação com dinheiro e manifestação de prosperidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Efeito de halo em volta da imagem */}
                <div 
                  className="absolute -inset-3 rounded-full opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(45deg, ${theme.primaryColor}50, ${theme.secondaryColor}50)` }}
                />
                
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src={mapaImage} 
                    alt="Mapa Financeiro" 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* Overlay com gradiente */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{ 
                      background: `linear-gradient(45deg, ${theme.primaryColor}, transparent)`,
                    }}
                  />
                </div>
                
                {/* Badge flutuante */}
                <div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
                  style={{ border: `2px solid ${theme.primaryColor}30` }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: theme.primaryColor }}>PDF</div>
                    <div className="text-xs text-gray-600">Digital</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-8">
                {[
                  {
                    title: "Análise Profunda",
                    text: "Mapeamento completo de padrões energéticos utilizando numerologia cabalística avançada."
                  },
                  {
                    title: "Estratégias Práticas",
                    text: "Técnicas e rituais personalizados para manifestação de prosperidade, alinhados com sua energia."
                  },
                  {
                    title: "Transformação Contínua",
                    text: "Plano de ação para transformar bloqueios em oportunidades de crescimento financeiro."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(45deg, ${theme.primaryColor}15, ${theme.secondaryColor}15)`,
                        color: theme.primaryColor
                      }}
                    >
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terceira seção - Layout com Cards - Fundo branco em vez de preto */}
      <div ref={thirdSectionRef} className="py-24 bg-gray-50 relative">
        {/* Padrão de fundo sutil */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                <circle id="pattern-circle" cx="25" cy="25" r="12" fill={theme.primaryColor}></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Componentes da <span style={{ color: theme.primaryColor }}>Arquitetura Financeira</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada elemento trabalha em conjunto para criar sua estratégia personalizada de prosperidade.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {numerologyElements.map((element, index) => (
                <div key={element.id} className="relative group">
                  <div 
                    className="absolute -inset-3 rounded-2xl opacity-0 blur-lg transition-all duration-500 group-hover:opacity-75"
                    style={{ background: element.color }}
                  />
                  
                  <div 
                    className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                  >
                    <div 
                      className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg text-white"
                      style={{ backgroundColor: element.color }}
                    >
                      {renderIcon(element.icon)}
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{element.title}</h3>
                      <p className="text-gray-600 mb-6">{element.description}</p>
                      
                      <div className="mt-auto">
                        <button 
                          onClick={() => setActiveModal(element.id)}
                          className="inline-flex items-center font-medium transition"
                          style={{ color: element.color }}
                        >
                          <span>Descobrir mais</span>
                          <svg 
                            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Adiciona um indicador de rodapé */}
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
              <span className="text-gray-700">Orientação personalizada para sua jornada de prosperidade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modais mantidos inalterados */}
      <ModalItem
        isOpen={activeModal === 'bloqueios'}
        onClose={() => setActiveModal(null)}
        title={modalContent.bloqueios.title}
        content={modalContent.bloqueios.content}
        icon={renderIcon('bloqueio')}
      />

      <ModalItem
        isOpen={activeModal === 'ciclos'}
        onClose={() => setActiveModal(null)}
        title={modalContent.ciclos.title}
        content={modalContent.ciclos.content}
        icon={renderIcon('ciclo')}
      />

      <ModalItem
        isOpen={activeModal === 'abundancia'}
        onClose={() => setActiveModal(null)}
        title={modalContent.abundancia.title}
        content={modalContent.abundancia.content}
        icon={renderIcon('abundancia')}
      />
    </section>
  );
};

export default Benefits;