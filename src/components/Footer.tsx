import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#0b0e14] pt-20 pb-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16">
        {/* Brand Block */}
        <div className="space-y-6">
          <Link 
            to="/" 
            className="flex items-center gap-3 select-none cursor-pointer hover:opacity-90 transition-opacity mb-2"
          >
            <img src="/logo.png" alt="dental.Clinic Logo" className="h-10 w-10 object-cover rounded-full" />
            <span 
              className="text-3xl font-normal tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              dental.Clinic
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-light">
            Somos una clínica dental de especialidades, donde podrás encontrar servicio de calidad con un enfoque centrado en el paciente.
          </p>
          <div className="flex gap-4 pt-2">
            {['Instagram', 'LinkedIn', 'Journal'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-0.5 group"
              >
                {social}
                <ArrowUpRight size={10} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-5">
          <h4 className="text-xs uppercase tracking-wider text-foreground font-semibold">
            Explore
          </h4>
          <ul className="space-y-3">
            {[
              { name: 'Inicio', path: '/' },
              { name: 'Nosotros', path: '/about' },
              { name: 'Servicios', path: '/services' },
              { name: 'Testimonios', path: '/testimonials' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contacto', path: '/contact' }
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Operating Hours */}
        <div className="space-y-5">
          <h4 className="text-xs uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
            <Clock size={12} className="text-muted-foreground" /> Horario
          </h4>
          <ul className="space-y-3.5 text-sm text-muted-foreground font-light">
            <li className="flex justify-between border-b border-border/30 pb-2">
              <span>Lunes – Sábado</span>
              <span className="text-foreground">09:00 – 19:00</span>
            </li>
            <li className="flex justify-between border-b border-border/30 pb-2">
              <span>Domingo</span>
              <span className="text-foreground">10:00 – 15:00</span>
            </li>
            <li className="flex justify-between pb-1">
              <span>Emergencias</span>
              <span className="text-foreground font-medium italic">24/7 Disponible</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h4 className="text-xs uppercase tracking-wider text-foreground font-semibold">
            La Clínica
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-light">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-muted-foreground shrink-0 mt-0.5" />
              <span>Tijuana, Baja California,<br />Mexico</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-muted-foreground shrink-0" />
              <div>
                <a href="tel:6642088413" className="hover:text-foreground transition-colors block">664 208 8413</a>
                <a href="https://wa.me/526642088413" className="hover:text-foreground text-[#25D366] transition-colors block text-xs opacity-80 mt-1">WhatsApp</a>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-muted-foreground shrink-0" />
              <a href="mailto:contacto@dental.clinic" className="hover:text-foreground transition-colors">contacto@dental.clinic</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Copyright Area */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-light">
        <div>
          © {currentYear} dental.Clinic. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-foreground transition-colors">Términos</a>
          <a href="#" className="hover:text-foreground transition-colors">Accesibilidad</a>
        </div>
      </div>
    </footer>
  );
}
