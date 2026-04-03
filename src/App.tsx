/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Battery, 
  MapPin, 
  Phone, 
  Calendar, 
  ChevronRight, 
  ChevronLeft,
  Star,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

// Brand Constants
const BRAND = {
  name: "ION",
  logo: "https://ioncostarica.com/wp-content/uploads/2024/04/Logo-ION-color.png",
  primary: "#01547E",
  accent: "#414A53",
};

const FEATURES = [
  {
    title: "Specialized EV Diagnostics",
    description: "Advanced software analysis specifically designed for Tesla, BYD, and other leading EV brands.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Battery Health Optimization",
    description: "Extend your vehicle's range and lifespan with our proprietary cell balancing and cooling service.",
    icon: <Battery className="w-6 h-6" />,
  },
  {
    title: "Precision Body Work",
    description: "Expert structural repairs using manufacturer-approved techniques for aluminum and composite frames.",
    icon: <Wrench className="w-6 h-6" />,
  }
];

const TESTIMONIALS = [
  {
    name: "Roberto Gomez",
    role: "Tesla Model 3 Owner",
    content: "The only place in Costa Rica I trust with my EV. Their technical knowledge is unmatched.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "BYD Han Owner",
    content: "Excellent service and very professional. They explained everything about my battery health clearly.",
    rating: 5
  },
  {
    name: "Marco Vinicio",
    role: "Audi e-tron Owner",
    content: "Fast, reliable, and they really understand the nuances of electric drivetrains.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-primary/20">
      {/* Liquid Glass Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="liquid-blob w-96 h-96 bg-primary/20 top-[-10%] left-[-5%] animation-delay-2000" />
        <div className="liquid-blob w-[500px] h-[500px] bg-blue-200/30 bottom-[-10%] right-[-5%] animation-delay-4000" />
        <div className="liquid-blob w-80 h-80 bg-cyan-100/40 top-[40%] right-[20%]" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img src={BRAND.logo} alt={BRAND.name} className="h-10 object-contain" referrerPolicy="no-referrer" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-accent hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-accent hover:text-primary transition-colors">About</a>
            <a href="#locations" className="text-sm font-medium text-accent hover:text-primary transition-colors">Locations</a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
              Book Service
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden"
            >
              <a href="#services" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#locations" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Locations</a>
              <button className="bg-primary text-white px-6 py-3 rounded-full text-center font-semibold">
                Book Service
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              Costa Rica's #1 EV Specialist
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-[1.1] mb-8">
              We Treat You & Your <span className="text-primary">EV Like Family</span>
            </h1>
            <p className="text-lg text-secondary max-w-lg mb-10 leading-relaxed">
              Expert maintenance, body shop, and battery optimization for the next generation of mobility. Specialized in Tesla, BYD, and premium electric brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-95 group">
                Schedule Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-gray-200 text-accent px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
                Our Services
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image - Top Down Car Aesthetic */}
            <div className="relative z-10 glass-card rounded-[40px] p-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000" 
                alt="Electric Vehicle Top Down" 
                className="w-full h-auto rounded-[32px] shadow-inner"
                referrerPolicy="no-referrer"
              />
              
              {/* Hotspots inspired by screenshot */}
              <div className="absolute top-[20%] left-[30%] group">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 cursor-pointer" />
                <div className="absolute left-6 top-0 glass-card p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity w-48 pointer-events-none">
                  <p className="text-xs font-bold text-primary mb-1">Battery Pack</p>
                  <p className="text-[10px] text-accent leading-tight">Full thermal management and cell balancing diagnostics.</p>
                </div>
              </div>

              <div className="absolute bottom-[30%] right-[25%] group">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 cursor-pointer" />
                <div className="absolute right-6 top-0 glass-card p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity w-48 pointer-events-none">
                  <p className="text-xs font-bold text-primary mb-1">Drivetrain</p>
                  <p className="text-[10px] text-accent leading-tight">Precision motor alignment and inverter health checks.</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-3xl z-20 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1,200+</p>
                  <p className="text-xs text-secondary font-medium uppercase tracking-wider">EVs Serviced</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 bg-gray-50/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Your One-Stop Shop for EV Care</h2>
            <p className="text-secondary text-lg">From routine maintenance to complex structural repairs, we are equipped with the latest technology to keep your electric vehicle performing at its peak.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-[32px] bg-white group transition-all"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-secondary leading-relaxed mb-6">{feature.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Trusted by the EV Community</h2>
              <p className="text-secondary">Join hundreds of satisfied owners who have made ION their primary service center in Costa Rica.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="absolute inset-0 glass-card p-12 rounded-[40px] flex flex-col justify-center"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-2xl font-medium text-accent italic mb-8">
                  "{TESTIMONIALS[currentTestimonial].content}"
                </p>
                <div>
                  <p className="font-bold text-lg">{TESTIMONIALS[currentTestimonial].name}</p>
                  <p className="text-secondary text-sm">{TESTIMONIALS[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto glass-card bg-primary rounded-[48px] p-12 lg:p-24 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to Give Your EV <br />the Care it Deserves?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              Book your diagnostic appointment today and experience the highest standard of electric vehicle maintenance in Central America.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
                Book Your Service Now
              </button>
              <button className="bg-primary-dark/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <img src={BRAND.logo} alt={BRAND.name} className="h-12 mb-8" referrerPolicy="no-referrer" />
              <p className="text-secondary max-w-sm mb-8">
                The first specialized workshop for electric vehicles in Costa Rica. Leading the transition to sustainable mobility with expert care and advanced technology.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Body Shop</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Diagnostics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Locations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 gap-4">
            <p className="text-secondary text-sm">© 2026 ION Costa Rica. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-secondary">
              <Zap className="w-4 h-4 text-primary" />
              Powered by Clean Energy
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform">
          <Calendar className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
