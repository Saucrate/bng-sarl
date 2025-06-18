import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const companies = [
  {
    id: 'bng',
    name: 'HASTAVUK',
    logo: '/images/hastavuk.png',
    video: '/videos/Hastavuk.mp4',
    products: [
      { 
        id: 1, 
        category: 'frozen', 
        image: '/images/pic11.jpg', 
        detailImage: '/images/pic7.jpg',
        description: 'Premium quality fresh products, carefully selected and harvested at peak ripeness.' 
      }
    ]
  },
  {
    id: 'subsidiary',
    name: 'ERPILIC',
    logo: '/images/erpilic.png',
    video: '/videos/Erpilic.mp4',
    products: [
      { id: 101, category: 'fresh', image: '/images/pic1.jpg', description: 'Farm-fresh products delivered directly to your table.' },
      { id: 102, category: 'frozen', image: '/images/pic9.jpg', description: 'Premium frozen products for your convenience.' },
      { id: 103, category: 'processed', image: '/images/pic3.jpg', description: 'Carefully processed products with attention to detail.' },
      { id: 104, category: 'processed', image: '/images/pic4.jpg', description: 'High-quality processed products for your needs.' },
      { id: 105, category: 'processed', image: '/images/pic5.jpg', description: 'Expertly crafted processed products.' },
      { id: 106, category: 'Quarter', image: '/images/pic6.jpg', description: 'Whole chickens are placed in paper boxes; number of carcasses in each box depends on the weight of the chickens.' },
      { id: 107, category: 'processed', image: '/images/pic8.jpg', description: 'Quality processed products for your table.' },
      { id: 108, category: 'frozen', image: '/images/pic10.jpg', description: ' Carcasses without the viscera and the neck are polybagged and placed in paper boxes.' },
    ]
  }
];

export default function Products() {
  const { t } = useTranslation();
  const [selectedCompany, setSelectedCompany] = useState(companies[0].id);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const videoRef = useRef(null);
  const company = companies.find(c => c.id === selectedCompany);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    // Start playing the video when the component mounts or company changes
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to beginning
      videoRef.current.play();
    }

    // Add event listener for when video ends
    const handleVideoEnd = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd);
    }

    // Cleanup function to stop the video when component unmounts
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [selectedCompany]); // Add selectedCompany as dependency

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
          
          {/* Company Video */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <video 
              ref={videoRef}
              className="w-full aspect-video object-cover"
              autoPlay
              playsInline
              poster={company.products[0]?.image}
            >
              <source src={company.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
                      
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border border-[#D4AF37]/30 rounded-xl max-w-4xl w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-square">
                  <img
                    src={selectedProduct.detailImage}
                    alt={t(`products.categories.${selectedProduct.category}`)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-serif text-[#D4AF37] mb-4">
                    {t(`products.categories.${selectedProduct.category}`)}
                  </h3>
                  <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37]/30 to-transparent mb-6" />
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedProduct.description}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-8 py-3 rounded-lg text-white border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors"
                  >
                    {t('Close')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 