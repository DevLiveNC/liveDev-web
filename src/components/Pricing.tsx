import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Temel Paket',
      price: '$150',
      period: 'tek seferlik',
      description: 'Küçük işletmeler ve kişisel projeler için ideal',
      features: [
        '5 sayfaya kadar',
        'Responsive tasarım',
        'Temel SEO optimizasyonu',
        'İletişim formu',
        '1 ay ücretsiz destek',
        'Sosyal medya entegrasyonu',
      ],
      popular: false,
      gradient: 'from-slate-600 to-slate-700',
    },
    {
      name: 'Profesyonel Paket',
      price: '$250',
      period: 'tek seferlik',
      description: 'Büyüyen işletmeler için en popüler seçenek',
      features: [
        '10 sayfaya kadar',
        'Gelişmiş responsive tasarım',
        'İleri düzey SEO',
        'Blog/Haber sistemi',
        'Admin paneli',
        '3 ay ücretsiz destek',
        'E-posta entegrasyonu',
        'Analitik entegrasyonu',
        'SSL sertifikası',
      ],
      popular: true,
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'Premium Paket',
      price: 'min $450+',
      period: 'tek seferlik',
      description: 'Büyük işletmeler ve e-ticaret siteleri için',
      features: [
        'Sınırsız sayfa',
        'Özel tasarım',
        'E-ticaret entegrasyonu',
        'Ödeme sistemi',
        'Çoklu dil desteği',
        'Özel animasyonlar',
        '6 ay ücretsiz destek',
        'Performans optimizasyonu',
        'Güvenlik optimizasyonu',
        '7/24 teknik destek',
      ],
      popular: false,
      gradient: 'from-sky-600 to-indigo-600',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#0a1020] via-[#0d1a35] to-[#0a1020] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Paketlerim
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            İhtiyacınıza uygun paketi seçin veya özel bir teklif için benimle iletişime geçin
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative glass-card backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? 'border-sky-400/40 shadow-xl shadow-sky-500/20 scale-105 md:scale-110'
                  : 'hover:border-sky-400/25'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-white text-sm font-medium">En Popüler</span>
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-muted text-sm mb-4">{pkg.description}</p>
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                </div>
                <span className="text-muted text-sm">{pkg.period}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 mt-0.5 bg-gradient-to-br ${pkg.gradient} w-5 h-5 rounded-full flex items-center justify-center`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-subtle text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-medium transition-all ${
                  pkg.popular
                    ? 'btn-brand py-3 rounded-full'
                    : 'btn-glass py-3 rounded-full'
                }`}
              >
                Başlayın
              </a>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Özel Paket İhtiyacınız mı Var?</h3>
            <p className="text-muted mb-6">
              Yukarıdaki paketler size uygun değilse, özel ihtiyaçlarınız için birlikte özel bir paket oluşturabiliriz.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              Özel Teklif Alın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
