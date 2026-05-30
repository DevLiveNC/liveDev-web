import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Web sitesi yapımı ne kadar sürer?',
      answer: 'Projenin kapsamına göre değişmekle birlikte, temel bir web sitesi 1-2 hafta, kurumsal projeler 3-4 hafta, e-ticaret siteleri ise 4-6 hafta içinde teslim edilir.',
    },
    {
      question: 'Hangi teknolojileri kullanıyorsunuz?',
      answer: 'React, Next.js, TypeScript, Tailwind CSS gibi modern ve güncel teknolojiler kullanıyorum. Bu sayede siteniz hızlı, güvenli ve güncel kalır.',
    },
    {
      question: 'SEO optimizasyonu dahil mi?',
      answer: 'Evet! Tüm paketlerimizde temel SEO optimizasyonu bulunmaktadır. İleri düzey SEO hizmetleri için ayrıca danışabiliriz.',
    },
    {
      question: 'Mobil uyumlu mu olacak?',
      answer: 'Kesinlikle! Tüm projelerimiz responsive tasarımdır. Yani mobil, tablet ve masaüstü cihazların hepsinde mükemmel görünür.',
    },
    {
      question: 'Teknik destek sağlıyor musunuz?',
      answer: 'Evet, tüm paketlerimizde belirtilen süre kadar ücretsiz teknik destek sağlıyorum. Sonrasında aylık bakım paketleri mevcuttur.',
    },
    {
      question: 'Domain ve hosting dahil mi?',
      answer: 'Domain ve hosting masrafları fiyata dahil değildir. Ancak size en uygun hosting çözümlerini önerir ve kurulum sürecinde yardımcı olurum.',
    },
    {
      question: 'İçerik yönetimi nasıl olacak?',
      answer: 'İhtiyacınıza göre kullanımı kolay bir admin paneli veya CMS entegrasyonu sağlıyorum. Böylece içerikleri kendiniz kolayca güncelleyebilirsiniz.',
    },
    {
      question: 'Ödeme nasıl yapılır?',
      answer: 'Projenin %50\'si başlangıçta, %50\'si teslim aşamasında ödenir. Havale/EFT ile ödeme kabul edilmektedir.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 section-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Sıkça Sorulan Sorular
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card-hover rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-white font-semibold text-lg">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-lg flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-400" />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted mb-6">Başka sorularınız mı var?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Bizimle İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
