import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../src/components-nascimento/Header";
import Footer from "../../src/components-nascimento/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mapas Numerológicos - Nascimento e Energia Financeira",
  description: "Descubra seu propósito de vida e desbloqueie seu potencial financeiro através da numerologia cabalística",
};

export default function RootLayout({ children }) {
  // Tema para os componentes (usando o tema do mapa de nascimento)
  const theme = { primaryColor: "#8B5CF6", secondaryColor: "#A78BFA" };

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header - usado em todas as páginas */}
        <Header theme={theme} />
        
        {/* Conteúdo principal */}
        <main>
          {children}
        </main>
        
        {/* Footer - usado em todas as páginas */}
        <Footer theme={theme} />
      </body>
    </html>
  );
}