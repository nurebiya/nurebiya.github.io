import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CardSlider from './components/CardSlider';
import ProductCard from './components/ProductCard';
import ExperienceCard from './components/ExperienceCard';
import OptimizationCard from './components/OptimizationCard';
import ProductHighlights from './components/ProductHighlights';
import FAQ from './components/FAQ';
import ResumeSection from './components/ResumeSection';
import PromptDisplay from './components/PromptDisplay';
import Footer from './components/Footer';

function App() {
  // Card data with actual content
  const cardData = {
    products: [
      {
        title: '语鲸',
        description: '通过"频道"对新闻、论文、公众号文章等实时更新信息进行分类，并用AI整合归纳用户订阅频道的信息聚合应用',
        ahamoment: '',
        bulletPoints: [
          '发现频道的种类与信息来源相当丰富，既涵盖新闻，也包括 arXiv、科技论坛等技术信息源；',
          '意识到我能通过RSS或网页链接自定义频道；',
          '发现AI每日生成的日报支持语音播放，我能在无需盯屏的情况下完成信息获取。'
        ]
      },
      {
        title: '星流',
        description: '通过multi agent实现图片、视频、海报及IP概念图等视觉作品设计的vibe design应用',
        ahamoment: '',
        bulletPoints: [
          '意识到星流的无限画布允许用户以非线性化的形式创作。不同阶段生成的设计素材都摆在画布上，我能中框选特定几个素材通过prompt进行修改迭代，并保留原始版本进行比对；',
          '发现Agent在设计过程中会提供差异化的多个设计方向供我点选，避免灵感枯竭；',
          '注意到星流内置了微调模型内容平台，用户既可以分享自己的 LoRA 组件，也能直接使用他人共享的组件，从而灵活弥补基准模型的不足，实现个性化视觉生成。'
        ]
      }
    ],
    experienceGaps: [
      {
        name: '语鲸',
        issues: [
          '只支持生成日报，不能自定义时间区间生成。长时间没看后想要快速了解过去几天的信息比较麻烦',
          '只能基于所有的信息生成一个总的日报，不允许用户挑选特定的几个类型的信息源生成日报',
          '不支持抓取社交平台特定用户的分享，损失了一大类优质信息源，信息的时效性和灵活性略不理想',
          '没法进行针对性推送，一些来自相同信息源但是用户不感兴趣的信息也会被推送，论文大批量更新的时候会刷屏'
        ]
      },
      {
        name: '星流',
        issues: [
          '视频基于预设的知识库生成，脚本和分镜方式相似，不像真实电影那样富于变化',
          '生成的人物服装常出现时代错配或世界观错配',
          '生成的旁白音色单调，语气平淡，偶尔有怪异声'
        ]
      }
    ],
    optimizations: [
      {
        name: '语鲸',
        optimizations: [
          '增加自定义时间区间和自定义信息源总结，解决信息回顾和信息聚焦问题',
          '在阅读时长、点击率等方面埋点，或者增加反馈机制（如"不感兴趣"选项），自动分析用户喜好并基于此优化个性化推送策略',
          '通过RSS插件、官方API或者OAuth授权实现社媒定向抓取，允许用户自定义抓取对象'
        ]
      },
      {
        name: '星流',
        optimizations: [
          '内置内容平台开放用户设计及分享自己的脚本和分镜框架的功能，让非专业出身用户也能提高视频生成效果，同时知识库和模型本身也可以基于这些新内容不断迭代优化',
          '内置内容平台开放用户设计及分享自己的世界观包的功能，世界观包可作为即插即用的知识库组件，内容可囊括背景知识文本、设定图、甚至音效',
          '接入F5 TTS或CosyVoice等前沿声音克隆模型，允许用户定制配音音色、语气以及风格'
        ]
      }
    ]
  };

  // Create the 4 cards as specified
  const cards = [
    // Card One: Product — 语鲸
    <div data-card-export key="card-1">
      <ProductCard
        title={cardData.products[0].title}
        description={cardData.products[0].description}
        ahamoment={cardData.products[0].ahamoment}
        bulletPoints={cardData.products[0].bulletPoints}
        cardNumber="1"
      />
    </div>,

    // Card Two: Product — Aivilization
    <div data-card-export key="card-2">
      <ProductCard
        title={cardData.products[1].title}
        description={cardData.products[1].description}
        ahamoment={cardData.products[1].ahamoment}
        bulletPoints={cardData.products[1].bulletPoints}
        cardNumber="2"
      />
    </div>,

    // Card Three: Experience gaps
    <div data-card-export key="card-3" id="issues">
      <ExperienceCard
        products={cardData.experienceGaps}
        cardNumber="3"
      />
    </div>,

    // Card Four: If I were PM (Optimization ideas)
    <div data-card-export key="card-4" id="optimizations">
      <OptimizationCard
        products={cardData.optimizations}
        cardNumber="4"
      />
    </div>
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Main Card Slider Section */}
      <div id="products">
        <CardSlider cards={cards} />
      </div>

      {/* Extra Sections - Product Highlights */}
      <div id="highlights">
        <ProductHighlights />
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Resume Section */}
      <ResumeSection />

      {/* Prompt Display Section */}
      <PromptDisplay />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
