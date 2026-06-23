import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Activity } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30 pt-20 pb-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16">
        {/* Brand Block */}
        <div className="space-y-6">
          <Link 
            to="/" 
            className="flex items-center gap-3 select-none cursor-pointer hover:opacity-90 transition-opacity mb-2"
          >
            <div className="bg-primary/10 p-2 rounded-xl text-primary">
              <Activity size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground leading-none">
                Suraksha
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium">
                Multispeciality Clinic
              </span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-light">
            We provide utmost care and treatment with proper diagnosis. Your trusted family healthcare partner in Bengaluru.
          </p>
          <div className="flex gap-4 pt-2">
            {['Facebook', 'Instagram', 'Practo'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-0.5 group"
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
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Testimonials', path: '/testimonials' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-light"
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
            <Clock size={12} className="text-primary" /> Hours
          </h4>
          <ul className="space-y-3.5 text-sm text-muted-foreground font-light">
            <li className="flex justify-between border-b border-border/50 pb-2">
              <span>Monday – Sunday</span>
              <span className="text-foreground font-medium">8:00 AM – 10:00 PM</span>
            </li>
            <li className="flex justify-between pb-1 text-xs">
              <span className="text-primary font-medium italic">Available Every Day</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h4 className="text-xs uppercase tracking-wider text-foreground font-semibold">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-light">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
              <span>2nd Cross Rd, Arekere,<br />Bengaluru, Karnataka, India</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-primary shrink-0" />
              <div>
                <a href="tel:+918105200448" className="hover:text-primary transition-colors block font-medium">+91 81052 00448</a>
                <a href="https://wa.me/918105200448" className="hover:text-[#25D366] text-[#25D366] transition-colors block text-xs font-medium mt-1">WhatsApp Us</a>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:info.surakshaclinic@gmail.com" className="hover:text-primary transition-colors">info.surakshaclinic@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Copyright Area */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-light">
        <div>
          © {currentYear} Suraksha Multispeciality Clinic. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
