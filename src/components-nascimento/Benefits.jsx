// src/components/Benefits.jsx
import React, { useEffect, useRef, useState } from 'react';
import mapaNumericImage from '../app/assets/images/atendimentoo.png'; // Substitua pelo seu arquivo de imagem
import mapaImage from '../app/assets/images/mapa.png';
import Image from 'next/image';
import './Benefits.css';
import ModalItem from './ModalItem';

const Benefits = ({ theme = { primaryColor: "#8B5CF6", secondaryColor: "#A78BFA" } }) => {
  // States para controlar animações e interações
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);
  const [isSecondSectionVisible, setIsSecondSectionVisible] = useState(false);
  const [isThirdSectionVisible, setIsThirdSectionVisible] = useState(false);
  const [hoverCard, setHoverCard] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  // Refs para os elementos principais
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const statsRef = useRef(null);
  const formulaRef = useRef(null);
  const resultRef = useRef(null);
  const cardRefs = useRef([]);

  // Data for numerology elements
  const numerologyElements = [
    {
      id: 'motivacao',
      title: 'Motivação',
      description: 'Características que motivam suas ações e comportamentos',
      icon: 'motivation',
      color: theme.primaryColor
    },
    {
      id: 'expressao',
      title: 'Expressão',
      description: 'Como você se relaciona e interage com os outros',
      icon: 'expression',
      color: theme.secondaryColor
    },
    {
      id: 'missao',
      title: 'Missão',
      description: 'Seu propósito de vida nesta existência',
      icon: 'mission',
      color: '#C4B5FD'
    }
  ];

  // Conteúdo dos modais
  const modalContent = {
    motivacao: {
      title: "Motivação",
      content: (
        <div>
          <p className="text-gray-700 mb-4">O número de Motivação apresenta as características pelas quais a pessoa se motiva a agir e a forma como toma essas ações.</p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Como influencia sua vida:</h3>
          <p className="text-gray-700 mb-4">Este número revela suas motivações internas, aquilo que o impulsiona a agir no mundo. É a energia que o move e dá sentido às suas ações cotidianas.</p>

          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium text-purple-800 mb-2">No Mapa de Nascimento:</h4>
            <p className="text-gray-700">O número de Motivação é calculado a partir das vogais do seu nome completo, revelando aspectos profundos do seu eu interior que podem não ser visíveis para os outros.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Exemplos de interpretações:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-medium text-purple-800">Motivação 1:</span> Independência, liderança, originalidade</li>
            <li><span className="font-medium text-purple-800">Motivação 4:</span> Organização, trabalho árduo, estabilidade</li>
            <li><span className="font-medium text-purple-800">Motivação 7:</span> Análise, introspecção, espiritualidade</li>
          </ul>
        </div>
      )
    },
    expressao: {
      title: "Expressão",
      content: (
        <div>
          <p className="text-gray-700 mb-4">O número de Expressão apresenta a forma como um ser humano se relaciona com o outro, como interage socialmente. Apresenta também alguns talentos natos e a forma mais adequada de expressá-los.</p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Como influencia sua vida:</h3>
          <p className="text-gray-700 mb-4">Este número mostra como você se comunica com o mundo e como é percebido pelos outros. Revela seus talentos naturais e a maneira mais eficaz de expressá-los.</p>

          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium text-purple-800 mb-2">No Mapa de Nascimento:</h4>
            <p className="text-gray-700">O número de Expressão é calculado a partir de todas as letras do seu nome completo, representando a totalidade do seu ser e suas habilidades de comunicação.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Exemplos de interpretações:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-medium text-purple-800">Expressão 3:</span> Criatividade, comunicação, expressão artística</li>
            <li><span className="font-medium text-purple-800">Expressão 5:</span> Versatilidade, adaptabilidade, liberdade</li>
            <li><span className="font-medium text-purple-800">Expressão 8:</span> Organização, habilidades executivas, visão</li>
          </ul>
        </div>
      )
    },
    missao: {
      title: "Missão",
      content: (
        <div>
          <p className="text-gray-700 mb-4">Esse é um número de alta importância na numerologia cabalística, pois descreve na essência, o que a pessoa veio fazer nessa existência, seu propósito de vida.</p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Como influencia sua vida:</h3>
          <p className="text-gray-700 mb-4">O número de Missão revela seu propósito maior nesta vida. Compreendê-lo ajuda a tomar decisões alinhadas com sua verdadeira essência e sentir maior satisfação e plenitude.</p>

          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium text-purple-800 mb-2">No Mapa de Nascimento:</h4>
            <p className="text-gray-700">O número de Missão é calculado a partir da sua data de nascimento completa, revelando o propósito que você escolheu antes mesmo de nascer.</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2 mb-4">
            <p className="text-gray-600 italic">É importante salientar que toda pessoa tem livre-arbítrio e pode seguir qualquer caminho que fuja das orientações aqui apresentadas. É necessário entender que a pessoa desalinhada com sua missão irá encontrar obstáculos maiores e sensação de falta de propósito no decorrer da vida.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Exemplos de interpretações:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-medium text-purple-800">Missão 1:</span> Independência, pioneirismo, liderança</li>
            <li><span className="font-medium text-purple-800">Missão 6:</span> Responsabilidade, harmonia, serviço</li>
            <li><span className="font-medium text-purple-800">Missão 9:</span> Humanitarismo, sabedoria, completude</li>
          </ul>
        </div>
      )
    }
  };

  // Data for life challenges
  const lifeInsights = [
    {
      id: 'self-understanding',
      title: 'Sabedoria Limitada',
      description: 'Dificuldade em entender suas verdadeiras motivações e talentos',
      icon: 'chart-down',
      stat: '76%',
      statDesc: 'das pessoas'
    },
    {
      id: 'path',
      title: 'Caminho Desalinhado',
      description: 'Decisões de vida que não harmonizam com sua verdadeira essência e números',
      icon: 'lock',
      stat: '83%',
      statDesc: 'de potencial não aproveitado'
    },
    {
      id: 'patterns',
      title: 'Padrões Repetitivos',
      description: 'Ciclos de desafios e situações que se repetem sem aprendizado consciente',
      icon: 'cycle',
      stat: '4.7x',
      statDesc: 'mais obstáculos'
    }
  ];

  // Life statistics
  const lifeStats = {
    decisions: { value: 365, label: 'dias influenciados por seus números' },
    relationships: { value: 4, label: 'números que definem seu propósito' },
    lifespan: { value: '100%', label: 'de clareza possível' }
  };

  // Detectar quando as seções ficam visíveis para animar
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // 20% da seção precisa estar visível
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

  // Efeito de contador para as estatísticas
  useEffect(() => {
    if (!isFirstSectionVisible || !statsRef.current) return;

    const animateValue = (id, start, end, duration) => {
      const element = document.getElementById(id);
      if (!element) return;

      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current.toLocaleString('pt-BR');
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue('decisions-year', 0, lifeStats.decisions.value, 2000);
    animateValue('relationships', 0, lifeStats.relationships.value, 2000);
  }, [isFirstSectionVisible, lifeStats.decisions.value, lifeStats.relationships.value]);

  // Renderizar ícones
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'motivation':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
          </svg>
        );
      case 'expression':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        );
      case 'mission':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
          </svg>
        );
      case 'chart-down':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        );
      case 'lock':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        );
      case 'cycle':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="beneficios" className="relative overflow-hidden">
      {/* Hero Section - Life Insights Statistics - Fundo branco com roxo e cinza */}
      <div ref={firstSectionRef} className="relative min-h-screen flex items-center py-20 bg-white">
        {/* Background */}
        <div className={`absolute inset-0 z-0 bg-gradient-to-b from-white to-gray-50 transition-opacity duration-1000 ${isFirstSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>

          {/* Partículas - CÓDIGO MODIFICADO AQUI */}
          <div className="absolute inset-0">
            {/* Substituindo o Array.map com Math.random por elementos com classes predefinidas */}
            <div className="particle-xs absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '10%', left: '20%', animationDuration: '12s' }}></div>
            <div className="particle-sm absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '25%', left: '80%', animationDuration: '15s', animationDelay: '1s' }}></div>
            <div className="particle-xs absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '50%', left: '15%', animationDuration: '18s', animationDelay: '2s' }}></div>
            <div className="particle-md absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '70%', left: '75%', animationDuration: '14s', animationDelay: '0.5s' }}></div>
            <div className="particle-sm absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '15%', left: '55%', animationDuration: '16s', animationDelay: '3s' }}></div>
            <div className="particle-md absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '85%', left: '30%', animationDuration: '20s', animationDelay: '1.5s' }}></div>
            <div className="particle-xs absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '35%', left: '90%', animationDuration: '19s', animationDelay: '2.5s' }}></div>
            <div className="particle-sm absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '60%', left: '5%', animationDuration: '13s', animationDelay: '1s' }}></div>
            <div className="particle-md absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '45%', left: '45%', animationDuration: '17s', animationDelay: '0.8s' }}></div>
            <div className="particle-xs absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '75%', left: '60%', animationDuration: '11s', animationDelay: '2s' }}></div>
            <div className="particle-sm absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '5%', left: '40%', animationDuration: '14s', animationDelay: '3s' }}></div>
            <div className="particle-md absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '90%', left: '85%', animationDuration: '16s', animationDelay: '1.2s' }}></div>
            <div className="particle-xs absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '30%', left: '10%', animationDuration: '18s', animationDelay: '0.7s' }}></div>
            <div className="particle-sm absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '65%', left: '35%', animationDuration: '15s', animationDelay: '2.3s' }}></div>
            <div className="particle-md absolute rounded-full bg-purple-300/30 animate-float" style={{ top: '20%', left: '70%', animationDuration: '17s', animationDelay: '1.8s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Statistics */}
            <div
              ref={statsRef}
              className={`text-gray-800 transition-all duration-1000 ${isFirstSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className={`inline-block text-lg font-medium tracking-wider mb-2 text-purple-600 transition-all duration-500 delay-300 ${isFirstSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
                AUTOCONHECIMENTO PROFUNDO
              </span>

              <h2 className={`text-5xl font-bold mb-6 leading-tight transition-all duration-700 delay-400 ${isFirstSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="text-3xl block font-light mb-2">{lifeStats.lifespan.value}</span>
                <span className="gradient-text block" style={{
                  background: `-webkit-linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  De clareza sobre quem você é
                </span>
              </h2>

              <div className="mb-12">
                <div className={`flex items-baseline mb-3 transition-all duration-600 delay-600 ${isFirstSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <span id="decisions-year" className="text-5xl font-bold mr-3 text-gray-800">0</span>
                  <span className="text-2xl text-gray-600 font-light">{lifeStats.decisions.label}</span>
                </div>

                <div className={`flex items-baseline transition-all duration-600 delay-700 ${isFirstSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <span id="relationships" className="text-5xl font-bold mr-3 text-gray-800">0</span>
                  <span className="text-2xl text-gray-600 font-light">{lifeStats.relationships.label}</span>
                </div>
              </div>

              <p className={`text-xl text-gray-700 mb-10 leading-relaxed max-w-lg transition-all duration-800 delay-800 ${isFirstSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
                Seus números revelam seu <span className="text-purple-800 font-semibold">potencial oculto</span> e os caminhos mais alinhados à sua essência. A pergunta é:
                <span className="relative inline-block">
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500/30"></span>
                  <span className="relative italic font-medium ml-2">você conhece seus números?</span>
                </span>
              </p>

              <div className={`transition-all duration-800 delay-1000 ${isFirstSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <a
                  href="#numerologia"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium inline-flex items-center shadow-lg shadow-purple-600/30 transition-all duration-300"
                >
                  Descubra seus números
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Challenge Cards */}
            <div className="space-y-5">
              {lifeInsights.map((insight, index) => (
                <div
                  key={insight.id}
                  className={`
                    bg-white rounded-xl p-6 border border-gray-200
                    hover:border-purple-500/30 transition-all duration-300
                    flex items-center
                    hover:translate-y-[-5px] hover:shadow-xl hover:shadow-purple-600/20
                    min-h-[220px] h-full w-full
                    ${isFirstSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                  `}
                  style={{ transitionDelay: `${400 + (index * 200)}ms` }}
                >
                  {/* Icon + Stat */}
                  <div className="w-24 flex-shrink-0 flex flex-col items-center mr-5">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-2">
                      {renderIcon(insight.icon)}
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-800">{insight.stat}</div>
                      <div className="text-xs text-gray-500">{insight.statDesc}</div>
                    </div>
                  </div>

                  {/* Content */} 
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 break-words">{insight.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed break-words">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-10 text-gray-400" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2" />
            <circle className="animate-pulse" cx="12" cy="12" r="4" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Numerology Solution Section */}
      <div ref={secondSectionRef} className={`py-24 bg-white relative z-10 transition-opacity duration-1000 ${isSecondSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className={`text-purple-600 uppercase tracking-wider font-semibold mb-3 transition-all duration-500 ${isSecondSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
              A solução para seu autoconhecimento
            </p>

            <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 transition-all duration-700 delay-200 ${isSecondSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Transforme sua vida através da numerologia cabalística
            </h2>

            <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-400 ${isSecondSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
              Desenvolvemos um mapa numerológico completo que revela seus números de Motivação,
              Impressão, Expressão, Destino, Missão e Desafios para criar uma vida
              plenamente alinhada com sua essência.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-800 delay-300 ${isSecondSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
           {/* Image with effects */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-purple-600/10 rounded-2xl blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent z-10"></div>
                <Image src={mapaImage} alt="Mapa de Nascimento" width={500} height={300} />

                {/* Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-medium text-purple-800 z-20">
                  Numerologia Cabalística
                </div>
              </div>

              {/* Stats */}
              <div className="absolute -right-10 -top-10 bg-purple-600 text-white rounded-xl p-5 shadow-xl">
                <p className="text-4xl font-bold">98%</p>
                <p className="text-sm opacity-80">De precisão</p>
              </div>
            </div>

            {/* Content with steps */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800">O que você vai descobrir:</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Propósito de vida</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Descubra seu número de Missão e entenda qual é seu verdadeiro propósito
                      nesta existência e como alinhar sua vida com ele.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Superação de padrões</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Identifique seus números de Desafio e aprenda a transformar padrões
                      repetitivos em oportunidades de crescimento e evolução.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Harmonia pessoal</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Conheça seus números de Expressão e Impressão para melhorar seus
                      relacionamentos e criar conexões mais autênticas e profundas.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#numerologia"
                className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-lg shadow-purple-600/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Quero descobrir meus números
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Numerology Elements Section */}
      <div
        id="numerologia"
        ref={thirdSectionRef}
        className={`py-24 relative bg-gradient-to-b from-gray-100 to-white overflow-hidden transition-opacity duration-1000 ${isThirdSectionVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Background elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {[...Array(9)].map((_, i) => (
              <text
                key={i}
                x={35 + (i % 3) * 15}
                y={35 + Math.floor(i / 3) * 15}
                fontSize="12"
                fill={theme.primaryColor}
              >
                {i + 1}
              </text>
            ))}
            {[...Array(5)].map((_, i) => (
              <path
                key={`path-${i}`}
                d={`M ${50 + 30 * Math.cos(i * Math.PI / 2.5)} ${50 + 30 * Math.sin(i * Math.PI / 2.5)} Q ${50} ${50}, ${50 + 30 * Math.cos((i + 1) * Math.PI / 2.5)} ${50 + 30 * Math.sin((i + 1) * Math.PI / 2.5)}`}
                stroke={theme.secondaryColor}
                fill="none"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className={`text-purple-600 uppercase tracking-wider font-semibold mb-3 inline-block transition-all duration-500 ${isThirdSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
              Mapa de Nascimento Completo
            </span>

            <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 transition-all duration-700 delay-200 ${isThirdSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Os Elementos Essenciais da Numerologia
            </h2>

            <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-400 ${isThirdSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
              Uma análise profunda e detalhada dos números que revelam sua essência,
              seus talentos ocultos e seu caminho de evolução nesta vida.
            </p>
          </div>

          {/* Numerology Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {numerologyElements.map((element, index) => (
              <div
                key={element.id}
                className={`bg-white rounded-xl p-8 shadow-xl relative overflow-hidden transition-all duration-500 ${hoverCard === element.id ? 'scale-105' : ''} ${isThirdSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${300 + (index * 200)}ms` }}
                onMouseEnter={() => setHoverCard(element.id)}
                onMouseLeave={() => setHoverCard(null)}
                ref={el => cardRefs.current[index] = el}
              >
                {/* Background effects */}
                <div
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-300"
                  style={{ backgroundColor: element.color, transform: hoverCard === element.id ? 'scaleX(1)' : 'scaleX(0.3)', transformOrigin: 'left' }}
                ></div>

                <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full opacity-5"
                  style={{ backgroundColor: element.color }}></div>

                {/* Element number */}
                <div className="absolute top-6 right-6 font-bold text-4xl opacity-10">{index + 1}</div>

                {/* Content */}
                <div className="mb-6 relative z-10">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ backgroundColor: `${element.color}15` }}
                  >
                    {renderIcon(element.icon)}
                  </div>

                  <h3
                    className="text-2xl font-bold mb-3 transition-all duration-300"
                    style={{ color: hoverCard === element.id ? element.color : '#1f2937' }}
                  >
                    {element.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{element.description}</p>
                </div>

                {/* Action button */}
                <div className="mt-auto">
                  <button
                    onClick={() => setActiveModal(element.id)}
                    className="group inline-flex items-center text-sm font-medium transition-all duration-300"
                    style={{ color: element.color }}
                  >
                    Saiba mais
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

                {/* Operations sign */}
                {index < numerologyElements.length - 1 && (
                  <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 md:block hidden">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
                      <span className="text-purple-600 font-bold">+</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final Result */}
          <div
            ref={resultRef}
            className={`max-w-3xl mx-auto mt-16 text-center transition-all duration-1000 delay-800 ${isThirdSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-xl shadow-purple-600/20">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="absolute -inset-4 rounded-full blur-xl bg-purple-500/20 -z-10 animate-pulse"></div>
              </div>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800"
            >
              Autoconhecimento profundo para uma vida de harmonia e plenitude
            </h2>

            <p
              className="text-xl text-gray-600 leading-relaxed mb-10"
            >
              Quando você conhece todos os seus números e vibrações pessoais,
              compreende a si mesmo em um nível profundo e consegue viver uma vida
              mais alinhada com seu verdadeiro propósito.
            </p>

            <div>
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg group"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-purple-400 opacity-30 group-hover:rotate-90 ease-out rounded-full"></span>
                <span className="relative flex items-center">
                  QUERO MEU MAPA DE NASCIMENTO AGORA
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>

              <div className="mt-6 flex items-center justify-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative h-3 w-3 rounded-full bg-red-500"></span>
                </span>
                <p className="text-gray-600 text-sm">
                  Vagas limitadas: apenas <span className="font-bold text-purple-800">7 vagas</span> disponíveis hoje
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modais para cada elemento */}
      <ModalItem
        isOpen={activeModal === 'motivacao'}
        onClose={() => setActiveModal(null)}
        title={modalContent.motivacao.title}
        content={modalContent.motivacao.content}
        icon={renderIcon('motivation')}
      />

      <ModalItem
        isOpen={activeModal === 'expressao'}
        onClose={() => setActiveModal(null)}
        title={modalContent.expressao.title}
        content={modalContent.expressao.content}
        icon={renderIcon('expression')}
      />

      <ModalItem
        isOpen={activeModal === 'missao'}
        onClose={() => setActiveModal(null)}
        title={modalContent.missao.title}
        content={modalContent.missao.content}
        icon={renderIcon('mission')}
      />

      {/* CSS para os efeitos adicionais */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 5s infinite ease-in-out;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
        
        .card-shine {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          position: absolute;
          top: -200%;
          left: -200%;
          width: 400%;
          height: 400%;
          transform: rotate(45deg);
          transition: all 0.5s ease-in-out;
        }
        
        .formula-card:hover .card-shine {
          animation: shine 1.5s ease-in-out;
        }
        
        @keyframes shine {
          0% {
            top: -200%;
            left: -200%;
          }
          100% {
            top: 200%;
            left: 200%;
          }
        }
        
        /* Classes para os tamanhos fixos das partículas */
        .particle-xs {
          width: 3px;
          height: 3px;
        }
        
        .particle-sm {
          width: 5px;
          height: 5px;
        }
        
        .particle-md {
          width: 7px;
          height: 7px;
        }
      `}</style>
    </section>
  );
};

export default Benefits;