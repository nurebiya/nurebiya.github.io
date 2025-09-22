import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Users, Target, Shield, Sparkles } from 'lucide-react';

// Product Highlights section with 3-column grid
const ProductHighlights = () => {
  const highlights = [
    {
      icon: Brain,
      title: '智能分析',
      description: '深度学习算法提供精准的内容分析和建议'
    },
    {
      icon: Zap,
      title: '高效处理',
      description: '快速响应，实时处理各种复杂任务'
    },
    {
      icon: Users,
      title: '用户友好',
      description: '直观的界面设计，降低学习成本'
    },
    {
      icon: Target,
      title: '精准定位',
      description: '针对特定需求提供个性化解决方案'
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '企业级安全保障，保护用户隐私'
    },
    {
      icon: Sparkles,
      title: '持续创新',
      description: '不断更新功能，保持技术领先地位'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-chinese">
            产品亮点
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索这些 AI 产品的核心优势和独特价值
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;

