import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

// Resume section component
const ResumeSection = () => {
  const handleViewResume = () => {
    // TODO: 在这里添加简历PDF查看逻辑
    alert('简历PDF文件尚未添加，请将简历PDF文件集成到此功能中');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              📄 个人简历
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              了解更多关于我的专业背景
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              aria-label="查看个人简历"
            >
              <Eye size={24} />
              <span>查看我的简历</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-sm text-gray-500"
          >
            点击查看完整的个人简历
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
