import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

// Prompt Display component
const PromptDisplay = () => {
  const promptText = `Build a modern, minimal, single-page website with the following requirements:

General style & tech stack
- Use React + TailwindCSS + Framer Motion for layout and animations.
- For vertical full-page card switching, use fullPage.js or Swiper (vertical mode).
- Keep the design clean, with generous white space, rounded corners, and subtle gradients.
- Mobile responsive, lightweight, and performance-friendly.

Header / Hero
- Top sticky navigation bar (transparent at first, then translucent glassy background on scroll).
- Left: site title. Right: anchor links to sections + one main button "Download Answer PDF".
- Hero section: large Chinese title 「我最喜爱的 AI 产品」 with a short subtitle under it.
- Right side of Hero: placeholder image or geometric figure with a light parallax motion.
- Background: soft radial gradient with floating translucent blob shapes.

Core Interaction (vertical cards)
- Main content presented as full-screen stacked cards (one card per scroll).
- Mouse wheel / touchpad scroll switches between cards vertically.
- Smooth transition animation: current card slides up and fades out, next card slides in and fades in.
- Side indicator shows progress (1/4, 2/4…).
- Support keyboard up/down navigation.

Cards content (render these as 4 cards)
Card One: Product — 语鲸
Card Two: Product — Aivilization  
Card Three: Experience gaps
Card Four: If I were PM (Optimization ideas)

Extra sections (normal scroll, not full screen)
- Before or after the card set, add a "Product Highlights" 3-column grid.
- Add a small FAQ accordion.
- Footer: social placeholders, copyright, contact link.

Component & animation details
- Card style: 24px rounded corners, soft shadow, sufficient padding.
- Text hierarchy clear; Aha Moment row highlighted with color block or left border.
- On-view animations: fade-up via Framer Motion.
- Hover effects: slight scale-up for nav buttons.
- Scroll cue: down arrow at bottom of Hero, floating gently every 2s.

Deliverables
- A working React project (with package.json) or single-file demo.
- Clean README with install/run instructions.
- Code comments marking major parts.

Bonus
- Add "Export as PDF" button to combine the 4 cards into an A4-style resume PDF.
- Accessibility: ARIA labels for nav buttons & card progress dots, keyboard navigation support.`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
            <Code className="text-blue-600" size={40} />
            <span>网站生成 Prompt</span>
          </h2>
          <p className="text-xl text-gray-600">
            这个网站是如何通过 AI 对话生成的
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -4,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          className="bg-white rounded-2xl shadow-xl transition-all duration-300 p-8 max-h-96 overflow-y-auto border border-gray-100"
        >
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">prompt.md</span>
            </div>
            <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap overflow-x-auto">
              {promptText}
            </pre>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 space-y-3"
        >
          <p className="text-gray-500 text-sm">
            💡 通过一次对话，从想法到完整网站
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-lg mx-auto"
          >
            <div className="flex items-start space-x-2">
              <span className="text-yellow-600 text-lg">⚠️</span>
              <div className="text-sm text-yellow-800">
                <strong>说明：</strong>上述 Prompt 生成了网站的主要框架和基本内容，
                但在实际开发过程中，还根据具体需求进行了多项细节调整和功能优化。
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromptDisplay;
