import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-morphism shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Site Title */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gray-800"
          >
            AI 产品展示
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => {
                const element = document.querySelector('[data-card-export]');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              aria-label="跳转到产品体验部分"
            >
              产品体验
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('issues');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              aria-label="跳转到问题分析部分"
            >
              问题分析
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('optimizations');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              aria-label="跳转到优化建议部分"
            >
              优化建议
            </button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

