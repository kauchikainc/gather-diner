import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { FullMenu } from "./components/FullMenu";
import ContactForm from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'contact'>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fef6e4]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'menu' && <FullMenu />}
      {currentPage === 'contact' && <ContactForm />}

      <Footer />
      <Analytics />
    </div>
  );
}
