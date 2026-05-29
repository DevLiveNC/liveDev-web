import { Globe, Smartphone, Search, Paintbrush, ShoppingCart, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Sitesi Geliştirme',
      description: 'Kurumsal web siteleri, portfolyo siteleri ve kişisel blog siteleri',
      features: ['Responsive Tasarım', 'Hızlı Yükleme', 'Modern UI/UX'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Ticaret Siteleri',
      description: 'Güvenli ödeme sistemli, kullanıcı dostu online mağazalar',
      features: ['Güvenli Ödeme', 'Stok Yönetimi', 'Admin Paneli'],
    },
    {
      icon: Smartphone,
      title: 'Mobil Uyumlu Tasarım',
      description: 'Tüm cihazlarda mükemmel görünen responsive web tasarımları',
      features: ['Mobil Optimize', 'Tablet Uyumlu', 'Cross-Browser'],
    },
    {
      icon: Search,
      title: 'SEO Optimizasyonu',
      description: 'Google\'da üst sıralarda yer almanız için SEO çalışmaları',
      features: ['Anahtar Kelime', 'Hız Optimizasyonu', 'Meta Etiketler'],
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Tasarım',
      description: 'Kullanıcı deneyimini ön planda tutan modern arayüz tasarımları',
      features: ['Modern Tasarım', 'Kolay Kullanım', 'Marka Kimliği'],
    },
    {
      icon: Wrench,
      title: 'Bakım & Destek',
      description: 'Sitenizin sürekli güncel ve güvenli kalması için teknik destek',
      features: ['7/24 Destek', 'Güvenlik', 'Güncellemeler'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Hizmetlerim
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına özel, kapsamlı web çözümleri sunuyorum
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Ücretsiz Teklif Alın
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
