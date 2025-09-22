import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

// Experience gaps card component
const ExperienceCard = ({ products, cardNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-3xl card-shadow p-8 lg:p-12 max-w-4xl mx-auto"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl lg:text-5xl font-bold text-gray-800 font-chinese flex items-center space-x-4"
        >
          <AlertTriangle className="text-orange-500" size={48} />
          <span>体验问题</span>
        </motion.h2>
        <div className="text-sm text-gray-400 font-medium">
          {cardNumber}/4
        </div>
      </div>

      <div className="space-y-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            className="border-l-4 border-orange-400 pl-6 py-4"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-chinese">
              {product.name}
            </h3>
            
            {product.issues && product.issues.length > 0 ? (
              <ul className="space-y-3">
                {product.issues.map((issue, issueIndex) => (
                  <motion.li
                    key={issueIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.2 + issueIndex * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      {issue}
                    </span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-400 italic">
                [问题待填充]
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
            [体验问题内容待填充]
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;

