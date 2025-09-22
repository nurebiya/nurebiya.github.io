import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

// Card switching component with Swiper for vertical full-page scrolling
const CardSlider = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!swiperInstance) return;
      
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        swiperInstance.slidePrev();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        swiperInstance.slideNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [swiperInstance]);

  const swiperConfig = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: {
      enabled: true,
      sensitivity: 1,
      thresholdDelta: 50,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    speed: 600,
    modules: [Mousewheel, Keyboard, Pagination],
    onSwiper: setSwiperInstance,
    onSlideChange: (swiper) => setActiveIndex(swiper.activeIndex),
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} progress-dot"></span>`;
      },
    },
  };

  return (
    <section id="cards-section" className="relative">
      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
        {cards.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => swiperInstance?.slideTo(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === activeIndex
                ? 'bg-blue-600 border-blue-600 scale-125'
                : 'bg-transparent border-gray-400 hover:border-blue-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`跳转到第${index + 1}张卡片`}
          />
        ))}
        <div className="text-xs text-gray-500 text-center mt-2">
          {activeIndex + 1}/{cards.length}
        </div>
      </div>

      {/* Swiper Container */}
      <Swiper
        {...swiperConfig}
        className="h-screen"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-4xl"
              >
                {card}
              </motion.div>
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <div className="swiper-pagination !bottom-8 !left-1/2 !transform !-translate-x-1/2"></div>
    </section>
  );
};

export default CardSlider;

