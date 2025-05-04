'use client'
// src/components/Testimonials.jsx
import p1 from '../app/assets/images/test1.png';
import p2 from '../app/assets/images/test2.png';
import p3 from '../app/assets/images/test3.png';
import p4 from '../app/assets/images/test4.png';
import p5 from '../app/assets/images/test5.png';
import p6 from '../app/assets/images/test6.png'; 
import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Ana Paula Silva",
      location: "São Paulo, SP",
      text: "Esse mapa mudou completamente a minha vida! O PDF é muito detalhado e fácil de entender. Em apenas um mês, consegui enxergar coisas que, por anos, não conseguia perceber e que me sabotavam sem que eu soubesse.",
      image: p1,
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      location: "Rio de Janeiro, RJ",
      text: "Estava cético no início, mas decidi dar uma chance. Foi a melhor decisão que tomei! Recebi o PDF do mapa muito mais rápido do que esperava e já consegui identificar o que precisava ajustar em mim sem necessidade de consulta adicional.",
      image: p5,
      rating: 5
    },
    {
      name: "Fernanda Costa",
      location: "Belo Horizonte, MG",
      text: "Recomendo para todos que querem uma transformação real! O mapa é entregue em PDF e é fácil de compreender, completo e autoexplicativo. Faz toda a diferença.",
      image: p3,
      rating: 5
    },
    {
      name: "Marcelo Alves",
      location: "Florianópolis, SC",
      text: "Já tinha tentado vários outros métodos sem sucesso. Este mapa de nascimento em PDF é diferente de tudo que já experimentei. É completo, bem estruturado e realmente funciona mesmo sem acompanhamento posterior!",
      image: p6,
      rating: 5
    },
    {
      name: "Juliana Mendes",
      location: "Brasília, DF",
      text: "Se você está em dúvida, não pense duas vezes! Vale cada centavo investido. O documento PDF tem toda a informação que você precisa e a transformação é incrível, me ajuda a continuar evoluindo.",
      image: p4,
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com nosso mapa numerológico
          </p>
        </div>

        {/* Nota sobre formato de entrega */}
        <div className="max-w-2xl mx-auto bg-purple-50 p-4 rounded-lg mb-10 border border-purple-100 text-center">
          <p className="text-sm text-purple-800 font-medium">
            Todos os depoimentos abaixo são de clientes que receberam nosso Mapa de Nascimento em PDF, 
            sem devolutiva personalizada ou consulta.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-purple-50 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <h3 className="mt-4 font-bold text-gray-800 text-center">{testimonials[activeIndex].name}</h3>
                <p className="text-sm text-gray-500 text-center">{testimonials[activeIndex].location}</p>
                <div className="flex mt-2">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
              </div>
              <div className="md:w-3/4">
                <svg className="h-10 w-10 text-purple-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-xl text-gray-700 italic">
                  {testimonials[activeIndex].text}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial} 
              className="bg-white hover:bg-gray-100 text-purple-600 p-3 rounded-full shadow-md transition-all"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial} 
              className="bg-white hover:bg-gray-100 text-purple-600 p-3 rounded-full shadow-md transition-all"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-16 text-center px-4">
          <a 
            href="https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-4 rounded-full text-base md:text-lg inline-block transition-all transform hover:scale-105 shadow-lg w-full max-w-md mx-auto"
          >
            RECEBER MEU MAPA DE NASCIMENTO EM PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;