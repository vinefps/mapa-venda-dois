// src/components/Benefits.jsx
import React, { useEffect, useRef, useState } from 'react';
import mapaNumericImage from '../assets/images/atendimentoo.png';
import mapaImage from '../assets/images/mapa.png';
import Image from 'next/image';
import ModalItem from './ModalItem';

const Benefits = ({ theme = { 
  primaryColor: "#4A5568", 
  secondaryColor: "#718096", 
  tertiaryColor: "#2D3748" 
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
      {/* Primeira seção - Layout Horizontal com Background Diagonal */}
      <div ref={firstSectionRef} className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform -skew-y-6 origin-top-left"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200">
                <span className="font-medium text-gray-700">Insights Numerológicos</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Mapeando seu<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  DNA Financeiro
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Desvende os padrões ocultos que governam sua relação com dinheiro e prosperidade. 
                Uma análise profunda da sua energia financeira.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-6">
                <button className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
                  Explorar Agora
                </button>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% Personalizado</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 gap-4">
                {lifeInsights.map((insight, index) => (
                  <div 
                    key={insight.id} 
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg border border-gray-200 flex items-center justify-center">
                        {renderIcon(insight.icon)}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900">{insight.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{insight.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold" style={{ color: theme.primaryColor }}>
                          {insight.stat}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{insight.statDesc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda seção - Layout Vertical com Imagem Circular */}
      <div ref={secondSectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visão Integral da sua <span style={{ color: theme.primaryColor }}>Energia Financeira</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entenda como cada aspecto da sua numerologia influencia sua relação com dinheiro e manifestação de prosperidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-2xl">
                  <Image 
                    src={mapaImage} 
                    alt="Mapa Financeiro" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
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
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full mt-3" style={{ backgroundColor: theme.primaryColor }}></div>
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

      {/* Terceira seção - Layout Radial */}
      <div ref={thirdSectionRef} className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Componentes da <span className="text-blue-400">Arquitetura Financeira</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Cada elemento trabalha em conjunto para criar sua estratégia personalizada de prosperidade.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {numerologyElements.map((element, index) => (
                <div key={element.id} className="relative">
                  <div className="group bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300">
                    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                         style={{ backgroundColor: element.color }}>
                      {renderIcon(element.icon)}
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold mb-3">{element.title}</h3>
                      <p className="text-gray-400 mb-6">{element.description}</p>
                      
                      <button 
                        onClick={() => setActiveModal(element.id)}
                        className="inline-flex items-center text-white hover:text-blue-400 transition"
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
              ))}
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