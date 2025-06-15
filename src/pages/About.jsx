import { useTranslation } from 'react-i18next';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Consistent animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }
};

const slideIn = (direction = 'left') => ({
  initial: { opacity: 0, x: direction === 'left' ? -50 : 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }
});

export default function About() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = Math.floor((window.scrollY / window.innerHeight) * 4);
      setActiveSection(section);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-black min-h-screen" ref={containerRef}>
      {/* Connecting Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Vertical Lines */}
        <motion.div
          style={{ scaleY: springScroll }}
          className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent origin-top"
        />
        <motion.div
          style={{ scaleY: springScroll }}
          className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent origin-top"
        />
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/10 via-black to-black" />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(45deg, #D4AF37 1px, transparent 1px), linear-gradient(-45deg, #D4AF37 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              opacity: 0.05
            }} />
          </div>

          <div className="relative px-4 text-center max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="mb-16 relative"
            >
              <div className="absolute -inset-4">
                <div className="w-full h-full bg-[#D4AF37]/20 blur-3xl rounded-full" />
              </div>
              <img
                src="/images/bng.png"
                alt="BNG SARL"
                className="relative w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#D4AF37]/30 shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="relative"
            >
              <h1 className="text-7xl md:text-8xl font-serif text-white mb-8 tracking-wider">
                {t('about.title')}
              </h1>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                {t('about.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section with Timeline */}
        <section className="min-h-screen flex items-center justify-center relative py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#D4AF37]/5 to-black" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-24"
            >
              <span className="text-[#D4AF37] text-lg font-light tracking-widest uppercase">{t('about.purposeTitle')}</span>
              <h2 className="text-5xl md:text-6xl font-serif text-white mt-4 mb-8">{t('about.missionTitle')}</h2>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#D4AF37]/50 to-transparent" />
              <div className="relative max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light text-center italic">
                  {t('about.mission')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="min-h-screen relative py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_rgba(0,0,0,0)_70%)] opacity-10" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-24"
            >
              <span className="text-[#D4AF37] text-lg font-light tracking-widest uppercase">{t('about.principlesTitle')}</span>
              <h2 className="text-5xl md:text-6xl font-serif text-white mt-4 mb-8">
                {t('about.values.title')}
              </h2>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {['quality', 'sustainability', 'innovation', 'integrity'].map((value, index) => (
                <motion.div
                  key={value}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={slideIn(index % 2 === 0 ? 'left' : 'right')}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent rounded-lg transition-all duration-700 group-hover:opacity-100" />
                  <div className="relative p-8 border border-[#D4AF37]/10 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mr-4">
                        <span className="text-[#D4AF37] text-2xl font-serif">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif text-white">
                        {t(`about.values.${value}`)}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed font-light pl-16">
                      {t(`about.values.${value}_desc`)}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="min-h-screen relative py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#D4AF37]/5 to-black" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideIn('left')}
                className="relative"
              >
                <div className="absolute -inset-4 bg-[#D4AF37]/5 rounded-lg blur-xl" />
                <div className="relative aspect-square">
                  <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-lg transform -rotate-6" />
                  <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-lg transform rotate-6" />
                  <img
                    src="/images/bng.png"
                    alt="Our Heritage"
                    className="relative rounded-lg w-full h-full object-cover shadow-2xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideIn('right')}
                className="relative"
              >
                <span className="text-[#D4AF37] text-lg font-light tracking-widest uppercase">{t('about.storyTitle')}</span>
                <h2 className="text-5xl md:text-6xl font-serif text-white mt-4 mb-8">{t('about.legacyTitle')}</h2>
                <div className="h-px w-32 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8" />
                <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
                  {t('about.excellenceQuote')}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-[#D4AF37]/30" />
                  <span className="text-[#D4AF37] italic">Est. 2023</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Artistic Footer */}
        <section className="min-h-[50vh] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 via-black to-transparent" />
            
            {/* Connecting patterns */}
            <div className="absolute inset-0" style={{
              background: `
                linear-gradient(45deg, #D4AF37 1px, transparent 1px),
                linear-gradient(-45deg, #D4AF37 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              opacity: 0.05
            }} />

            {/* Decorative lines */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            <div className="absolute left-[15%] top-0 h-32 w-px bg-gradient-to-b from-[#D4AF37]/30 to-transparent transform -skew-x-12" />
            <div className="absolute right-[15%] top-0 h-32 w-px bg-gradient-to-b from-[#D4AF37]/30 to-transparent transform skew-x-12" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative text-center"
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-xl" />
                  <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-full transform rotate-45" />
                  <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-full transform -rotate-45" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[#D4AF37] text-lg font-light tracking-widest uppercase">{t('about.excellenceDefined')}</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">{t('about.experienceExcellence')}</h2>
                </motion.div>

                <div className="flex justify-center items-center space-x-6">
                  <div className="w-16 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/30" />
                  <div className="w-16 h-px bg-gradient-to-l from-[#D4AF37]/30 to-transparent" />
                </div>

                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="max-w-2xl mx-auto"
                >
                  <p className="text-xl text-gray-300 font-light italic">
                    {t('about.excellenceQuote')}
                  </p>
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="pt-8"
                >
                  <div className="flex items-center justify-center space-x-8">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
                    <span className="text-[#D4AF37] font-serif">BNG SARL</span>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
                  </div>
                </motion.div>
              </div>

              {/* Bottom decorative elements */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="flex justify-between items-center">
                  <div className="w-1/3 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
                  <div className="w-8 h-8 relative">
                    <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-full" />
                    <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-full transform rotate-45" />
                  </div>
                  <div className="w-1/3 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/30" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side decorative elements */}
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
            <div className="absolute inset-0 border-l border-t border-[#D4AF37]/20 rounded-tl-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
            <div className="absolute inset-0 border-r border-t border-[#D4AF37]/20 rounded-tr-full" />
          </div>
        </section>
      </div>

      {/* Navigation Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-6">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.button
            key={index}
            className="group relative flex items-center"
            whileHover="hover"
          >
            <motion.span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === index ? 'bg-[#D4AF37] scale-150' : 'bg-gray-500'
              }`}
              whileHover={{ scale: 1.5 }}
            />
            <motion.span
              className="absolute right-full mr-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm"
            >
              {['Home', 'Mission', 'Values', 'Heritage', 'Excellence'][index]}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  );
} 