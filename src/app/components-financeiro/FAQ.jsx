// src/components/FAQ.jsx
import React, { useEffect, useRef, useState } from 'react';


const FAQ = ({ theme = { primaryColor: "#2E8B57", secondaryColor: "#3CB371" } }) => {
  // Estado para controlar quais perguntas estão expandidas
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Ref para a seção
  const sectionRef = useRef(null);

  // Detectar quando a seção fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Toggle para expandir/recolher as perguntas
  const toggleQuestion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  // Lista de perguntas frequentes sobre o Mapa da Energia Financeira
  const faqs = [
    {
      question: "O que é um Mapa da Energia Financeira?",
      answer: "Um Mapa da Energia Financeira é uma análise detalhada baseada na numerologia cabalística que revela como sua energia pessoal influencia seu relacionamento com dinheiro. Ele identifica bloqueios financeiros, ciclos de prosperidade e estratégias personalizadas para atrair abundância baseadas na sua data de nascimento e nome completo."
    },
    {
      question: "Como é feito o Mapa da Energia Financeira?",
      answer: "O Mapa é elaborado através de cálculos precisos baseados na Numerologia Cabalística aplicada às finanças. Convertemos as letras do seu nome em números e realizamos cálculos específicos com sua data de nascimento para revelar sua vibração financeira. Cada número resultante é analisado em relação à sua influência sobre seus padrões de prosperidade."
    },
    {
      question: "Quais informações preciso fornecer?",
      answer: "Você precisará fornecer seu nome completo de nascimento (exatamente como consta na certidão) e sua data de nascimento completa (dia, mês e ano). É importante que essas informações estejam corretas para garantir a precisão do seu mapa financeiro."
    },
    {
      question: "Quanto tempo demora para receber meu mapa?",
      answer: "Você receberá seu Mapa da Energia Financeira em até 24 horas após a confirmação do pagamento. Em períodos de grande demanda, esse prazo pode se estender para até 48 horas, mas você será informado caso isso ocorra."
    },
    {
      question: "Como receberei meu mapa?",
      answer: "Seu mapa será enviado em formato PDF para o e-mail cadastrado na compra. O documento é detalhado, contém todas as análises e pode ser salvo ou impresso para consultas futuras. Não há consulta ou devolutiva personalizada incluída no valor, apenas o documento PDF com todas as informações necessárias."
    },
    {
      question: "O mapa é realmente personalizado?",
      answer: "Sim, cada Mapa da Energia Financeira é completamente personalizado e único. Ele é calculado especificamente com base nos seus dados, resultando em uma análise exclusiva que reflete sua relação energética individual com dinheiro e prosperidade."
    },
    {
      question: "Haverá alguma consulta ou devolutiva ao vivo incluída?",
      answer: "Não, o produto consiste exclusivamente no arquivo PDF do Mapa da Energia Financeira. O documento foi desenvolvido para ser autoexplicativo e completo, contendo todas as informações necessárias. Não há sessões de devolutiva, consultas ao vivo ou acompanhamento posterior incluídos neste valor."
    },
    {
      question: "O que o mapa inclui exatamente?",
      answer: "Seu mapa inclui a análise completa dos seus bloqueios financeiros energéticos, mapeamento dos seus ciclos pessoais de prosperidade, estratégias personalizadas de abundância, número da fortuna, vibrações financeiras favoráveis e desfavoráveis, e orientações práticas para transformar sua relação com o dinheiro."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é realizado através da plataforma segura da Hotmart. Aceitamos cartão de crédito (parcelado em até 12x), boleto bancário e PIX para pagamento à vista. Todas as transações são criptografadas e seus dados financeiros estão protegidos."
    },
    {
      question: "Preciso ter conhecimento prévio em numerologia?",
      answer: "Não, seu mapa é elaborado com linguagem clara e acessível, mesmo para quem nunca teve contato com numerologia. Todas as interpretações são apresentadas de forma prática e aplicável à sua vida financeira cotidiana."
    }
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="faq-section bg-white py-24"
    >
      {/* Background pattern */}
      <div className="faq-bg-pattern"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`faq-header text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'is-visible' : ''}`}>
          <span
            className="faq-subtitle text-sm font-semibold uppercase tracking-wider block mb-3"
            style={{ color: theme.primaryColor }}
          >
            TIRE SUAS DÚVIDAS
          </span>

          <h2 className="faq-title text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Perguntas Frequentes
          </h2>

          <p className="faq-description text-xl text-gray-600">
            Esclarecemos as dúvidas mais comuns sobre o Mapa da Energia Financeira e como ele pode transformar sua relação com o dinheiro
          </p>
        </div>

        {/* Destaque para informação de entrega */}
        <div className={`max-w-3xl mx-auto bg-green-50 p-5 rounded-xl mb-10 border border-green-100 ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6" style={{ color: theme.primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center md:text-left">Importante:</h3>
              <p className="text-green-800">
                O Mapa da Energia Financeira é entregue exclusivamente em formato PDF. Não há consultas ou devolutivas ao vivo incluídas neste valor. O documento PDF contém toda a análise completa necessária para sua transformação financeira.
              </p>
            </div>
          </div>
        </div>

        <div className={`faq-container max-w-3xl mx-auto space-y-4 ${isVisible ? 'is-visible' : ''}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item bg-white rounded-xl border transition-all duration-300 overflow-hidden ${expandedIndex === index ? 'is-expanded shadow-md' : ''}`}
              style={{
                transitionDelay: `${index * 50}ms`,
                borderColor: expandedIndex === index ? theme.primaryColor : 'rgba(229, 231, 235, 1)'
              }}
            >
              <button
                className="faq-question w-full px-6 py-5 text-left flex items-center justify-between font-medium text-gray-800"
                onClick={() => toggleQuestion(index)}
                aria-expanded={expandedIndex === index}
              >
                <span>{faq.question}</span>
                <div
                  className="faq-icon w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300"
                  style={{
                    backgroundColor: expandedIndex === index ? theme.primaryColor : 'rgba(243, 244, 246, 1)',
                    color: expandedIndex === index ? 'white' : theme.primaryColor
                  }}
                >
                  <svg
                    className="faq-arrow w-4 h-4 transition-transform duration-300"
                    style={{ transform: expandedIndex === index ? 'rotate(90deg)' : 'rotate(0)' }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                </button>
              <div
                className="faq-answer overflow-hidden transition-all duration-300 px-6 text-gray-600"
                style={{ maxHeight: expandedIndex === index ? '500px' : '0px' }}
              >
                <div className="py-5 border-t border-gray-100">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`faq-contact text-center mt-16 text-gray-600 ${isVisible ? 'is-visible' : ''}`}>
          <p className="mb-2">
            Ainda com dúvidas? Entre em contato conosco:
          </p>
          <a
            href="mailto:suportecaminhosparaalma@gmail.com"
            className="faq-email font-medium inline-block"
            style={{ color: theme.primaryColor }}
          >
            suportecaminhosparaalma@gmail.com
          </a>
          <div className="mt-2">
            <a
              href="https://wa.me/5531991153634"
              className="whatsapp-button px-4 py-2 rounded-md font-medium text-white flex items-center justify-center mx-auto" 
              style={{ backgroundColor: '#25D366', width: 'fit-content' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="mr-2">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>

        <div className={`faq-cta text-center mt-12 ${isVisible ? 'is-visible' : ''}`}>
          <a
            href="https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184"
            className="faq-button inline-block px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
              boxShadow: `0 10px 15px -3px ${theme.primaryColor}40`
            }}
          >
            RECEBER MEU MAPA DE ENERGIA FINANCEIRA EM PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;