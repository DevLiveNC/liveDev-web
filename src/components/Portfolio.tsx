import { ExternalLink, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Portfolio = () => {
  const projects = [
    {
      title: 'EkrenFit — Spor Koçu Web Sitesi',
      category: 'Fitness',
      description: 'Profesyonel fitness koçu Ali Ekren için hazırladığım kişisel marka sitesi. Paketler, dönüşüm hikayeleri ve iletişim formuyla danışan kazanımına odaklanan modern bir yapı.',
      tags: ['React', 'TypeScript', 'Responsive', 'SEO'],
      preview: '/portfolio/fitekren-preview.jpg',
      url: 'https://fitekren.org',
    },
    // {
    //   title: 'Restoran Web Sitesi',
    //   category: 'Restaurant',
    //   description: 'Online menü, rezervasyon sistemi ve sipariş takibi özellikli restoran sitesi.',
    //   tags: ['Next.js', 'Firebase', 'Tailwind'],
    //   gradient: 'from-orange-500 to-red-500',
    // },
    // {
    //   title: 'Portfolyo Sitesi',
    //   category: 'Portfolio',
    //   description: 'Sanatçı ve tasarımcılar için modern portfolyo web sitesi. Galeri ve iletişim formu.',
    //   tags: ['React', 'Framer Motion', 'Responsive'],
    //   gradient: 'from-green-500 to-emerald-500',
    // },
    // {
    //   title: 'Gayrimenkul Platformu',
    //   category: 'Real Estate',
    //   description: 'İlan yönetimi, filtreleme ve harita entegrasyonlu gayrimenkul sitesi.',
    //   tags: ['Next.js', 'Maps API', 'Database'],
    //   gradient: 'from-indigo-500 to-blue-500',
    // },
    // {
    //   title: 'Blog Platformu',
    //   category: 'Blog',
    //   description: 'İçerik yönetimi, yorum sistemi ve sosyal medya entegrasyonlu blog sitesi.',
    //   tags: ['React', 'Markdown', 'CMS', 'SEO'],
    //   gradient: 'from-pink-500 to-rose-500',
    // },
  ];

  return (
    <section id="portfolio" className="py-20 section-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-heading">
                Projelerim
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Tamamladığım bazı projelere göz atın ve benzer bir proje için benimle iletişime geçin
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <div className="group glass-card-hover rounded-2xl overflow-hidden hover:-translate-y-2 h-full">
              {/* Project Preview */}
              <div
                className={`h-48 relative overflow-hidden ${
                  'preview' in project && project.preview
                    ? 'bg-ink-card'
                    : `bg-gradient-to-br ${project.gradient}`
                }`}
              >
                {'preview' in project && project.preview ? (
                  <img
                    src={project.preview}
                    alt={`${project.title} ön izlemesi`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    {'url' in project && project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
                        aria-label={`${project.title} sitesini aç`}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    ) : (
                      <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </button>
                    )}
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
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 tag-glass rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={100}>
          <div className="mt-16 text-center">
          <p className="text-muted mb-6">Benzer bir projeniz mi var?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-brand px-8 py-4"
          >
            Hemen Başlayalım
          </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portfolio;
