import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Scroll to Top navigation helper for seamless luxury transitions
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openModal = () => setIsAppointmentModalOpen(true);
  const closeModal = () => setIsAppointmentModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans antialiased selection:bg-white selection:text-black">
      {/* Scroll Reset Trigger */}
      <ScrollToTop />

      {/* Global Glassmorphic Sticky Header */}
      <Navbar onOpenAppointmentModal={openModal} />

      {/* Main Pages Mount Area */}
      <main className="flex-1 w-full relative">
        <Routes>
          <Route path="/" element={<Home onOpenAppointmentModal={openModal} />} />
          <Route path="/about" element={<About onOpenAppointmentModal={openModal} />} />
          <Route path="/services" element={<Services onOpenAppointmentModal={openModal} />} />
          <Route path="/testimonials" element={<Testimonials onOpenAppointmentModal={openModal} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Global Minimalist Editorial Footer */}
      <Footer />

      {/* Global consultation booking overlay */}
      <AppointmentModal isOpen={isAppointmentModalOpen} onClose={closeModal} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
