import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToCards = () => {
    const element = document.getElementById('cards-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-blob rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-blob rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 gradient-blob rounded-full animate-gradient-shift opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold font-chinese text-gray-800 leading-tight"
            >
              我最喜爱的
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI 产品
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-lg leading-relaxed"
            >
              探索改变我们工作和生活方式的人工智能产品，
              分享使用体验与优化建议
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('[data-card-export]');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-gray-700 shadow-md hover:bg-blue-50 hover:text-blue-700 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                产品体验
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('issues');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-gray-700 shadow-md hover:bg-orange-50 hover:text-orange-700 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                问题分析
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('optimizations');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-gray-700 shadow-md hover:bg-green-50 hover:text-green-700 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                优化建议
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Geometric Figure */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-80 h-80 relative"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full opacity-60"></div>
              
              {/* Middle Ring */}
              <div className="absolute inset-8 border-4 border-purple-200 rounded-full opacity-80"></div>
              
              {/* Inner Circle */}
              <div className="absolute inset-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-white text-6xl font-bold">AI</div>
              </div>
              
              {/* Floating Dots */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-pink-500 rounded-full transform -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-4 h-4 bg-indigo-500 rounded-full transform -translate-y-1/2"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToCards}
            className="flex flex-col items-center space-y-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 float-gentle"
            aria-label="向下滚动查看内容"
          >
            <span className="text-sm font-medium">向下滚动</span>
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

