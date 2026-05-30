import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug } from '../data/blogPosts';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import ScrollToTop from './ScrollToTop';

interface BlogPostPageProps {
  slug: string;
  isScrolled: boolean;
}

const BlogPostPage = ({ slug, isScrolled }: BlogPostPageProps) => {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-ink text-slate-100 relative">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>
        <div className="relative z-10">
          <Navigation isScrolled={isScrolled} />
          <div className="max-w-3xl mx-auto px-4 py-32 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Yazı Bulunamadı</h1>
            <p className="text-muted mb-8">Aradığınız yazı mevcut değil veya kaldırılmış olabilir.</p>
            <a href="#yazilarim" className="btn-brand inline-flex items-center gap-2 px-6 py-3">
              <ArrowLeft className="w-4 h-4" />
              Yazılarıma Dön
            </a>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink text-slate-100 relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      <div className="relative z-10">
        <Navigation isScrolled={isScrolled} />

        {/* Hero */}
        <header className="relative pt-28 pb-16 min-h-[22rem] flex items-end overflow-hidden">
          <img
            src={post.coverImage}
            alt={`${post.title} kapak görseli`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-40 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-4">
            <a
              href="#yazilarim"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Yazılarıma Dön
            </a>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-4">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-white/80 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} okuma
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            {post.content.map((section, index) => (
              <section key={index}>
                {section.heading && (
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-subtle leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#yazilarim" className="btn-brand inline-flex items-center gap-2 px-8 py-4">
              <ArrowLeft className="w-4 h-4" />
              Tüm Yazılara Dön
            </a>
          </div>
        </article>

        <Footer />
      </div>
      <FloatingActions />
      <ScrollToTop />
    </div>
  );
};

export default BlogPostPage;
