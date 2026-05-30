import { Rocket, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 section-surface relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600/15 via-indigo-600/10 to-blue-600/15"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card backdrop-blur-sm rounded-3xl p-12 md:p-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 gradient-brand rounded-full mb-8 animate-bounce shadow-lg shadow-sky-500/20">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-heading">
              Projenizi Başlatmaya Hazır mısınız?
            </span>
          </h2>

          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
            Modern, hızlı ve SEO uyumlu web sitenizi bugün oluşturmaya başlayın. 
            Size özel çözümler için hemen iletişime geçin!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 btn-brand px-8 py-4"
            >
              Ücretsiz Teklif Alın
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 btn-glass px-8 py-4 rounded-full font-medium hover:scale-105"
            >
              Projelerime Göz Atın
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 divider-glass">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { value: '150+', label: 'Mutlu Müşteri' },
                { value: '200+', label: 'Proje' },
                { value: '5+', label: 'Yıl Deneyim' },
                { value: '24/7', label: 'Destek' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-muted text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
