import { useRef, useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import ScrollReveal from './ScrollReveal';

const VISIBLE_COUNT = 3;

const Blog = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(blogPosts.length > VISIBLE_COUNT);

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
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('article');
    if (!card) return;
    const gap = 12;
    const amount = card.getBoundingClientRect().width + gap;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="yazilarim" className="py-12 md:py-20 section-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">
              <span className="gradient-heading">Yazılarım</span>
            </h2>
            <p className="text-muted text-sm md:text-lg max-w-2xl mx-auto px-2">
              Web geliştirme, freelance çalışma ve projelerim hakkında notlar, deneyimler ve ipuçları
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="mb-6 md:mb-10">
          <div className="flex items-center justify-between mb-4 md:mb-8">
            <h3 className="text-base md:text-xl font-semibold text-white flex items-center gap-2 md:gap-3">
              <span className="w-1 h-5 md:h-6 bg-gradient-to-b from-sky-400 to-indigo-500 rounded-full"></span>
              Son Yazılarım
            </h3>

            {blogPosts.length > VISIBLE_COUNT && (
              <div className="flex items-center gap-1.5 md:gap-2">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  aria-label="Önceki yazılar"
                  className="w-8 h-8 md:w-10 md:h-10 icon-box-glass rounded-lg flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-sky-400/30 transition-all"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  aria-label="Sonraki yazılar"
                  className="w-8 h-8 md:w-10 md:h-10 icon-box-glass rounded-lg flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-sky-400/30 transition-all"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            )}
          </div>

          <div
            ref={scrollRef}
            className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [--card-w:72%] [--card-gap:0.75rem] sm:[--card-w:calc((100%-2rem)/2)] sm:[--card-gap:1.25rem] lg:[--card-w:calc((100%-4rem)/3)] lg:[--card-gap:2rem]"
          >
            <div
              className="flex"
              style={{
                gap: 'var(--card-gap)',
                width: `calc(${blogPosts.length} * var(--card-w) + ${blogPosts.length - 1} * var(--card-gap))`,
              }}
            >
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group glass-card-hover rounded-xl md:rounded-2xl overflow-hidden md:hover:-translate-y-2 snap-start shrink-0 w-[var(--card-w)]"
                >
                  <div className="h-28 sm:h-36 md:h-48 relative overflow-hidden bg-ink-card">
                    <img
                      src={post.coverImage}
                      alt={`${post.title} kapak görseli`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20 mix-blend-overlay`} />
                    <div className="absolute top-2 left-2 md:top-4 md:left-4">
                      <span className="px-2 py-0.5 md:px-3 md:py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-[10px] md:text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-5 md:p-6">
                    <a href={`#yazi/${post.slug}`} className="block">
                      <h4 className="text-sm sm:text-base md:text-xl font-bold text-white mb-1.5 md:mb-3 group-hover:text-sky-400 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-muted text-xs sm:text-sm mb-2 md:mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </a>

                    <div className="flex items-center justify-between pt-2.5 md:pt-4 divider-glass">
                      <div className="flex items-center gap-2 md:gap-4 text-faint text-[10px] sm:text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                          <span className="sm:hidden">{post.date.split(' ').slice(0, 2).join(' ')}</span>
                          <span className="hidden sm:inline">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <a
                        href={`#yazi/${post.slug}`}
                        className="text-sky-400 hover:text-sky-300 transition-colors p-1"
                        aria-label={`${post.title} yazısını oku`}
                      >
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {blogPosts.length > VISIBLE_COUNT && (
            <p className="text-faint text-xs md:text-sm text-center mt-3 md:mt-4">
              Daha fazla yazı için kaydırın
            </p>
          )}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={100}>
          <div className="mt-6 md:mt-8 text-center">
          <a
            href="https://www.instagram.com/yasar_kirmiziyuz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-brand text-sm md:text-base px-5 py-2.5 md:px-8 md:py-4"
          >
            Instagram&apos;dan Takip Et
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Blog;
