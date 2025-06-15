import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const companies = [
  {
    id: 'bng',
    name: 'BNG-SARL',
    logo: '/images/bng.png',
    products: [
      { id: 1, category: 'fresh', image: '/images/bng.png', price: '12.99' },
      { id: 2, category: 'frozen', image: '/images/bng.png', price: '10.99' },
      { id: 3, category: 'processed', image: '/images/bng.png', price: '8.99' },
    ]
  },
  {
    id: 'subsidiary',
    name: 'BNG Subsidiary',
    logo: '/images/subsidiary.png', // Use a placeholder or add your own
    products: [
      { id: 101, category: 'fresh', image: '/images/subsidiary.png', price: '11.99' },
      { id: 102, category: 'frozen', image: '/images/subsidiary.png', price: '9.99' },
      { id: 103, category: 'processed', image: '/images/subsidiary.png', price: '7.99' },
    ]
  }
];

export default function Products() {
  const { t } = useTranslation();
  const [selectedCompany, setSelectedCompany] = useState(companies[0].id);
  const company = companies.find(c => c.id === selectedCompany);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Elements */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#D4AF37]/5 to-black" />
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 0% 0%, #D4AF37 1px, transparent 1px),
            radial-gradient(circle at 100% 100%, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.05
        }} />
      </motion.div>

      {/* Side connecting lines */}
      <div className="fixed top-0 left-[15%] w-px h-full bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent" />
      <div className="fixed top-0 right-[15%] w-px h-full bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-light text-white mb-6 tracking-wide">
            {t('products.title')}
          </h1>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </motion.div>

        {/* Company Filter */}
        <div className="flex justify-center gap-6 mb-16">
          {companies.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCompany(c.id)}
              className={`px-8 py-3 rounded-lg text-lg font-serif transition-all duration-300 border-2 ${selectedCompany === c.id ? 'border-[#D4AF37] text-[#D4AF37] bg-black' : 'border-transparent text-gray-400 bg-black/40 hover:text-[#D4AF37] hover:border-[#D4AF37]/30'}`}
            >
              <img src={c.logo} alt={c.name} className="inline-block w-8 h-8 rounded-full mr-2 align-middle" />
              <span className="align-middle">{c.name}</span>
            </button>
          ))}
        </div>

        {/* Only show the selected company section */}
        <section key={company.id} className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]/30" />
            <h2 className="text-3xl font-serif text-[#D4AF37]">{company.name}</h2>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 gap-x-8 lg:grid-cols-3"
            >
              {company.products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                      className="relative h-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <img
                        src={product.image}
                        alt={t(`products.categories.${product.category}`)}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-light text-white tracking-wide">
                          {t(`products.categories.${product.category}`)}
                        </h3>
                        <div className="h-px w-12 bg-gradient-to-r from-[#D4AF37]/30 to-transparent group-hover:w-full transition-all duration-500" />
                        <p className="text-2xl font-light text-[#D4AF37]">
                          ${product.price}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-3 px-6 text-sm text-white tracking-wide relative group overflow-hidden rounded-lg"
                        >
                          <span className="relative z-10">{t('products.viewDetails')}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/50 opacity-10 group-hover:opacity-20 transition-opacity" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
} 