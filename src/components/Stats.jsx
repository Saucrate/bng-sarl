import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ImpactCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
    <div className="relative p-6 backdrop-blur-sm border border-[#D4AF37]/10 rounded-xl hover:border-[#D4AF37]/20 transition-colors">
      <div className="text-[#D4AF37] mb-4">{icon}</div>
      <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function Stats() {
  const { t } = useTranslation();
  
  const impactMetrics = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('stats.quality.title'),
      description: t('stats.quality.description')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: t('stats.distribution.title'),
      description: t('stats.distribution.description')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('stats.reliability.title'),
      description: t('stats.reliability.description')
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
            {t('stats.mainTitle')}
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impactMetrics.map((metric, index) => (
            <ImpactCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
} 