import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// PDF export functionality
export const exportToPDF = async () => {
  try {
    // Create a new jsPDF instance
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    
    // Add title page
    pdf.setFontSize(24);
    pdf.setFont(undefined, 'bold');
    pdf.text('我最喜爱的 AI 产品', pageWidth / 2, 40, { align: 'center' });
    
    pdf.setFontSize(16);
    pdf.setFont(undefined, 'normal');
    pdf.text('产品体验与优化建议报告', pageWidth / 2, 55, { align: 'center' });
    
    pdf.setFontSize(12);
    pdf.text(`生成日期: ${new Date().toLocaleDateString('zh-CN')}`, pageWidth / 2, 70, { align: 'center' });

    // Add cards content
    const cards = [
      {
        title: '语鲸 - AI 语言学习助手',
        content: [
          '产品描述: [待填充]',
          'Aha Moment: [待填充]',
          '核心特点:',
          '• [待填充]',
          '• [待填充]'
        ]
      },
      {
        title: 'Aivilization - 文明模拟平台',
        content: [
          '产品描述: [待填充]',
          'Aha Moment: [待填充]',
          '核心特点:',
          '• [待填充]',
          '• [待填充]'
        ]
      },
      {
        title: '体验问题分析',
        content: [
          '语鲸:',
          '• [待填充]',
          '• [待填充]',
          '',
          'Aivilization:',
          '• [待填充]',
          '• [待填充]'
        ]
      },
      {
        title: '优化建议 (产品经理视角)',
        content: [
          '语鲸:',
          '• [待填充]',
          '• [待填充]',
          '',
          'Aivilization:',
          '• [待填充]',
          '• [待填充]'
        ]
      }
    ];

    let yPosition = 100;

    cards.forEach((card, index) => {
      // Add new page for each card (except first)
      if (index > 0) {
        pdf.addPage();
        yPosition = 30;
      }

      // Card title
      pdf.setFontSize(18);
      pdf.setFont(undefined, 'bold');
      pdf.text(card.title, 20, yPosition);
      yPosition += 15;

      // Card content
      pdf.setFontSize(12);
      pdf.setFont(undefined, 'normal');
      
      card.content.forEach(line => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage();
          yPosition = 30;
        }
        
        if (line.trim() === '') {
          yPosition += 5;
        } else {
          // Handle long lines by splitting them
          const splitLines = pdf.splitTextToSize(line, pageWidth - 40);
          splitLines.forEach(splitLine => {
            pdf.text(splitLine, 20, yPosition);
            yPosition += 7;
          });
        }
      });
      
      yPosition += 10;
    });

    // Add footer to all pages
    const pageCount = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(10);
      pdf.setFont(undefined, 'normal');
      pdf.text(
        `第 ${i} 页 / 共 ${pageCount} 页`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    }

    // Save the PDF
    pdf.save('AI产品体验报告.pdf');
    
    return true;
  } catch (error) {
    console.error('PDF export failed:', error);
    return false;
  }
};

// Alternative method using html2canvas for better styling
export const exportCardsAsPDF = async () => {
  try {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const cardElements = document.querySelectorAll('[data-card-export]');
    
    if (cardElements.length === 0) {
      // Fallback to basic text export
      return await exportToPDF();
    }

    let isFirstPage = true;

    for (const cardElement of cardElements) {
      if (!isFirstPage) {
        pdf.addPage();
      }
      
      try {
        const canvas = await html2canvas(cardElement, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 190; // A4 width minus margins
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      } catch (canvasError) {
        console.warn('Canvas export failed for card, using text fallback:', canvasError);
        // Add text fallback for this card
        pdf.setFontSize(16);
        pdf.text('Card content could not be rendered', 20, 30);
      }
      
      isFirstPage = false;
    }

    pdf.save('AI产品展示卡片.pdf');
    return true;
  } catch (error) {
    console.error('Card export failed:', error);
    return await exportToPDF(); // Fallback to basic export
  }
};

