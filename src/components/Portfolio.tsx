import { ExternalLink, Code2 } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Ticaret Platformu',
      category: 'E-Commerce',
      description: 'Modern ve kullanıcı dostu online alışveriş sitesi. Güvenli ödeme entegrasyonu ve admin paneli.',
      tags: ['React', 'Next.js', 'Stripe', 'Tailwind'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Kurumsal Web Sitesi',
      category: 'Corporate',
      description: 'Profesyonel kurumsal web sitesi. SEO optimize, hızlı ve responsive tasarım.',
      tags: ['React', 'TypeScript', 'SEO', 'CMS'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Restoran Web Sitesi',
      category: 'Restaurant',
      description: 'Online menü, rezervasyon sistemi ve sipariş takibi özellikli restoran sitesi.',
      tags: ['Next.js', 'Firebase', 'Tailwind'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Portfolyo Sitesi',
      category: 'Portfolio',
      description: 'Sanatçı ve tasarımcılar için modern portfolyo web sitesi. Galeri ve iletişim formu.',
      tags: ['React', 'Framer Motion', 'Responsive'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Gayrimenkul Platformu',
      category: 'Real Estate',
      description: 'İlan yönetimi, filtreleme ve harita entegrasyonlu gayrimenkul sitesi.',
      tags: ['Next.js', 'Maps API', 'Database'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Blog Platformu',
      category: 'Blog',
      description: 'İçerik yönetimi, yorum sistemi ve sosyal medya entegrasyonlu blog sitesi.',
      tags: ['React', 'Markdown', 'CMS', 'SEO'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Projelerim
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tamamladığım bazı projelere göz atın ve benzer bir proje için benimle iletişime geçin
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all">
                      <Code2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-gray-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Benzer bir projeniz mi var?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Hemen Başlayalım
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
