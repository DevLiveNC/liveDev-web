import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Web Sitesi Hızlandırma: En İyi 10 Teknik',
      excerpt: 'Web sitenizin yükleme hızını artırmak için kullanabileceğiniz en etkili yöntemler ve optimizasyon teknikleri.',
      date: '15 Ocak 2024',
      readTime: '5 dk',
      category: 'Performans',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'SEO için 2024 Trendleri',
      excerpt: 'Google\'da üst sıralarda yer almak için 2024 yılında dikkat etmeniz gereken SEO trendleri ve stratejileri.',
      date: '12 Ocak 2024',
      readTime: '7 dk',
      category: 'SEO',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'React vs Next.js: Hangisini Seçmeli?',
      excerpt: 'Projeniz için React mi yoksa Next.js mi kullanmalısınız? İkisi arasındaki farklar ve kullanım alanları.',
      date: '8 Ocak 2024',
      readTime: '6 dk',
      category: 'Teknoloji',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Son Yazılar
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Web geliştirme, SEO ve teknoloji hakkında en son içerikler
          </p>
        </div>

        {/* Blog Posts Grid */}
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

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
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Tüm Yazıları Görüntüle
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
