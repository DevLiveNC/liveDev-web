import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'CEO, TechStart',
      image: '👨‍💼',
      rating: 5,
      text: 'Harika bir iş çıkardı! Web sitemiz tam istediğimiz gibi oldu. Hızlı, profesyonel ve müşteri odaklı bir hizmet aldık.',
    },
    {
      name: 'Ayşe Demir',
      role: 'Kurucu, E-Shop',
      image: '👩‍💼',
      rating: 5,
      text: 'E-ticaret sitemiz için mükemmel bir çözüm üretti. Satışlarımız %200 arttı. Kesinlikle tavsiye ediyorum!',
    },
    {
      name: 'Mehmet Kaya',
      role: 'Restoran Sahibi',
      image: '👨‍🍳',
      rating: 5,
      text: 'Modern ve kullanıcı dostu bir web sitesi. Müşterilerimiz artık online sipariş verebiliyor. Çok memnunuz!',
    },
    {
      name: 'Zeynep Şahin',
      role: 'Freelance Tasarımcı',
      image: '👩‍🎨',
      rating: 5,
      text: 'Portfolyo sitem harika oldu. Artık çok daha profesyonel görünüyorum ve daha fazla müşteri kazanıyorum.',
    },
    {
      name: 'Can Özkan',
      role: 'Emlak Danışmanı',
      image: '👨‍💼',
      rating: 5,
      text: 'Gayrimenkul sitemiz için harika bir platform oluşturdu. İlanlarımızı kolayca yönetebiliyoruz.',
    },
    {
      name: 'Elif Arslan',
      role: 'Blog Yazarı',
      image: '👩‍💻',
      rating: 5,
      text: 'Blog sitem çok hızlı ve SEO dostu. Google\'da üst sıralara çıktım. Teşekkürler!',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Müşteri Yorumları
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mutlu müşterilerimizin deneyimlerini keşfedin
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-blue-500/30" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-700/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Siz de mutlu müşterilerimize katılın!</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Hemen Başlayın
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
