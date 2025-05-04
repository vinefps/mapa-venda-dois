'use client';

import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = ({ theme = { primaryColor: "#8B5CF6", secondaryColor: "#A78BFA" } }) => {
  const [currentYear, setCurrentYear] = useState(2024); // Default year

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Links informativos
  const infoLinks = [
    { name: 'Sobre a Numerologia', url: '#about' },
    { name: 'Como funciona', url: '#como-funciona' },
    { name: 'Depoimentos', url: '#depoimentos' },
    { name: 'Contato', url: '#contato' }
  ];

  // Links legais
  const legalLinks = [
    { name: 'Política de Privacidade', url: '#privacidade' },
    { name: 'Termos de Uso', url: '#termos' },
    { name: 'Política de Cookies', url: '#cookies' },
    { name: 'Garantia e Reembolso', url: '#garantia' }
  ];

  // Redes sociais
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/cecilia.ooficial/',
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5531991153634',
      icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    }
  ];

  return (
    <footer className="site-footer bg-white py-16 relative">
      {/* Background elements related to numerology */}
      <div className="container mx-auto px-4 relative z-10">

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Coluna 1: Logo e descrição */}
          <div className="md:w-1/3">
            <div
              className="footer-brand text-3xl font-bold mb-4"
              style={{
                background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              MAPA NUMEROLÓGICO
            </div>
            <p className="text-gray-600 mb-6">
              Revelando seu caminho através da sabedoria dos números. Descubra seu propósito de vida, talentos ocultos e desafios com nosso Mapa de Nascimento Numerológico personalizado.
            </p>
            <div className="footer-social flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-item w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-purple-100 hover:text-purple-600 text-gray-500"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
            
            {/* Contato WhatsApp com destaque */}
            <div className="mt-4 flex items-center">
              <a
                href="https://wa.me/5531991153634"
                className="inline-flex items-center px-4 py-2 rounded-lg text-white transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </div>
          </div>

          {/* Coluna 2: Links informativos */}
          <div className="md:w-1/3">
            <div
              className="footer-links-title text-lg font-semibold mb-5 relative pb-2"
              style={{ color: theme.primaryColor }}
            >
              Numerologia
              <span 
                className="footer-links-title-underline absolute bottom-0 left-0 h-0.5 w-12" 
                style={{ background: `linear-gradient(to right, ${theme.primaryColor}, ${theme.secondaryColor})` }}
              ></span>
            </div>
            <ul className="footer-links space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="footer-link text-gray-600 hover:text-purple-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Links legais */}
          <div className="md:w-1/3">
            <div
              className="footer-links-title text-lg font-semibold mb-5 relative pb-2"
              style={{ color: theme.primaryColor }}
            >
              Legal
              <span 
                className="footer-links-title-underline absolute bottom-0 left-0 h-0.5 w-12" 
                style={{ background: `linear-gradient(to right, ${theme.primaryColor}, ${theme.secondaryColor})` }}
              ></span>
            </div>
            <ul className="footer-links space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="footer-link text-gray-600 hover:text-purple-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider w-full h-px bg-gray-200 my-8"></div>

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="footer-copyright mb-4 md:mb-0 text-gray-500 text-sm">
            © {currentYear} Mapa Numerológico. Todos os direitos reservados.
          </p>

          <p className="footer-tagline text-gray-500 text-sm">
            Desenvolvido com <span className="footer-heart text-purple-500">♥</span> para sua evolução pessoal
          </p>
        </div>

        {/* Disclaimer */}
        <div className="footer-disclaimer mt-6 pt-6 border-t border-gray-100">
          <p className="disclaimer-text text-center text-gray-400 text-xs">
            IMPORTANTE: Este site não é uma página oficial da Hotmart. A Hotmart não endossa nem é responsável pelo conteúdo deste site.
          </p>
          <p className="disclaimer-text text-center text-gray-400 text-xs mt-2">
            Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados,
            nem avalia a tecnicidade e experiência daqueles que os produzem. A existência de um produto e sua aquisição na plataforma não podem
            ser consideradas como garantia de qualidade de conteúdo e resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara
            estar ciente dessas informações. Os termos e políticas da Hotmart se aplicam a todas as transações.
          </p>
          <p className="disclaimer-text text-center text-gray-400 text-xs mt-2">
            O produto consiste apenas no arquivo PDF do Mapa de Nascimento. Não há sessões de devolutiva, consulta ou acompanhamento incluídos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;