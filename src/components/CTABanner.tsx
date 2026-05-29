import { Rocket, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 md:p-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-8 animate-bounce">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Projenizi Başlatmaya Hazır mısınız?
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Modern, hızlı ve SEO uyumlu web sitenizi bugün oluşturmaya başlayın. 
            Size özel çözümler için hemen iletişime geçin!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              Ücretsiz Teklif Alın
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600 px-8 py-4 rounded-full text-white font-medium hover:bg-gray-700 transition-all hover:scale-105"
            >
              Projelerime Göz Atın
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">150+</div>
                <div className="text-gray-400 text-sm">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">200+</div>
                <div className="text-gray-400 text-sm">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-gray-400 text-sm">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Destek</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
