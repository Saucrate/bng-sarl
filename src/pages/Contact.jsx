import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const LuxuryChicken = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-48 h-48 mx-auto mb-12"
    >
      <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full animate-pulse-slow" />
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transform-gpu"
        style={{ filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: '#D4AF37', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 0.6 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Stylized Chicken Shape */}
        <motion.path
          d="M50 20
             C60 20, 70 25, 75 35
             C80 45, 80 55, 75 65
             C70 75, 60 80, 50 80
             C40 80, 30 75, 25 65
             C20 55, 20 45, 25 35
             C30 25, 40 20, 50 20
             Z"
          fill="url(#goldGradient)"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Animated Details */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <circle cx="45" cy="40" r="3" fill="#111" className="animate-blink" />
          <path
            d="M55 45 Q60 47, 65 45"
            stroke="#D4AF37"
            strokeWidth="2"
            fill="none"
          />
        </motion.g>
      </svg>
      
      {/* Rotating Border */}
      <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20 animate-spin-slow" />
      <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/10 animate-spin-reverse" />
    </motion.div>
  );
};

export default function Contact() {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const isRTL = i18n.language === 'ar';

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#D4AF37]/5 to-black" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.02) 49%, rgba(212, 175, 55, 0.02) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.02) 49%, rgba(212, 175, 55, 0.02) 51%, transparent 52%)
          `,
          backgroundSize: '60px 60px, 60px 60px, 30px 30px, 30px 30px'
        }} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-light text-white mb-6 tracking-wide">
            {t('contact.title')}
          </h1>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Company Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-[#D4AF37]/30"
          >
            <h2 className="text-2xl font-serif text-[#D4AF37] mb-6">{t('contact.companyAddress.title')}</h2>
            <div className="space-y-4">
              <p className="text-white text-lg" dir={isRTL ? 'rtl' : 'ltr'}>
                {t('contact.companyAddress.line1')}
              </p>
              <p className="text-white text-lg" dir={isRTL ? 'rtl' : 'ltr'}>
                {t('contact.companyAddress.line1Local')}
              </p>
            </div>
          </motion.div>

          {/* Boutique Address */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-[#D4AF37]/30"
          >
            <h2 className="text-2xl font-serif text-[#D4AF37] mb-6">{t('contact.boutiqueAddress.title')}</h2>
            <div className="space-y-4">
              <p className="text-white text-lg" dir={isRTL ? 'rtl' : 'ltr'}>
                {t('contact.boutiqueAddress.line1')}
              </p>
              <p className="text-white text-lg" dir={isRTL ? 'rtl' : 'ltr'}>
                {t('contact.boutiqueAddress.line1Local')}
              </p>
            </div>
          </motion.div>

          {/* Contact Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-[#D4AF37]/30"
          >
            <h2 className="text-2xl font-serif text-[#D4AF37] mb-6">{t('contact.phoneNumbers.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-white text-lg">
                  <span className="text-[#D4AF37]">{t('contact.phoneNumbers.dg')}:</span> {t('contact.phoneNumbers.dgNumber')}
                </p>
              </div>
              <div>
                <p className="text-white text-lg">
                  <span className="text-[#D4AF37]">{t('contact.phoneNumbers.commercial')}:</span> {t('contact.phoneNumbers.commercialNumber')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Add these styles to your CSS
const styles = `
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes pulse-slow {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}

@keyframes blink {
  0%, 90%, 100% {
    transform: scaleY(1);
  }
  95% {
    transform: scaleY(0.1);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 15s linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-blink {
  animation: blink 4s infinite;
}
`; 