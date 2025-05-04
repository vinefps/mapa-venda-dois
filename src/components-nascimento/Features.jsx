// src/components/Features.jsx
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import p1Image from '../app/assets/images/p1.png'; // Substitua com imagens relacionadas à numerologia
import p2Image from '../app/assets/images/p2.png';
import p3Image from '../app/assets/images/p3.png';
import p4Image from '../app/assets/images/p4.png';
import './Features.css';

const Features = ({ theme = { primaryColor: "#8B5CF6", secondaryColor: "#A78BFA" } }) => {
  const [activeStep, setActiveStep] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const ctaRef = useRef(null);

  // Etapas do processo de análise numerológica
  const steps = [
    {
      id: 'data-collection',
      number: "01",
      title: "Coleta de Dados Pessoais",
      description: "Analisamos seu nome completo de nascimento e data de nascimento para extrair os números que compõem sua essência vibracional e revelam aspectos profundos da sua personalidade.",
      benefits: [
        "Análise completa do nome e sobrenome",
        "Estudo detalhado da data de nascimento",
        "Identificação de vibrações numéricas únicas"
      ],
      image: p1Image,
      color: "#8B5CF6" // Roxo
    },
    {
      id: 'calculation',
      number: "02",
      title: "Cálculo dos Números Chave",
      description: "Calculamos com precisão todos os números que compõem seu mapa numerológico: Motivação, Impressão, Expressão, Dia Natalício, Destino e Missão.",
      benefits: [
        "Cálculos baseados na numerologia cabalística",
        "Identificação dos desafios específicos",
        "Mapeamento completo das tendências comportamentais"
      ],
      image: p2Image,
      color: "#A78BFA" // Roxo mais claro
    },
    {
      id: 'interpretation',
      number: "03",
      title: "Interpretação Aprofundada",
      description: "Realizamos uma análise profunda e detalhada de cada um dos seus números, revelando as conexões, influências e padrões que moldam sua vida.",
      benefits: [
        "Análise das interrelações entre seus números",
        "Interpretação de potenciais ocultos",
        "Identificação de padrões de vida recorrentes"
      ],
      image: p3Image,
      color: "#C4B5FD" // Roxo suave
    },
    {
      id: 'guidance',
      number: "04",
      title: "Orientações e Caminhos",
      description: "Oferecemos direcionamento específico sobre como utilizar o conhecimento do seu mapa numerológico para tomar decisões mais alinhadas e viver com mais propósito.",
      benefits: [
        "Recomendações para potencializar seus números positivos",
        "Estratégias para superar desafios numerológicos",
        "Insights para alinhamento com seu propósito de vida"
      ],
      image: p4Image,
      color: "#9CA3AF" // Cinza
    }
  ];

  // Detectar quando elementos entram na viewport
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        // Para a seção principal
        if (entry.target === sectionRef.current && entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, main: true }));
        }

        // Para cada passo do processo
        stepsRef.current.forEach((step, index) => {
          if (entry.target === step && entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [`step-${index}`]: true }));
          }
        });

        // Para a seção CTA
        if (entry.target === ctaRef.current && entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, cta: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    stepsRef.current.forEach(step => {
      if (step) observer.observe(step);
    });
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      stepsRef.current.forEach(step => {
        if (step) observer.unobserve(step);
      });
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  // Gerar gradiente dinâmico baseado nas cores dos passos
  const generateGradient = (index) => {
    const color = steps[index].color || theme.primaryColor;
    return `linear-gradient(135deg, ${color}, ${color}dd)`;
  };

  return (
    <section
      id="funcionamento"
      ref={sectionRef}
      className="py-24 relative overflow-hidden methodology-section bg-white"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: `${theme.secondaryColor}05` }}>
        <div className="absolute w-full h-full opacity-20 bg-numerology-pattern"></div>

        {/* Formas decorativas */}
        <div className="absolute left-0 top-20 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: theme.primaryColor, filter: 'blur(80px)' }}></div>
        <div className="absolute right-0 bottom-40 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: theme.secondaryColor, filter: 'blur(100px)' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${visibleSections.main ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-base font-semibold tracking-wider uppercase inline-block mb-2"
            style={{ color: theme.primaryColor }}>
            Metodologia Numerológica
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Como Criamos Seu Mapa de Nascimento
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo cuidadoso e detalhado baseado na numerologia cabalística,
            desenvolvido para revelar a essência do seu ser e seu caminho de evolução
          </p>
        </div>

        {/* Navegação dos passos (visível apenas em desktop) */}
        <div className="hidden lg:flex justify-center mb-16">
          <div className="inline-flex bg-white rounded-full shadow-lg p-2">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`relative flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeStep === index ? 'text-white font-medium' : 'text-gray-500 hover:text-gray-800'}`}
                style={{
                  backgroundColor: activeStep === index ? steps[index].color : 'transparent',
                  minWidth: '120px'
                }}
                onClick={() => {
                  setActiveStep(index);
                  stepsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full mr-2 text-sm"
                  style={{
                    backgroundColor: activeStep === index ? 'rgba(255,255,255,0.25)' :
                      steps[index].color + '15',
                    color: activeStep === index ? 'white' : steps[index].color
                  }}>
                  {index + 1}
                </span>
                <span className="whitespace-nowrap">{step.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Passos da metodologia */}
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                        items-center gap-10 md:gap-16 methodology-step transition-all duration-1000 
                        ${visibleSections[`step-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Imagem do passo */}
              <div className="w-full lg:w-5/12">
                <div className="relative">
                  {/* Background decorativo */}
                  <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl opacity-20 transition-all duration-300"
                    style={{
                      backgroundColor: step.color || theme.primaryColor,
                      transform: `rotate(${index % 2 === 0 ? '3deg' : '-3deg'})`
                    }}></div>

                  {/* Indicador de número */}
                  <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-xl z-10"
                    style={{ background: generateGradient(index) }}>
                    {step.number}
                  </div>

                  {/* Container da imagem */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="w-full transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Conteúdo do passo */}
              <div className="w-full lg:w-7/12">
                <div className="max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight text-center lg:text-left"
                    style={{ color: step.color || theme.primaryColor }}>
                    {step.title}
                  </h3>

                  <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>

                  {/* Lista de benefícios */}
                  <ul className="space-y-4 mb-8 md:mb-10">
                    {step.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3"
                          style={{ backgroundColor: `${step.color || theme.primaryColor}15` }}>
                          <svg className="h-4 w-4" style={{ color: step.color || theme.primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Indicador visual */}
                  <div className="flex space-x-1.5 justify-center lg:justify-start">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: i === index ? (step.color || theme.primaryColor) : '#e5e7eb',
                          width: i === index ? '2rem' : '0.75rem'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className={`mt-20 md:mt-32 text-center transition-all duration-1000 ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-10 rounded-full opacity-10"
              style={{ backgroundColor: theme.primaryColor, filter: 'blur(50px)' }}></div>

            <div className="relative z-10 bg-white rounded-2xl p-6 md:p-10 shadow-xl max-w-3xl mx-auto border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Pronto para descobrir seu caminho numerológico?
              </h3>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
                Inicie hoje sua jornada de autoconhecimento com nosso Mapa de Nascimento completo
                e descubra como viver em harmonia com seus números.
              </p>
              <a
              
                href="https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 rounded-lg group"
                style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})` }}
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                  style={{ background: `linear-gradient(135deg, ${theme.secondaryColor}, ${theme.primaryColor})` }}></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-white opacity-30 group-hover:rotate-90 ease-out rounded-full"></span>
                <span className="relative flex items-center">
                  RECEBER MEU MAPA DE NASCIMENTO
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>

              {/* Badge de garantia */}
              <div className="mt-6 inline-flex items-center text-sm text-gray-500">
                <svg className="w-5 h-5 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Análise completa com 98% de precisão</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;