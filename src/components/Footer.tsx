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
            className="text-3xl font-normal tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Ark Dental®
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-light">
            At Ark Dental Clinic, you’re in good hands. We practice the highest dental standards, employing cutting-edge clinical technologies with a gentle, patient-centered approach.
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
              { name: 'Home Portfolio', path: '/' },
              { name: 'Our Philosophy', path: '/about' },
              { name: 'Signature Services', path: '/services' },
              { name: 'Client Experience', path: '/testimonials' },
              { name: 'Clinical Journal', path: '/blog' },
              { name: 'Contact & Inquiry', path: '/contact' }
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
            <Clock size={12} className="text-muted-foreground" /> Hours
          </h4>
          <ul className="space-y-3.5 text-sm text-muted-foreground font-light">
            <li className="flex justify-between border-b border-border/30 pb-2">
              <span>Monday – Saturday</span>
              <span className="text-foreground">09:00 – 19:00</span>
            </li>
            <li className="flex justify-between border-b border-border/30 pb-2">
              <span>Sunday</span>
              <span className="text-foreground">10:00 – 15:00</span>
            </li>
            <li className="flex justify-between pb-1">
              <span>Emergencies</span>
              <span className="text-foreground font-medium italic">24/7 Registry</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h4 className="text-xs uppercase tracking-wider text-foreground font-semibold">
            The Clinic
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-light">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-muted-foreground shrink-0 mt-0.5" />
              <span>R-27, Block R, Greater Kailash-1,<br />New Delhi - 110048, India</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-muted-foreground shrink-0" />
              <div>
                <a href="tel:+919990509300" className="hover:text-foreground transition-colors block">+91 99905 09300</a>
                <a href="tel:01141001313" className="hover:text-foreground transition-colors block text-xs opacity-80">011-41001313</a>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-muted-foreground shrink-0" />
              <a href="mailto:care@arkdental.in" className="hover:text-foreground transition-colors">care@arkdental.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Copyright Area */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-light">
        <div>
          © {currentYear} Ark Dental Clinic. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Atelier</a>
          <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
