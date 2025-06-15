import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const position = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = position / maxScroll;
        setScrollPosition(scrollPercentage);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const parallaxY = useTransform(springScroll, [0, 1], ['0%', '100%']);
  const opacity = useTransform(springScroll, [0, 0.5], [1, 0]);
  const scale = useTransform(springScroll, [0, 0.5], [1, 1.2]);

  const words = [
    t('home.hero.word1'),
    t('home.hero.word2'),
    t('home.hero.word3'),
    t('home.hero.word4')
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Initial Loading Animation */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-24 h-24 rounded-full border-2 border-[#D4AF37]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: isMobile
              ? `radial-gradient(circle at 50% ${50 + scrollPosition * 50}%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)`
              : `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)`
          }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '40px 40px' : '60px 60px',
          opacity: 0.2
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale, opacity }}
        >
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ y: parallaxY }}
          >
            <motion.img
              src="/images/bng.png"
              alt="BNG SARL"
              className="w-full h-full object-cover opacity-50"
              style={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </motion.div>
        </motion.div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37] to-transparent"
            style={{ scaleY: springScroll }}
          />
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37] to-transparent"
            style={{ scaleY: springScroll }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <div className="relative min-h-[2em] md:min-h-[1.5em] flex items-center justify-center mb-8">
                <motion.h1
                  key={currentWord}
                  initial={{ 
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{ 
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{ 
                    y: -50,
                    opacity: 0,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    duration: 0.75
                  }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white tracking-wider"
                  style={{ 
                    WebkitTextStroke: isMobile ? '0.5px rgba(212, 175, 55, 0.3)' : '1px rgba(212, 175, 55, 0.3)',
                  }}
                >
                  {words[currentWord]}
                </motion.h1>
              </div>
            </AnimatePresence>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8 md:mb-12"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-4 md:px-0"
            >
              {t('home.hero.subtitle')}
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => {
            const valuesSection = document.querySelector('#values-section');
            valuesSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="group"
          >
            <ChevronDownIcon className="h-8 w-8 text-[#D4AF37] opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>
          <div className="mt-4 h-12 w-px bg-gradient-to-b from-[#D4AF37] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* Values Section */}
      <section id="values-section" className="relative min-h-screen py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_60%)] opacity-10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <span className="text-[#D4AF37] text-lg font-light tracking-[0.2em] uppercase">{t('home.values.title')}</span>
            <h2 className="mt-6 text-5xl md:text-6xl font-serif text-white tracking-wider">
              {t('home.values.excellence')}
            </h2>
            <div className="mt-8 h-px w-40 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {['quality', 'reliability', 'service'].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-black/30 p-8 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="w-16 h-16 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-8"
                    >
                      <svg
                        className="h-8 w-8 text-[#D4AF37]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>

                    <motion.h3
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-serif text-white mb-4"
                    >
                      {t(`home.values.${value}`)}
                    </motion.h3>

                    <p className="text-gray-400 leading-relaxed font-light">
                      {t(`home.values.${value}_desc`)}
                    </p>

                    <div className="mt-6 h-px w-12 bg-gradient-to-r from-[#D4AF37]/30 to-transparent group-hover:w-full transition-all duration-700" />
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16">
                    <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />
                    <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16">
                    <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-[#D4AF37]/30 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-8 h-px bg-gradient-to-l from-[#D4AF37]/30 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#D4AF37]/5 to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { number: t('home.stats.years'), label: t('home.stats.yearsLabel') },
              { number: t('home.stats.clients'), label: t('home.stats.clientsLabel') },
              { number: t('home.stats.support'), label: t('home.stats.supportLabel') }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-[#D4AF37]/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <h3 className="text-6xl font-serif text-white mb-4">{stat.number}</h3>
                  <div className="h-px w-12 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:w-24 transition-all duration-700" />
                  <p className="mt-4 text-lg text-gray-400 font-light tracking-wide">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 