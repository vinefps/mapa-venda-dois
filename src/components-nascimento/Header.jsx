'use client';

import React, { useEffect, useState } from 'react';
import logo from '../app/assets/images/logoo.png';
import HamburgerIcon from './HamburgerIcon';
import './Header.css';

const Header = ({ theme = { primaryColor: "#8B5CF6", secondaryColor: "#A78BFA" } }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hash, setHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener('click', closeMenu);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
      const handleHashChange = () => setHash(window.location.hash);
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`
        header w-full fixed top-0 left-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Mapa de Nascimento"
                className="h-10 w-auto mr-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzhCNUNGNiIvPjx0ZXh0IHg9IjIwIiB5PSIyNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIj5NTjwvdGV4dD48L3N2Zz4=';
                }}
              />
              <span className="text-xl font-bold text-gray-800">Mapa de Nascimento</span>
            </a>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <a
              href="#beneficios"
              className="nav-link text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300"
              style={{ color: hash === "#beneficios" ? theme.primaryColor : 'inherit' }}
            >
              Benefícios
            </a>

            <a
              href="#funcionamento"
              className="nav-link text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300"
              style={{ color: hash === '#funcionamento' ? theme.primaryColor : 'inherit' }}
            >
              Como Funciona
            </a>

            <a
              href="#precos"
              className="nav-link text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300"
              style={{ color: hash === '#precos' ? theme.primaryColor : 'inherit' }}
            >
              Preços
            </a>

            <a
              href="#faq"
              className="nav-link text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300"
              style={{ color: hash === '#faq' ? theme.primaryColor : 'inherit' }}
            >
              Perguntas Frequentes
            </a>

            {/* CTA desktop */}
            <a
              href="https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184"
              className="ml-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Quero meu mapa
            </a>
          </nav>

          {/* Botões mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            <button className="mobile-btn w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-700 flex items-center justify-center transition-colors duration-300" aria-label="Conta de usuário">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <button
              className="mobile-btn w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-700 flex items-center justify-center transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Menu principal"
              aria-expanded={isMenuOpen}
            >
              <HamburgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile expansível */}
      <div
        className={`mobile-menu lg:hidden bg-white w-full transition-all duration-300 shadow-lg fixed top-20 left-0 ${
          isMenuOpen ? 'h-auto opacity-100 visible' : 'h-0 opacity-0 invisible'
        }`}
        style={{
          zIndex: 100,
          boxShadow: isMenuOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
          display: isMenuOpen ? 'block' : 'none'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#beneficios" className="py-2 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300" onClick={handleMenuLinkClick}>
            Benefícios
          </a>
          <a href="#funcionamento" className="py-2 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300" onClick={handleMenuLinkClick}>
            Como Funciona
          </a>
          <a href="#precos" className="py-2 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300" onClick={handleMenuLinkClick}>
            Preços
          </a>
          <a href="#faq" className="py-2 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300" onClick={handleMenuLinkClick}>
            Perguntas Frequentes
          </a>
          <div className="pt-4 border-t border-gray-100">
            <a href="https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184" className="block w-full py-3 px-4 text-center bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300" onClick={handleMenuLinkClick}>
              Quero meu mapa
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;