import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Script Dünyasından Web\'e: 8 Yıllık Yolculuğum',
      excerpt:
        'Oyun scriptlerinde başlayan kodlama serüvenim nasıl profesyonel web geliştirmeye dönüştü? Sekiz yıllık deneyimden öğrendiklerim ve freelance\'a geçiş hikayem.',
      date: '12 Mayıs 2026',
      readTime: '6 dk',
      category: 'Deneyim',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Spor Koçu Sitesi Nasıl Tasarlanır? EkrenFit Projesi',
      excerpt:
        'Profesyonel fitness koçu Ali Ekren için hazırladığım EkrenFit sitesinde paketler, dönüşüm hikayeleri ve iletişim formunu nasıl kurguladım? Gerçek bir proje üzerinden anlatım.',
      date: '28 Nisan 2026',
      readTime: '5 dk',
      category: 'Proje',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Freelance Web Geliştirmede İletişim Neden Her Şeydir?',
      excerpt:
        'Tek başına çalışan bir geliştirici olarak hızlı teslim ve özenli ilginin sırrı: sürekli iletişim. Müşteri memnuniyetini artıran pratik ipuçları ve dürüst iş birliği yaklaşımım.',
      date: '15 Nisan 2026',
      readTime: '4 dk',
      category: 'Freelance',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="yazilarim" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Yazılarım
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Web geliştirme, freelance çalışma ve projelerim hakkında notlar, deneyimler ve ipuçları
          </p>
        </div>

        {/* Latest Posts */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full"></span>
            Son Yazılarım
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
              >
                {/* Post Header */}
                <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-4 text-gray-500 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      aria-label={`${post.title} yazısını oku`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/yasar_kirmiziyuz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Daha Fazla İçerik İçin Takip Et
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
