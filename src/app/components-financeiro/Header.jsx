'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = ({ theme = { primaryColor: "#2E8B57", secondaryColor: "#3CB371" } }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta quando o usuário rola a página para adicionar sombra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-md bg-white' : 'py-5 bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo/Título */}
        <Link href="/" className="flex items-center">
          <div className="relative">
            <div 
              className="absolute -inset-1 rounded-full opacity-20" 
              style={{ background: theme.primaryColor }}
            />
            <div className="relative text-2xl font-bold" style={{ color: theme.primaryColor }}>
              Caminhos para a Alma
            </div>
          </div>
        </Link>

        {/* Menu de navegação desktop */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Sobre', href: '#sobre' },
            { name: 'FAQ', href: '#faq' },
            { name: 'Contato', href: '#contato' }
          ].map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-gray-600 hover:text-gray-900 relative group font-medium text-sm transition-colors"
            >
              {item.name}
              <span 
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ background: theme.primaryColor }}
              />
            </a>
          ))}
        </nav>

        {/* Botão de contato */}
        <a
          href="https://wa.me/5531991153634"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex px-5 py-2 rounded-full text-white font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 items-center gap-2"
          style={{
            background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Contato</span>
        </a>

        {/* Botão de menu mobile */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fadeIn">
          <div className="max-w-6xl mx-auto px-4 flex flex-col space-y-4">
            {[
              { name: 'Sobre', href: '#sobre' },
              { name: 'Produtos', href: '#produtos' },
              { name: 'Depoimentos', href: '#depoimentos' },
              { name: 'FAQ', href: '#faq' },
              { name: 'Contato', href: '#contato' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-100 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <a
              href="https://wa.me/5531991153634"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white font-medium mt-4"
              style={{
                background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Contato via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;