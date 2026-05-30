import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0618] via-[#1a1140]/60 to-[#0a0618]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA0IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <AnimatedBackground />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-indigo-500/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-8 border-sky-500/20">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="text-sm text-subtle">Profesyonel Web Çözümleri</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-heading">
            Modern Web Siteleri
          </span>
          <br />
          <span className="text-white">İşiniz İçin Hazır</span>
        </h1>

        <p className="text-lg md:text-xl text-muted mb-12 max-w-3xl mx-auto">
          Hızlı, güvenilir ve SEO uyumlu web siteleri ile işletmenizi dijital dünyada zirveye taşıyın.
          Modern teknolojiler kullanarak size özel çözümler sunuyorum.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 btn-brand px-8 py-4"
          >
            Projenizi Başlatalım
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 btn-secondary px-8 py-4"
          >
            Projelerime Göz Atın
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Tamamlanan Proje' },
            { number: '%100', label: 'Müşteri Memnuniyeti' },
            { number: '5+', label: 'Yıllık Deneyim' },
            { number: '24/7', label: 'Destek' },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-panel rounded-2xl py-5 px-3">
              <div className="text-3xl md:text-4xl font-bold gradient-heading mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sky-500/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 gradient-brand rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
