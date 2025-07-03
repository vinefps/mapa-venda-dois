'use client'
// src/app/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import mapaImage from '../app/assets/images/mapa.png'
import mapaCaminho from '../app/assets/images/caminhoo.png'
import mapaFin from '../app/assets/images/mapaf.png'
import cecilia from '../app/assets/images/cecilia.png'

export default function HomePage() {
  // Define as cores do tema
  const theme = {
    primaryColor: "#8B5CF6",
    secondaryColor: "#A78BFA",
    primaryFinance: "#10B981",
    secondaryFinance: "#34D399",
    textDark: "#333333",
    textLight: "#666666",
    background: "#ffffff"
  };

  return (
    <main className="min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: theme.primaryColor }}>
            Caminhos para a Alma
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#sobre" className="text-gray-600 hover:text-gray-900">Sobre</a>
            <a href="#produtos" className="text-gray-600 hover:text-gray-900">Produtos</a>
            <a href="#depoimentos" className="text-gray-600 hover:text-gray-900">Depoimentos</a>
            <a href="#contato" className="text-gray-600 hover:text-gray-900">Contato</a>
          </nav>

          <a
            href="https://wa.me/5531991153634"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-white font-medium"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.primaryFinance})`,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
            }}
          >
            Contato
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section min-h-screen flex items-center relative pt-24 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}20, ${theme.primaryFinance}20)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/images/pattern.png')] opacity-5"></div>

          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 animate-float-slow"
            style={{ background: theme.primaryColor, filter: 'blur(40px)' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 animate-float-reverse"
            style={{ background: theme.primaryFinance, filter: 'blur(50px)' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 z-10 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block text-purple-600 text-lg font-medium tracking-wider mb-4 px-4 py-1 rounded-full border border-purple-200 bg-purple-50">
                Autoconhecimento & Prosperidade
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Descubra a sabedoria dos <span className="relative inline-block">
                  números
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200 opacity-50 rounded-full -z-10"></span>
                </span> para sua evolução
              </h1>

              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Mapas numerológicos personalizados que revelam seu caminho de vida, propósito e potencial financeiro através da numerologia cabalística.
              </p>

              <a
                href="#produtos"
                className="inline-block px-8 py-4 rounded-lg text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-purple-600 to-purple-500"
              >
                Conhecer os Mapas
                <span className="ml-2">↓</span>
              </a>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Produto da Numerologia */}
                <div className="absolute top-0 left-0 w-4/5 h-4/5 transform -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-105 z-10">
                  <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent z-10"></div>
                    <Image
                      src={mapaCaminho}
                      alt="Mapa de Nascimento"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Produto de Finanças */}
                <div className="absolute bottom-0 right-0 w-4/5 h-4/5 transform rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-105">
                  <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent z-10"></div>
                    <Image
                      src={mapaFin}
                      alt="Mapa da Energia Financeira"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-purple-100"></div>
                <div className="absolute -bottom-4 -right-4 p-3 bg-white rounded-xl shadow-lg">
                  <div className="px-4 py-2 bg-purple-100 rounded-lg">
                    <p className="text-purple-800 font-medium text-sm">
                      + de 500 mapas entregues
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <span className="text-purple-600 uppercase tracking-wider text-sm font-semibold mb-2 block">
                CONHEÇA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Cecília Oliveira
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Especialista em numerologia cabalística com mais de 10 anos de experiência,
                  Cecília tem ajudado centenas de pessoas a descobrirem seu propósito de vida
                  e transformarem sua relação com as finanças através do poder dos números.
                </p>

                <p>
                  Formada em psicologia e com especialização em análise numerológica,
                  Cecília combina conhecimento técnico com uma abordagem intuitiva e acolhedora,
                  criando mapas numerológicos personalizados que revelam aspectos profundos da
                  personalidade e do caminho de vida de cada pessoa.
                </p>

                <div className="relative p-5 border-l-4 border-purple-400 bg-purple-50 rounded-r-lg">
                  <svg
                    className="absolute -top-3 -left-6 w-8 h-8 text-purple-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 italic">
                    "Minha missão é ajudar você a descobrir quem realmente é e como pode
                    viver em harmonia com sua verdadeira essência, manifestando prosperidade
                    em todas as áreas da vida."
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Especialista em Numerologia</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Consultora Financeira</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Psicóloga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-purple-600 uppercase tracking-wider text-sm font-semibold mb-2 inline-block">
              NOSSOS PRODUTOS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Escolha seu caminho de evolução
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mapas numerológicos personalizados que revelam aspectos profundos do seu ser
              e abrem portas para sua evolução pessoal e prosperidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mapa de Nascimento */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-56">
                <Image
                  src={mapaCaminho}
                  alt="Mapa de Nascimento"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>

                <div className="absolute top-4 right-4 px-4 py-1 rounded-full text-white text-sm font-semibold" style={{ background: theme.primaryColor }}>
                  Mais Vendido
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Mapa de Nascimento</h3>
                  <p className="text-white/90">Descubra seu propósito de vida e missão</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Uma análise personalizada dos seus números vibratórios, elaborada especificamente
                  para revelar seu verdadeiro potencial e caminho de vida.
                </p>

                <div className="space-y-2 mb-6">
                  {["Análise de Motivação", "Análise de Expressão", "Análise de Destino"].map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3"
                        style={{ backgroundColor: `${theme.primaryColor}20`, color: theme.primaryColor }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  <div className="text-sm text-gray-500 ml-8">E mais 4 análises completas...</div>
                </div>

                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-gray-400 line-through text-sm">R$ 310,70</span>
                    <div className="text-2xl font-bold" style={{ color: theme.primaryColor }}>
                      R$ 197,50
                    </div>
                    <div className="text-sm text-gray-500">
                      ou 10x de R$ 23,74
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full text-white text-xs" style={{ background: theme.primaryColor }}>
                    36% OFF
                  </div>
                </div>

                <div className="flex justify-between">
                  <Link
                    href="/produtos/mapa-nascimento"
                    className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:shadow-lg"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    Saber mais
                  </Link>

                  <a
                    href="https://pay.hotmart.com/B86094547V?off=fw1p2yst&bid=1744989710184"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all"
                  >
                    Comprar agora
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa Financeiro */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-56">
                <Image
                  src={mapaFin}
                  alt="Mapa da Energia Financeira"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>

                <div className="absolute top-4 right-4 px-4 py-1 rounded-full text-white text-sm font-semibold" style={{ background: theme.primaryFinance }}>
                  Novo
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Mapa da Energia Financeira</h3>
                  <p className="text-white/90">Desbloqueie seu potencial financeiro</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Um guia completo sobre como sua energia pessoal influencia seu relacionamento
                  com dinheiro, baseado na numerologia financeira.
                </p>

                <div className="space-y-2 mb-6">
                  {["Mapeamento de Bloqueios Financeiros", "Ciclos Financeiros Pessoais", "Estratégias de Abundância"].map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3"
                        style={{ backgroundColor: `${theme.primaryFinance}20`, color: theme.primaryFinance }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  <div className="text-sm text-gray-500 ml-8">E mais 4 análises completas...</div>
                </div>

                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-gray-400 line-through text-sm">R$ 247,50</span>
                    <div className="text-2xl font-bold" style={{ color: theme.primaryFinance }}>
                      R$ 147,50
                    </div>
                    <div className="text-sm text-gray-500">
                      ou 10x de R$ 16,62
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full text-white text-xs" style={{ background: theme.primaryFinance }}>
                    40% OFF
                  </div>
                </div>

                <div className="flex justify-between">
                  <Link
                    href="/produtos/mapa-financeiro"
                    className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:shadow-lg"
                    style={{ backgroundColor: theme.primaryFinance }}
                  >
                    Saber mais
                  </Link>

                  <a
                    href="https://pay.hotmart.com/B86094548Z?off=tdr43yst&bid=1744989710184"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all"
                  >
                    Comprar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-purple-600 uppercase tracking-wider text-sm font-semibold mb-2 inline-block">
              DEPOIMENTOS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas através
              dos nossos mapas numerológicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                  M
                </div>
                <div>
                  <h4 className="text-lg font-bold">Mariana Silva</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "O Mapa de Nascimento mudou completamente minha vida! Finalmente entendi porque sempre me senti diferente e qual é o meu verdadeiro propósito. Agora tomo decisões muito mais alinhadas com quem realmente sou."
              </p>
              <p className="text-sm text-gray-500">Mapa de Nascimento • Maio 2023</p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mr-3">
                  R
                </div>
                <div>
                  <h4 className="text-lg font-bold">Rafael Mendes</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Sempre tive dificuldade com dinheiro, mesmo ganhando bem. O Mapa da Energia Financeira me mostrou exatamente quais eram meus bloqueios e como superá-los. Em apenas 3 meses, consegui quitar uma dívida que me perseguia há anos!"
              </p>
              <p className="text-sm text-gray-500">Mapa da Energia Financeira • Janeiro 2024</p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3"
                  style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.primaryFinance})` }}>
                  J
                </div>
                <div>
                  <h4 className="text-lg font-bold">Julia Carvalho</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Adquiri os dois mapas e foi a melhor decisão que já tomei! A combinação do autoconhecimento com as estratégias financeiras me trouxe uma clareza incrível. Em seis meses abri meu próprio negócio alinhado com meu propósito de vida."
              </p>
              <p className="text-sm text-gray-500">Pacote Completo • Março 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-purple-600 uppercase tracking-wider text-sm font-semibold mb-2 inline-block">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Perguntas comuns sobre nossos mapas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Esclarecemos as dúvidas mais frequentes sobre nossos mapas numerológicos
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Qual a diferença entre o Mapa de Nascimento e o Mapa da Energia Financeira?",
                answer: "O Mapa de Nascimento foca em aspectos gerais da sua personalidade, propósito de vida e missão existencial. Já o Mapa da Energia Financeira é específico para sua relação com dinheiro, apontando seus padrões financeiros, bloqueios e caminhos para prosperidade baseados na sua numerologia pessoal."
              },
              {
                question: "Como é feito o Mapa de Nascimento?",
                answer: "O Mapa é elaborado através de cálculos baseados na Numerologia Cabalística. Convertemos as letras do seu nome completo e sua data de nascimento em números, que são analisados individualmente e em suas interrelações, criando um panorama completo da sua essência numerológica."
              },
              {
                question: "Como o Mapa da Energia Financeira pode me ajudar?",
                answer: "Este mapa revela como sua energia vibracional influencia sua relação com dinheiro, identificando padrões inconscientes que podem estar bloqueando sua prosperidade. Ele oferece orientações específicas para alinhar sua energia com a abundância, baseadas nos seus números pessoais."
              },
              {
                question: "Quais informações preciso fornecer para receber os mapas?",
                answer: "Para ambos os mapas, você precisará fornecer seu nome completo de nascimento (exatamente como consta na certidão) e sua data de nascimento completa (dia, mês e ano). É importante que essas informações estejam corretas para garantir a precisão do seu mapa."
              },
              {
                question: "Quanto tempo demora para receber os mapas?",
                answer: "Você receberá seus Mapas Numerológicos em até 24 horas após a confirmação do pagamento. Em períodos de grande demanda, esse prazo pode se estender para até 48 horas, mas você será informado caso isso ocorra."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-100 mt-8">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-2">Importante:</h5>
                  <p className="text-purple-800">
                    Ambos os Mapas são entregues exclusivamente em formato PDF. Não há consultas ou devolutivas ao vivo incluídas neste valor. Os documentos PDF contêm toda a análise completa necessária para seu autoconhecimento e evolução financeira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Pronto para transformar sua vida?
                </h2>
                <p className="text-lg text-gray-600">
                  Entre em contato ou adquira já seu mapa numerológico
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Contato</h3>

                  <div className="space-y-4">
                    <a href="mailto:suportecaminhosparaalma@gmail.com" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      suportecaminhosparaalma@gmail.com
                    </a>

                    <a href="https://wa.me/5531991153634" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (31) 99115-3634
                    </a>

                    <a href="https://www.instagram.com/cecilia.ooficial/" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      @cecilia.ooficial
                    </a>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Escolha seu Mapa</h3>

                  <div className="space-y-4">
                    <a
                      href="/produtos/mapa-nascimento"
                      className="block px-6 py-3 rounded-lg text-white text-center font-medium transition-all hover:shadow-lg"
                      style={{ backgroundColor: theme.primaryColor }}
                    >
                      Mapa de Nascimento
                    </a>

                    <a
                      href="/produtos/mapa-financeiro"
                      className="block px-6 py-3 rounded-lg text-white text-center font-medium transition-all hover:shadow-lg"
                      style={{ backgroundColor: theme.primaryFinance }}
                    >
                      Mapa da Energia Financeira
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(15px); }
          50% { transform: translateY(0) translateX(30px); }
          75% { transform: translateY(15px) translateX(15px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(15px) translateX(-15px); }
          50% { transform: translateY(0) translateX(-30px); }
          75% { transform: translateY(-15px) translateX(-15px); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s infinite ease-in-out;
        }
        
        .animate-float-reverse {
          animation: float-reverse 18s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}