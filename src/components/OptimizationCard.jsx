import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Lightbulb } from 'lucide-react';

// Optimization ideas card component
const OptimizationCard = ({ products, cardNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-3xl card-shadow p-8 lg:p-12 max-w-6xl mx-auto"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl lg:text-5xl font-bold text-gray-800 font-chinese flex items-center space-x-4"
        >
          <Settings className="text-green-600" size={48} />
          <span>优化建议</span>
        </motion.h2>
        <div className="text-sm text-gray-400 font-medium">
          {cardNumber}/4
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Lightbulb className="text-green-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">
            如果我是产品经理
          </h3>
        </div>
        <p className="text-gray-600">
          基于用户体验分析，以下是我的优化建议和产品改进思路
        </p>
      </motion.div>

      {/* 并列的两个产品卡片 */}
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2 }}
            className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-chinese flex items-center space-x-2">
              <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              <span>{product.name}</span>
            </h3>
            
            {product.optimizations && product.optimizations.length > 0 ? (
              <div className="space-y-4">
                {product.optimizations.map((optimization, optIndex) => (
                  <motion.div
                    key={optIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 + optIndex * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {optIndex + 1}
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm">
                        {optimization}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-gray-400 italic">
                [优化建议待填充]
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Placeholder message if no products */}
      {(!products || products.length === 0) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 text-lg">
            [优化建议内容待填充]
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default OptimizationCard;

