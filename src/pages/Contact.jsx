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
  const { t } = useTranslation();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-7xl font-serif text-white mb-6 tracking-wider">
            {t('contact.title')}
          </h1>
          <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto">
            {t('contact.intro')}
          </p>
        </motion.div>

        {/* Luxury Chicken Animation */}
        <LuxuryChicken />

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden backdrop-blur-sm border border-[#D4AF37]/10">
            <div className="p-8 bg-black/40">              
              <div className="space-y-8">
                {[
                  {
                    icon: <MapPinIcon className="h-6 w-6" />,
                    label: t('contact.info.visitUs'),
                    content: t('contact.info.address'),
                    href: 'https://maps.google.com',
                    description: t('contact.info.headquarters')
                  },
                  {
                    icon: <PhoneIcon className="h-6 w-6" />,
                    label: t('contact.info.callUs'),
                    content: t('contact.info.phone'),
                    href: 'tel:+1234567890',
                    description: t('contact.info.hours')
                  },
                  {
                    icon: <EnvelopeIcon className="h-6 w-6" />,
                    label: t('contact.info.emailUs'),
                    content: t('contact.info.email'),
                    href: 'mailto:info@bng-sarl.com',
                    description: t('contact.info.response')
                  }
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="group flex items-start gap-6 p-6 rounded-lg hover:bg-[#D4AF37]/5 transition-all duration-300"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-[#D4AF37] mb-1 font-serif">{item.label}</p>
                      <p className="text-xl text-white font-light mb-2">{item.content}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-[#D4AF37]/30 group-hover:text-[#D4AF37] ml-auto transform group-hover:translate-x-1 transition-all self-center" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-[#D4AF37]/70 mb-4">{t('contact.social.followUs')}</p>
            <div className="flex justify-center gap-6">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                >
                  {t(`contact.social.${social}`)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
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