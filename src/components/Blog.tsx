import { useRef, useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBlogPosts } from '../hooks/useBlogPosts';

const VISIBLE_COUNT = 3;

const Blog = () => {
  const { posts, loading } = useBlogPosts();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [posts]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('article');
    const gap = 32;
    const amount = card ? card.clientWidth + gap : el.clientWidth / VISIBLE_COUNT;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="yazilarim" className="py-20 section-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-heading">Yazılarım</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Web geliştirme, freelance çalışma ve projelerim hakkında notlar, deneyimler ve ipuçları
          </p>
        </div>

        {/* Latest Posts — max 3 visible, horizontal scroll for more */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-3">
              <span className="w-1 h-6 bg-gradient-to-b from-sky-400 to-indigo-500 rounded-full"></span>
              Son Yazılarım
            </h3>

            {posts.length > VISIBLE_COUNT && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  aria-label="Önceki yazılar"
                  className="w-10 h-10 icon-box-glass rounded-lg flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-sky-400/30 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  aria-label="Sonraki yazılar"
                  className="w-10 h-10 icon-box-glass rounded-lg flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-sky-400/30 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
          <div
            ref={scrollRef}
            className="overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [--card-w:100%] sm:[--card-w:calc((100%-2rem)/2)] lg:[--card-w:calc((100%-4rem)/3)]"
          >
            <div
              className="flex gap-8"
              style={{
                width: `calc(${posts.length} * var(--card-w) + ${(posts.length - 1) * 2}rem)`,
              }}
            >
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group glass-card-hover rounded-2xl overflow-hidden hover:-translate-y-2 snap-start shrink-0 w-[var(--card-w)]"
                >
                  <div className="h-48 relative overflow-hidden bg-ink-card">
                    <img
                      src={post.coverImage}
                      alt={`${post.title} kapak görseli`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20 mix-blend-overlay`} />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <a href={`#yazi/${post.slug}`} className="block">
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-muted text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    </a>

                    <div className="flex items-center justify-between pt-4 divider-glass">
                      <div className="flex items-center gap-4 text-faint text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <a
                        href={`#yazi/${post.slug}`}
                        className="text-sky-400 hover:text-sky-300 transition-colors"
                        aria-label={`${post.title} yazısını oku`}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          )}

          {!loading && posts.length > VISIBLE_COUNT && (
            <p className="text-faint text-sm text-center mt-4">
              Daha fazla yazı için okları kullanın veya yana kaydırın
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/yasar_kirmiziyuz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-brand px-8 py-4"
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
