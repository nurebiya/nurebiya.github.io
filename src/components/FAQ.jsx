import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

// FAQ accordion component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '这些 AI 产品的主要用途是什么？',
      answer: '语鲸主要用于语言学习和翻译服务，提供智能化的语言处理能力。Aivilization 则专注于文明发展模拟和策略分析，帮助用户理解复杂系统的运作规律。'
    },
    {
      question: '使用这些产品需要什么技术背景吗？',
      answer: '大部分功能都设计得非常用户友好，不需要专业的技术背景。产品界面直观，有详细的使用指南，普通用户也能快速上手。'
    },
    {
      question: '这些产品的数据安全性如何？',
      answer: '所有产品都采用了企业级的安全措施，包括数据加密、访问控制和隐私保护。用户数据会得到严格保护，不会被滥用或泄露。'
    },
    {
      question: '产品更新频率如何？',
      answer: '这些 AI 产品通常保持较高的更新频率，会根据用户反馈和技术发展持续优化功能，添加新特性，提升用户体验。'
    },
    {
      question: '如何获取技术支持？',
      answer: '每个产品都提供了完善的技术支持体系，包括在线文档、社区论坛、客服支持等多种渠道，确保用户能够及时获得帮助。'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <HelpCircle className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-800 font-chinese">
              常见问题
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            关于 AI 产品的一些常见疑问和解答
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-gray-500" size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

