import React, { useEffect, useRef, useState } from 'react';
import './Pricing.css';

const Pricing = ({ theme = { primaryColor: "#8B5CF6", secondaryColor: "#A78BFA", accentColor: "#6D28D9" } }) => {
  // Estados para controlar animações e interações
  const [isVisible, setIsVisible] = useState(false);
  const [activeBonus, setActiveBonus] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Refs para observar a visibilidade
  const sectionRef = useRef(null);

  // Características principais do produto
  const productFeatures = [
    "Análise de Motivação",
    "Análise de Impressão",
    "Análise de Expressão",
    "Análise do Dia Natalício",
    "Análise de Destino",
    "Análise de Missão",
    "Desafios e Tendências"
  ];

  // Detectar quando a seção fica visível
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.target === sectionRef.current && entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Contador regressivo
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;

        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }

        const newMinutes = prev.minutes - 1;

        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }

        const newHours = prev.hours - 1;

        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }

        clearInterval(timer);
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Função para lidar com o clique no checkout
  const handleCheckoutClick = () => {
    // Redirecionar para checkout da Hotmart ou outra plataforma
    window.location.href = "https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184";
  };

  // Formatar valor para exibição
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  };

  // Renderizar o contador
  const renderCountdown = () => {
    return (
      <div className="flex items-center justify-center gap-3 text-2xl font-bold">
        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="countdown-label">horas</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="countdown-label">min</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="countdown-label">seg</div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="precos"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
      ref={sectionRef}
      style={{ display: 'block', width: '100%' }}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full pricing-pattern opacity-30"></div>

        {/* Círculos decorativos */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: theme.primaryColor, filter: 'blur(50px)' }}></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: theme.secondaryColor, filter: 'blur(50px)' }}></div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        {/* Cabeçalho da seção */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-base font-semibold tracking-wider uppercase inline-block mb-2"
            style={{ color: theme.primaryColor }}>
            Oferta Especial
          </span>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Descubra Seu Caminho Numerológico
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Um investimento único que revelará a essência de quem você é e seu propósito nesta vida
          </p>
        </div>

        {/* Card principal de pricing */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Card principal */}
          <div className="relative">
            {/* Badge de desconto */}
            <div className="absolute -top-5 -right-5 z-20 md:block hidden">
              <div className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg transform rotate-12 font-bold">
                36% OFF
              </div>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden border border-gray-100 pricing-card">
              {/* Cabeçalho do card */}
              <div className="p-4 md:p-10 bg-gradient-to-r from-purple-50 to-purple-100 border-b border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                      Mapa de Nascimento Completo
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Sua análise numerológica detalhada baseada em numerologia cabalística
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 text-center md:text-right">
                    <div className="inline-flex flex-col items-end">
                      <span className="text-gray-500 line-through text-lg">
                        {formatCurrency(310.70)}
                      </span>
                      <div className="flex items-end gap-2">
                        <span className="text-3xl md:text-5xl font-bold" style={{ color: theme.accentColor }}>
                          {formatCurrency(197.50).split(',')[0]}
                        </span>
                        <span className="text-lg md:text-xl font-bold mb-1" style={{ color: theme.accentColor }}>
                          ,{formatCurrency(197.50).split(',')[1]}
                        </span>
                      </div>
                      <span className="text-base md:text-lg font-medium" style={{ color: theme.accentColor }}>
                        ou 10x de {formatCurrency(23.74)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conteúdo do produto */}
              <div className="p-4 md:p-10">
                <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800 flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" style={{ color: theme.accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  O que você recebe:
                </h4>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-10">
                  {[
                    {
                      title: "Análise de Motivação",
                      description: "Revelamos as características que motivam suas ações e a forma como você age no mundo."
                    },
                    {
                      title: "Análise de Impressão",
                      description: "Descubra sua autoimagem e a primeira impressão que causa nas pessoas."
                    },
                    {
                      title: "Análise de Expressão",
                      description: "Compreenda como você se relaciona com os outros e expressa seus talentos."
                    },
                    {
                      title: "Análise do Dia Natalício",
                      description: "Entenda as vibrações específicas do seu dia de nascimento e suas ferramentas naturais."
                    },
                    {
                      title: "Análise de Destino",
                      description: "Identifique as influências principais em sua personalidade e os caminhos prováveis."
                    },
                    {
                      title: "Análise de Missão",
                      description: "Descubra seu propósito de vida e o que veio fazer nesta existência."
                    },
                    {
                      title: "Desafios e Tendências",
                      description: "Reconheça seus principais desafios e tendências comportamentais para evitar padrões negativos."
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row items-center md:items-start p-3 md:p-4 border border-gray-100 rounded-lg md:rounded-xl bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 md:mb-0 md:mr-4"
                        style={{ backgroundColor: `${theme.primaryColor}15`, color: theme.primaryColor }}>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <p className="font-bold text-gray-800 text-sm md:text-base">{item.title}</p>
                        <p className="text-xs md:text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Informação sobre o formato do produto */}
                <div className="bg-purple-50 p-4 md:p-5 rounded-lg md:rounded-xl mb-5 md:mb-6 border border-purple-100">
                  <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto md:mx-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2 text-center md:text-left">Formato da entrega:</h5>
                      <p className="text-purple-800 text-xs md:text-sm">
                        O Mapa de Nascimento será entregue em formato PDF completo e autoexplicativo, enviado para seu e-mail. <strong>Não há sessões de devolutiva ou consulta incluídas</strong> neste valor. Todas as informações necessárias para seu autoconhecimento estarão detalhadas no documento.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Oferta por tempo limitado */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="inline-block bg-purple-50 border border-purple-100 rounded-full px-4 md:px-6 py-1 mb-3 md:mb-4">
                    <p className="text-purple-600 font-bold text-sm md:text-base">Oferta Especial!</p>
                  </div>

                  <div className="bg-purple-100 p-3 md:p-4 rounded-lg md:rounded-xl mb-4">
                    <p className="text-purple-800 font-medium text-xs md:text-sm">
                      Seu mapa completo inclui todas as 7 análises essenciais para seu autoconhecimento profundo, por um único investimento.
                    </p>
                  </div>
                </div>

                {/* CTA Button baseado no exemplo funcional */}
                <div className="text-center mb-6 md:mb-8">
                  <a
                    href="https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184"
                    className="relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 overflow-hidden font-medium text-white transition-all duration-300 rounded-lg group w-full"
                    style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`, zIndex: 10 }}
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                      style={{ background: `linear-gradient(135deg, ${theme.secondaryColor}, ${theme.primaryColor})`, zIndex: -1 }}></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-white opacity-30 group-hover:rotate-90 ease-out rounded-full" style={{ zIndex: -1 }}></span>
                    <span className="relative flex items-center justify-center text-sm md:text-base" style={{ zIndex: 10 }}>
                      RECEBER MEU MAPA DE NASCIMENTO EM PDF
                    </span>
                  </a>

                  <p className="text-gray-500 text-xs md:text-sm mt-3">
                    Seu mapa será enviado em até 72h após a confirmação do pagamento
                  </p>
                </div>

                {/* Formas de pagamento */}
                <div className="border-t border-gray-100 pt-4 md:pt-6">
                  <p className="text-center text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Formas de pagamento aceitas</p>
                  <div className="flex justify-center space-x-4">
                    <div className="payment-icon credit-card flex flex-col items-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-xs text-gray-500">Cartão</span>
                    </div>
                    <div className="payment-icon boleto flex flex-col items-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-xs text-gray-500">Boleto</span>
                    </div>
                    <div className="payment-icon pix flex flex-col items-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-xs text-gray-500">Pix</span>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>

        {/* Testemunhos rápidos ou social proof */}
        <div className={`max-w-4xl mx-auto mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {['Mais de 200 mapas entregues', 'Precisão de 98% confirmada', 'Análise profunda e detalhada'].map((item, index) => (
            <div key={index} className="bg-white bg-opacity-50 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl text-center border border-gray-100">
              <p className="text-xs md:text-sm text-gray-700 font-medium">
                <svg className="inline-block w-3 h-3 md:w-4 md:h-4 mr-1 mb-1" style={{ color: theme.accentColor }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;