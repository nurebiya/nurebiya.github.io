import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

// Individual product card component
const ProductCard = ({ title, description, ahamoment, bulletPoints, cardNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-3xl card-shadow p-8 lg:p-12 max-w-4xl mx-auto"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-gray-800 font-chinese"
          >
            {title}
          </motion.h2>
          {title === '语鲸' && (
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://lingowhale.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
              aria-label="访问语鲸官方网站"
            >
              <span>🔗</span>
              <span>官方网站</span>
            </motion.a>
          )}
          {title === '星流' && (
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.xingliu.art/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-purple-50 hover:bg-purple-100 text-purple-600 hover:text-purple-700 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
              aria-label="访问星流官方网站"
            >
              <span>🎨</span>
              <span>官方网站</span>
            </motion.a>
          )}
        </div>
        <div className="text-sm text-gray-400 font-medium">
          {cardNumber}/4
        </div>
      </div>

      {/* 简概部分 */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            简概
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </motion.div>
      )}

      {/* Aha Moment部分 */}
      {(ahamoment || (bulletPoints && bulletPoints.length > 0 && bulletPoints.some(point => point))) && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="aha-highlight rounded-2xl p-6 mb-8"
        >
          <div className="flex items-start space-x-3">
            <Lightbulb className="text-blue-600 mt-1 flex-shrink-0" size={24} />
            <div className="w-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Aha Moment
              </h3>
              <div className="space-y-4">
                {bulletPoints && bulletPoints.filter(point => point).map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Placeholder message for blank content */}
      {!description && !ahamoment && (!bulletPoints || bulletPoints.length === 0) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 text-lg">
            [内容待填充]
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProductCard;
