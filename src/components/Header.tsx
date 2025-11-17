import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'ホーム' },
    { id: 'menu', label: 'メニュー' },
    { id: 'contact', label: 'お問い合わせ' },
  ];

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-[#ff0000] shadow-lg">
      {/* Top Decorative Stripe */}
      <div className="h-2 bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <img
              src="/images/logo.png"
              alt="Gather Logo"
              className="h-12 w-auto"
            />
            <div className="text-2xl md:text-3xl">
              <span className="text-[#ff0000]" style={{ fontWeight: 900 }}>Gather</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-2 rounded-full border-3 transition-all transform hover:scale-105 ${
                  currentPage === item.id
                    ? 'bg-[#ff0000] text-white border-white shadow-lg'
                    : 'bg-white text-[#1d3557] border-[#58c6ca] hover:bg-[#fef6e4]'
                }`}
                style={{ fontWeight: 700 }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:03-1234-5678"
              className="px-6 py-2 bg-[#f5b91f] text-white rounded-full border-3 border-white shadow-lg hover:bg-[#e89548] transition-all transform hover:scale-105"
              style={{ fontWeight: 700 }}
            >
              📞 03-1234-5678
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-[#ff0000] text-white rounded-lg border-2 border-white shadow-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-6 py-3 rounded-lg border-3 transition-all ${
                  currentPage === item.id
                    ? 'bg-[#ff0000] text-white border-white shadow-lg'
                    : 'bg-[#fef6e4] text-[#1d3557] border-[#58c6ca]'
                }`}
                style={{ fontWeight: 700 }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:03-1234-5678"
              className="block w-full px-6 py-3 bg-[#f5b91f] text-white text-center rounded-lg border-3 border-white shadow-lg"
              style={{ fontWeight: 700 }}
            >
              📞 03-1234-5678
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
