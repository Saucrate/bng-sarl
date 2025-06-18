import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Footer() {
<<<<<<< HEAD
  const { t } = useTranslation();
=======
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
>>>>>>> b36c0cc (Make address lines fully translatable in all languages and update Contact/Footer)

  const navigation = {
    main: [
      { name: t('nav.home'), href: '/' },
      { name: t('nav.about'), href: '/about' },
      { name: t('nav.products'), href: '/products' },
      { name: t('nav.contact'), href: '/contact' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
    ],
  };

  return (
<<<<<<< HEAD
    <footer className="relative bg-black">
      {/* Pre-footer decorative section */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="absolute inset-x-0 bottom-0">
          <svg
            className="w-full h-24 fill-current text-[#D4AF37] opacity-5"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
          </svg>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </div>

      {/* Main footer content */}
      <div className="relative">
        {/* Background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            background: `
              radial-gradient(circle at 0% 0%, #D4AF37 1px, transparent 1px),
              radial-gradient(circle at 100% 100%, #D4AF37 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.05
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        {/* Vertical connecting lines */}
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent" />
        <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo Section */}
            <motion.div
              className="col-span-1 md:col-span-2 lg:col-span-1"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <Link to="/" className="block relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative flex items-center">
                  <img
                    src="/images/bng (1).png"
                    alt="BNG SARL"
                    className="h-16 w-auto"
                  />
                  <div className="ml-4 h-16 w-px bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />
                </div>
              </Link>
              <div className="mt-6 space-y-4">
                <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('footer.slogan')}
                </p>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2 lg:col-span-2"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-[#D4AF37] text-sm font-light tracking-widest uppercase mb-6 relative">
                  <span className="relative">
                    {t('footer.navigation')}
                    <div className="absolute -bottom-2 left-0 w-12 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                  </span>
                </h3>
                <nav className="flex flex-col space-y-4">
                  {navigation.main.map((item) => (
                    <motion.div
                      key={item.name}
                      className="group relative overflow-hidden"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute left-0 bottom-0 w-0 h-px bg-[#D4AF37]/30 group-hover:w-full transition-all duration-300" />
                      <Link
                        to={item.href}
                        className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 py-1"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
              <div>
                <h3 className="text-[#D4AF37] text-sm font-light tracking-widest uppercase mb-6 relative">
                  <span className="relative">
                    {t('footer.contact')}
                    <div className="absolute -bottom-2 left-0 w-12 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                  </span>
                </h3>
                <nav className="flex flex-col space-y-4">
                  <div className="relative group">
                    <p className="text-gray-300">{t('footer.address1')}</p>
                    <div className="absolute left-0 bottom-0 w-0 h-px bg-[#D4AF37]/10 group-hover:w-full transition-all duration-300" />
                  </div>
                  <div className="relative group">
                    <p className="text-gray-300">{t('footer.address2')}</p>
                    <div className="absolute left-0 bottom-0 w-0 h-px bg-[#D4AF37]/10 group-hover:w-full transition-all duration-300" />
                  </div>
                  <motion.a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 relative group"
                    whileHover={{ x: 4 }}
                  >
                    <span>{t('footer.phone')}</span>
                    <div className="absolute left-0 bottom-0 w-0 h-px bg-[#D4AF37]/30 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                  <motion.a
                    href="mailto:info@bng-sarl.com"
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 relative group"
                    whileHover={{ x: 4 }}
                  >
                    <span>{t('footer.email')}</span>
                    <div className="absolute left-0 bottom-0 w-0 h-px bg-[#D4AF37]/30 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                </nav>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <h3 className="text-[#D4AF37] text-sm font-light tracking-widest uppercase mb-6 relative">
                <span className="relative">
                  {t('footer.followUs')}
                  <div className="absolute -bottom-2 left-0 w-12 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                </span>
              </h3>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200 relative group"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="sr-only">{item.name}</span>
                    <div className="absolute -inset-2 bg-[#D4AF37]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300" />
                    <item.icon className="h-6 w-6 relative" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 relative">
            <div className="absolute top-0 left-0 right-0">
              <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            </div>

            <div className="relative flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
                <span className="text-[#D4AF37] font-serif">BNG SARL</span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/30" />
              </div>
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} BNG-SARL. {t('footer.rights')}
=======
    <footer className="bg-black border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Address */}
          <div>
            <h3 className="text-lg font-serif text-[#D4AF37] mb-4">{t('footer.companyAddress.title')}</h3>
            <div className="space-y-2">
              <p className="text-gray-300" dir={isRTL ? 'rtl' : 'ltr'}>
                {t('footer.companyAddress.line1')}
              </p>
              <p className="text-gray-300" dir={isRTL ? 'rtl' : 'ltr'}>
                {t('footer.companyAddress.line1Local')}
              </p>
            </div>
          </div>

          {/* Boutique Address */}
          <div>
            <h3 className="text-lg font-serif text-[#D4AF37] mb-4">{t('footer.boutiqueAddress.title')}</h3>
            <div className="space-y-2">
              <p className="text-gray-300" dir={isRTL ? 'rtl' : 'ltr'}>
                {t('footer.boutiqueAddress.line1')}
              </p>
              <p className="text-gray-300" dir={isRTL ? 'rtl' : 'ltr'}>
                {t('footer.boutiqueAddress.line1Local')}
              </p>
            </div>
          </div>

          {/* Contact Numbers */}
          <div>
            <h3 className="text-lg font-serif text-[#D4AF37] mb-4">{t('footer.phoneNumbers.title')}</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-[#D4AF37]">{t('footer.phoneNumbers.dg')}:</span> {t('footer.phoneNumbers.dgNumber')}
              </p>
              <p className="text-gray-300">
                <span className="text-[#D4AF37]">{t('footer.phoneNumbers.commercial')}:</span> {t('footer.phoneNumbers.commercialNumber')}
>>>>>>> b36c0cc (Make address lines fully translatable in all languages and update Contact/Footer)
              </p>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="relative h-24">
            <svg
              className="absolute bottom-0 w-full h-24 fill-current text-[#D4AF37] opacity-5 transform rotate-180"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          </div>
=======
        <div className="mt-8 pt-8 border-t border-[#D4AF37]/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
>>>>>>> b36c0cc (Make address lines fully translatable in all languages and update Contact/Footer)
        </div>
      </div>
    </footer>
  );
} 