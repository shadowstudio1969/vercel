import React, { useState, useEffect } from 'react';
import { Play, Camera, Film, Instagram, Mail, Phone, MapPin, Sun, Moon, Heart, Youtube } from 'lucide-react';
import confetti from 'canvas-confetti';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.9 }
    });
  };

  return (
    <div className={`font-sans ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 dark:bg-black/90 backdrop-blur-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider">SHADOW STUDIO</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-widest ${activeSection === item ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <button 
              onClick={toggleDarkMode} 
              className="text-white p-2 rounded-full hover:bg-white/10 transition-colors mr-4"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="md:hidden">
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Wedding couple" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">SHADOW STUDIO</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-white mb-8 tracking-wide">Photography & Videography</p>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">Wedding Photography & Cinematic Videography Since 1969</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Play size={18} /> Watch Showreel
            </button>
            <a 
              href="https://www.youtube.com/@ShadowStudioProductions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Youtube size={18} /> Visit YouTube
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">OUR STORY</h2>
            <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Vintage camera" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-6">Capturing Moments Since 1969</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                For over five decades, Shadow Studio has been immortalizing the most precious moments of couples across India. What started as a small photography studio in Dhanbad has grown into one of the most sought-after wedding photography and videography services in the country.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our approach combines timeless elegance with modern cinematic techniques, creating wedding films and photographs that tell your unique love story. With an eye for detail and a passion for authentic storytelling, we've documented thousands of weddings, each with its own beautiful narrative.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center bg-zinc-900/50 p-6 rounded-2xl">
                  <Camera size={32} className="mb-2" />
                  <h4 className="text-xl font-medium mb-1">5000+</h4>
                  <p className="text-gray-400 text-sm">Weddings Captured</p>
                </div>
                <div className="flex flex-col items-center bg-zinc-900/50 p-6 rounded-2xl">
                  <Film size={32} className="mb-2" />
                  <h4 className="text-xl font-medium mb-1">50+</h4>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">OUR SERVICES</h2>
            <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive wedding photography and videography services tailored to your unique story.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 backdrop-blur-sm rounded-3xl shadow-xl">
              <div className="text-white mb-4 bg-zinc-800/50 p-4 inline-block rounded-2xl">
                <Camera size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Wedding Photography</h3>
              <p className="text-gray-300 mb-6">
                Our photographers capture every emotion, every glance, and every detail of your special day with artistic precision.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Pre-wedding photoshoots
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Engagement ceremonies
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Wedding day coverage
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Post-wedding sessions
                </li>
              </ul>
            </div>
            <div className="bg-black/50 p-8 backdrop-blur-sm rounded-3xl shadow-xl">
              <div className="text-white mb-4 bg-zinc-800/50 p-4 inline-block rounded-2xl">
                <Film size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cinematic Videography</h3>
              <p className="text-gray-300 mb-6">
                Our cinematic approach transforms your wedding into a beautiful film that tells your unique love story.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Teaser films
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Highlight reels
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Full ceremony coverage
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Documentary-style films
                </li>
              </ul>
            </div>
            <div className="bg-black/50 p-8 backdrop-blur-sm rounded-3xl shadow-xl">
              <div className="text-white mb-4 bg-zinc-800/50 p-4 inline-block rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.7-1.8 1.7-3s-.7-2.4-1.7-3c.3-1.2 0-2.5-1-3.4-.8-.8-2.1-1.2-3.3-1-.6-1-1.8-1.6-3-1.6Z"></path>
                  <path d="M12 9v6"></path>
                  <path d="M15 12H9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Premium Packages</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive packages that combine our photography and videography services for complete coverage.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Multiple photographers & videographers
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Drone Coverage
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Same-day edits
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Premium photo albums
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">OUR WORK</h2>
            <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Browse through our collection of wedding films and photographs that showcase our cinematic style.
            </p>
          </div>
          
          {/* Video Showcase */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Featured Films</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ZO00Vo_HbX4?si=x6Ei9BMcz1svAIXm" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video bg-zinc-800 flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/40fUw15L72g?si=elyLP4e8b9Pv9aC7" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Photo Gallery */}
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Photography Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wedding photography" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wedding photography" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wedding photography" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wedding photography" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"    alt="Wedding photography" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1507217633297-c9815ce2ac2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wedding photography" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wedding photography" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wedding photography" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">TESTIMONIALS</h2>
            <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              What our clients say about their experience with Shadow Studio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 backdrop-blur-sm rounded-3xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">Priya & Rahul</h4>
                  <p className="text-gray-400 text-sm">Delhi</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Shadow Studio captured our wedding day perfectly. The photographs are stunning and the cinematic film brought tears to our eyes. They were professional, creative, and made us feel completely at ease."
              </p>
            </div>
            <div className="bg-black/50 p-8 backdrop-blur-sm rounded-3xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">Ananya & Vikram</h4>
                  <p className="text-gray-400 text-sm">Mumbai</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "We couldn't be happier with our decision to choose Shadow Studio. Their attention to detail and ability to capture genuine emotions is unmatched. The team was incredibly accommodating and delivered beyond our expectations."
              </p>
            </div>
            <div className="bg-black/50 p-8 backdrop-blur-sm rounded-3xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">Meera & Arjun</h4>
                  <p className="text-gray-400 text-sm">Bangalore</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Shadow Studio's work is truly cinematic art. They have a gift for storytelling through their lens. Our wedding film feels like a movie, and we've received countless compliments on our photographs. Worth every penny!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">BOOK YOUR DATE</h2>
            <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Ready to have your special day captured by Shadow Studio? Contact us directly to check availability and discuss your requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">Call Us For Bookings</h3>
                <p className="text-gray-300 mb-8">
                  Speak directly with our team to discuss your wedding photography and videography needs.
                </p>
              </div>
              <a 
                href="tel:9334896170" 
                className="flex items-center justify-center gap-3 bg-white text-black font-bold text-xl py-6 px-10 rounded-full hover:bg-gray-200 transition-colors w-full max-w-md mb-8 shadow-lg"
              >
                <Phone size={24} />
                <span>9334896170</span>
              </a>
              <p className="text-gray-400 text-center mt-4">
                Available Monday - Friday: 10:00 AM - 7:00 PM<br />
                Saturday: 10:00 AM - 5:00 PM<br />
                Sunday: By Appointment Only
              </p>
            </div>
            <div className="text-white bg-zinc-900/30 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 p-2 bg-zinc-800/50 rounded-full" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">9334896170</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 p-2 bg-zinc-800/50 rounded-full" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-300">shadow.studio1969gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 p-2 bg-zinc-800/50 rounded-full" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-300">Dhanbad, Jharkhand</p>
                    <p className="text-gray-400 mt-1">Available for bookings across India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Instagram className="mr-4 mt-1 p-2 bg-zinc-800/50 rounded-full" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Instagram</h4>
                    <p className="text-gray-300">@shadowstudio1969</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 bg-zinc-800/30 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white">By Appointment Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-white text-xl font-bold tracking-wider mb-2">SHADOW STUDIO</h2>
              <p className="text-gray-400">Wedding Photography & Cinematic Videography Since 1969</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/shadowstudioproductions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors bg-zinc-900/50 p-3 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@ShadowStudioProductions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors bg-zinc-900/50 p-3 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 flex items-center justify-center">
              <button onClick={triggerConfetti} className="inline-flex items-center">
                <Heart size={18} className="text-red-500 mr-2" fill="red" />
              </button>
              © 2025 Shadow Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;