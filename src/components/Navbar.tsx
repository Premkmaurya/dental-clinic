import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenAppointmentModal: () => void;
}

export default function Navbar({ onOpenAppointmentModal }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Servicios', path: '/services' },
    { name: 'Testimonios', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-white/5 bg-background/20 backdrop-blur-md shadow-lg' 
          : 'border-b border-transparent bg-transparent backdrop-blur-none'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 select-none cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img src="/logo.png" alt="dental.Clinic Logo" className="h-10 w-10 object-cover rounded-full" />
            <span 
              className="text-3xl font-normal tracking-tight text-foreground hidden sm:block"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              dental.Clinic
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/526642088413" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-medium text-[#25D366] hover:opacity-80 transition-opacity"
            >
              WhatsApp
            </a>
            <button
              onClick={onOpenAppointmentModal}
              className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <Calendar size={14} className="opacity-80" />
              Agendar Cita
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden animate-fade-rise">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/90 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Content Menu */}
          <div className="absolute top-[80px] left-0 w-full bg-secondary/95 border-b border-border py-8 px-6 flex flex-col gap-6 shadow-xl">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-light transition-colors ${
                    isActive(link.path)
                      ? 'text-foreground border-l-2 border-white pl-3'
                      : 'text-muted-foreground hover:text-foreground pl-3'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="border-t border-border/40 pt-6 flex flex-col gap-3">
              <a 
                href="https://wa.me/526642088413" 
                target="_blank" 
                rel="noreferrer"
                className="w-full rounded-full bg-[#25D366] text-white text-center py-3.5 text-sm font-semibold hover:scale-[1.01] transition-transform duration-200 cursor-pointer"
              >
                WhatsApp
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full rounded-full bg-white text-black text-center py-3.5 text-sm font-semibold hover:scale-[1.01] transition-transform duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar size={14} />
                Agendar Cita
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
