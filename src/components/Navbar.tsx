import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Activity } from 'lucide-react';

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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
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
          ? 'border-b border-border/10 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'border-b border-transparent bg-transparent backdrop-blur-none'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 select-none cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="bg-primary/10 p-2 rounded-xl text-primary">
              <Activity size={24} />
            </div>
            <div className="flex flex-col">
              <span 
                className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground leading-none"
              >
                Suraksha
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium">
                Multispeciality Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
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
              href="https://wa.me/918105200448" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-medium text-[#25D366] hover:opacity-80 transition-opacity"
            >
              WhatsApp
            </a>
            <button
              onClick={onOpenAppointmentModal}
              className="liquid-glass rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <Calendar size={14} className="opacity-90" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
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
          <div className="absolute top-[80px] left-0 w-full bg-white border-b border-border py-8 px-6 flex flex-col gap-6 shadow-xl">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary border-l-2 border-primary pl-3'
                      : 'text-foreground hover:text-primary pl-3'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="border-t border-border/40 pt-6 flex flex-col gap-3">
              <a 
                href="https://wa.me/918105200448" 
                target="_blank" 
                rel="noreferrer"
                className="w-full rounded-full bg-[#25D366] text-white text-center py-3.5 text-sm font-semibold hover:scale-[1.01] transition-transform duration-200 cursor-pointer"
              >
                WhatsApp Us
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full rounded-full bg-primary text-primary-foreground text-center py-3.5 text-black text-sm font-semibold hover:bg-primary/90 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar size={14} />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
