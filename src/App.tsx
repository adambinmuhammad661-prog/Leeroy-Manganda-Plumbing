import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Wrench, 
  Droplets, 
  Thermometer, 
  Zap, 
  Home, 
  Building2, 
  Menu, 
  X, 
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 'leak-detection',
    title: 'Leak Detection & Repair',
    description: 'Advanced techniques to find and fix hidden leaks before they cause major damage.',
    icon: <Droplets className="w-8 h-8 text-primary" />,
  },
  {
    id: 'drain-maintenance',
    title: 'Drain Installation & Maintenance',
    description: 'Expert drainlaying and cleaning to keep your systems flowing smoothly.',
    icon: <Wrench className="w-8 h-8 text-primary" />,
  },
  {
    id: 'pipe-installation',
    title: 'Pipe Installation & Repair',
    description: 'Quality piping solutions for new builds or old system upgrades.',
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
  {
    id: 'sanitaryware',
    title: 'Sanitaryware Installations',
    description: 'Professional fitting of toilets, sinks, baths, and showers with precision.',
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
  },
  {
    id: 'hot-water',
    title: 'Hot Water Systems',
    description: 'Installation and repair of geysers and solar hot water systems.',
    icon: <Thermometer className="w-8 h-8 text-primary" />,
  },
  {
    id: 'booster-pumps',
    title: 'Booster Pump Installations',
    description: 'Improve your water pressure with high-performance pump solutions.',
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
  {
    id: 'residential',
    title: 'Residential Plumbing',
    description: 'Reliable home plumbing services for families across Bulawayo.',
    icon: <Home className="w-8 h-8 text-primary" />,
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    description: 'Large-scale plumbing management for businesses and institutions.',
    icon: <Building2 className="w-8 h-8 text-primary" />,
  },
  {
    id: 'renovations',
    title: 'Home Renovation Plumbing',
    description: 'Transform your kitchen or bathroom with our expert plumbing design.',
    icon: <Wrench className="w-8 h-8 text-primary" />,
  },
  {
    id: 'trenching',
    title: 'Trench Digging & Drainage',
    description: 'Specialized earthworks for major drainage and pipe systems.',
    icon: <MapPin className="w-8 h-8 text-primary" />,
  },
];

const TESTIMONIALS = [
  {
    name: "Sibusiso Moyo",
    role: "Homeowner",
    text: "Leeroy fixed a major leak in our home that others couldn't find. Professional and very reliable.",
    stars: 5
  },
  {
    name: "Sarah Thompson",
    role: "Property Manager",
    text: "We use Leeroy for all our commercial maintenance. His 15 years of experience really shows in his work.",
    stars: 5
  },
  {
    name: "John Ncube",
    role: "Contractor",
    text: "The best drainlayer in Bulawayo. His trenching and pipework are always precise and on schedule.",
    stars: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = {
    phone: "0766663814",
    email: "leeroymanganda@gmail.com",
    whatsapp: "263766663814", // Assuming ZW country code
    address: "Bulawayo, Zimbabwe"
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Wrench className="text-white w-6 h-6" />
            </div>
            <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Leeroy Manganda
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="font-medium hover:text-primary transition-colors">Home</a>
            <a href="#services" className="font-medium hover:text-primary transition-colors">Services</a>
            <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
            <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20">
              Get Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
            >
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-center">
                Contact Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4 z-0" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-6">
              <Clock className="w-4 h-4" />
              24/7 Emergency Plumbing in Bulawayo
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-900">
              Expert Plumbing <br />
              <span className="text-primary">You Can Trust.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Professional journeyman plumber with 15+ years of experience. 
              Reliable installations, maintenance, and emergency repairs for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${contactInfo.phone}`} className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                <Phone className="w-5 h-5" />
                Call Now: {contactInfo.phone}
              </a>
              <a href="#contact" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">15+</span>
                <span className="text-sm font-medium">Years Exp.</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">500+</span>
                <span className="text-sm font-medium">Projects</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">100%</span>
                <span className="text-sm font-medium">Reliability</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Plumbing Work" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-slate-100">
              <div className="bg-green-100 p-3 rounded-full">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Fully Licensed</p>
                <p className="text-sm text-slate-500">Journeyman Plumber</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Comprehensive Plumbing Solutions</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From emergency leaks to major industrial installations, we provide high-quality workmanship across Bulawayo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="mb-6 bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <img 
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
              alt="Leeroy Manganda" 
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl z-20">
              <p className="text-4xl font-bold">15+</p>
              <p className="font-medium opacity-80">Years of Professional Experience</p>
            </div>
          </div>

          <div>
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Meet the Expert</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Leeroy Manganda</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I am a highly experienced journeyman plumber and drainlayer based in Bulawayo. With over 15 years in the industry, I have mastered both residential and commercial plumbing systems.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              My approach is simple: reliability, precision, and high-quality workmanship. Whether it's a small home repair or a large-scale commercial installation, I treat every project with the same level of professionalism.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Certified Journeyman Plumber",
                "Expert Drainlaying Specialist",
                "Residential & Commercial Experience",
                "Emergency 24/7 Support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all">
              Learn more about my services <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold tracking-wider uppercase text-sm mb-4 opacity-80">Testimonials</h2>
            <h3 className="text-4xl font-display font-bold mb-6">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 opacity-90">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm opacity-70">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Let's Get Started</h3>
            <p className="text-lg text-slate-600 mb-10">
              Have a plumbing emergency or planning a renovation? Get in touch today for a free, no-obligation quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-lg text-slate-600 hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-lg text-slate-600 hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Location</p>
                  <p className="text-lg text-slate-600">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="0712345678" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Leak Repair</option>
                  <option>Drain Maintenance</option>
                  <option>Installation</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us about your plumbing needs..."></textarea>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-2 rounded-lg">
                  <Wrench className="text-white w-6 h-6" />
                </div>
                <span className="font-display font-bold text-2xl tracking-tight">
                  Leeroy Manganda
                </span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Professional plumbing and drainlaying services in Bulawayo. 
                With 15+ years of experience, we provide reliable solutions for residential and commercial clients.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li>Leak Detection</li>
                <li>Drainlaying</li>
                <li>Pipe Repairs</li>
                <li>Hot Water Systems</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10 flex flex-col md:row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Leeroy Manganda Plumbing & Drainlaying Services. All rights reserved.
            </p>
            <div className="flex gap-6 grayscale opacity-50">
              <span className="text-xs font-bold tracking-widest uppercase">Bulawayo, Zimbabwe</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
