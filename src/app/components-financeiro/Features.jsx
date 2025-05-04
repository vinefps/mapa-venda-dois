// src/components/Features.jsx
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import p1Image from '../assets/images/p1.png'; // Substitua com imagens relacionadas à numerologia financeira
import p2Image from '../assets/images/p2.png';
import p3Image from '../assets/images/p3.png';
import p4Image from '../assets/images/p4.png';

const Features = ({ theme = { primaryColor: "#2E8B57", secondaryColor: "#3CB371" } }) => {
  const [activeStep, setActiveStep] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const ctaRef = useRef(null);

  // Etapas do processo de análise da numerologia financeira
  const steps = [
    {
      id: 'data-collection',
      number: "01",
      title: "Coleta de Dados Pessoais",
      description: "Analisamos seu nome completo de nascimento e data de nascimento para extrair os números que compõem sua energia financeira e revelam seu relacionamento com dinheiro.",
      benefits: [
        "Análise completa do nome e sobrenome",
        "Estudo detalhado da data de nascimento",
        "Identificação de vibrações financeiras únicas"
      ],
      image: p1Image,
      color: "#2E8B57" // Verde
    },
    {
      id: 'calculation',
      number: "02",
      title: "Mapeamento de Bloqueios",
      description: "Identificamos com precisão todos os bloqueios energéticos que estão impedindo o fluxo natural de prosperidade em sua vida financeira.",
      benefits: [
        "Identificação de padrões limitantes",
        "Diagnóstico de crenças negativas sobre dinheiro",
        "Mapeamento de comportamentos autossabotadores"
      ],
      image: p2Image,
      color: "#3CB371" // Verde médio
    },
    {
      id: 'interpretation',
      number: "03",
      title: "Análise de Ciclos de Prosperidade",
      description: "Realizamos uma análise profunda dos seus ciclos financeiros pessoais, revelando os períodos mais favoráveis para investimentos e decisões financeiras importantes.",
      benefits: [
        "Identificação de períodos favoráveis para investimentos",
        "Previsão de ciclos de crescimento financeiro",
        "Estratégias para navegar períodos de desafios"
      ],
      image: p3Image,
      color: "#66CDAA" // Verde-água médio
    },
    {
      id: 'guidance',
      number: "04",
      title: "Estratégias de Abundância",
      description: "Oferecemos técnicas personalizadas baseadas na sua vibração numérica para atrair prosperidade e transformar sua relação com o dinheiro.",
      benefits: [
        "Técnicas de ativação energética financeira",
        "Estratégias alinhadas com seu perfil numerológico",
        "Práticas diárias para manifestar abundância"
      ],
      image: p4Image,
      color: "#20B2AA" // Verde-azulado
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
      className="py-32 relative overflow-hidden methodology-section bg-gradient-to-br from-gray-900 to-black"
    >
      {/* Background com formas geométricas */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 transform -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="white" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 transform translate-x-1/2 translate-y-1/2">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="5" y="5" width="90" height="90" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections.main ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6 px-6 py-2 rounded-full border border-white/20">
            <span className="text-sm font-medium tracking-wider uppercase text-white/80">
              Processo de Transformação
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-6 text-white">
            Jornada da Numerologia Financeira
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Uma imersão profunda nos números que regem sua realidade financeira, 
            decodificando padrões invisíveis e criando caminhos para a prosperidade autêntica
          </p>
        </div>

        {/* Timeline Vertical com Conexões */}
        <div className="relative">
          {/* Linha central vertical */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:transform md:-translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className={`relative mb-20 last:mb-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Ponto de conexão na linha */}
              <div 
                className={`absolute w-4 h-4 rounded-full border-4 border-white ${
                  activeStep === index ? 'bg-yellow-400' : 'bg-gray-900'
                }`}
                style={{ 
                  left: index % 2 === 0 ? 'calc(50% - 8px)' : 'calc(50% - 8px)',
                  top: '24px',
                  [index % 2 === 0 ? 'right' : 'left']: -8
                }}
              ></div>

              <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/3">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/10">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                  </div>
                </div>

                <div className="w-2/3">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-6 text-lg">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ backgroundColor: step.color }}
                          ></div>
                          <span className="text-gray-400">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section Minimalista */}
        <div
          ref={ctaRef}
          className={`mt-32 transition-all duration-1000 ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-serif italic mb-8 text-white">
              Inicie sua transformação financeira agora
            </h3>

            <a
              href="https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184"
              className="inline-flex items-center px-12 py-5 rounded-full text-gray-900 font-medium text-lg bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Acessar Meu Mapa Numerológico
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l3 3 7-7" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </a>

            <p className="mt-6 text-sm text-gray-400">
              Acesso imediato ao seu mapa energético personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;