import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
  { code: 'tr', name: 'Türkçe' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.products'), href: '/products' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <Disclosure as="nav" 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {({ open }) => (
        <>
          {/* Top connecting line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          
          {/* Side connecting lines */}
          <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />
          <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="flex h-16 justify-between items-center">
              <div className="flex">
                <motion.div
                  className="flex flex-shrink-0 items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/" 
                    className="flex items-center relative group outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <img
                      src="/images/bng (1).png"
                      alt="BNG SARL"
                      className="h-10 w-auto relative"
                    />
                  </Link>
                </motion.div>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="relative group"
                  >
                    <Link
                      to={item.href}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg ${
                        isScrolled ? 'text-gray-300' : 'text-white'
                      } hover:text-[#D4AF37] transition-colors duration-300`}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.div>
                ))}
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <Menu.Button 
                    className={`flex rounded-full p-1 outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                      isScrolled ? 'text-gray-300' : 'text-white'
                    } hover:text-[#D4AF37] transition-colors duration-300 relative group`}
                  >
                    <div className="absolute -inset-2 bg-[#D4AF37]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300" />
                    <GlobeAltIcon className="h-6 w-6 relative" />
                  </Menu.Button>
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black/90 backdrop-blur-sm py-1 shadow-lg ring-1 ring-[#D4AF37]/10">
                      {languages.map((lang) => (
                        <Menu.Item key={lang.code}>
                          {({ active }) => (
                            <button
                              className={`block px-4 py-2 text-sm w-full text-left outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                                i18n.language === lang.code
                                  ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                                  : 'text-gray-300'
                              } ${active ? 'bg-[#D4AF37]/5' : ''} hover:bg-[#D4AF37]/5 hover:text-[#D4AF37] transition-colors duration-300`}
                              onClick={() => i18n.changeLanguage(lang.code)}
                            >
                              {lang.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button 
                  className={`inline-flex items-center justify-center rounded-md p-2 outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    isScrolled ? 'text-gray-300' : 'text-white'
                  } hover:text-[#D4AF37] transition-colors duration-300 relative group`}
                >
                  <div className="absolute -inset-2 bg-[#D4AF37]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 relative" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 relative" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2 bg-black/90 backdrop-blur-sm">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37] transition-colors duration-300 outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="border-t border-[#D4AF37]/10 pt-4 pb-3">
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`block w-full px-4 py-2 text-left text-base font-medium outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                        i18n.language === lang.code
                          ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                          : 'text-gray-300'
                      } hover:bg-[#D4AF37]/5 hover:text-[#D4AF37] transition-colors duration-300`}
                      onClick={() => i18n.changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 