import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white/95 backdrop-blur-sm font-poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <Coffee className="w-6 h-6 text-[#8B6F47]" />
            <span className="text-xl font-semibold text-[#3E2723]">Cozy Corner</span>
          </motion.div>

          <nav className="items-center hidden gap-8 md:flex">
            {['Menu', 'Location', 'Gallery', 'Reviews'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#5D4037] hover:text-[#8B6F47] transition-colors duration-300 font-medium"
              >
                {item}
              </motion.button>
            ))}
          </nav>

          <button
            className="md:hidden text-[#3E2723]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pb-4 md:hidden"
          >
            {['Menu', 'Location', 'Gallery', 'Reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-[#5D4037] hover:text-[#8B6F47] transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;