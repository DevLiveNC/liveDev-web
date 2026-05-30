import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ali Ekren',
      role: 'Fitness Koçu',
      image: '💪',
      rating: 5,
      text: 'İsteklerim üzerine örnek görseller attığım siteyi benim attığım halinden çok daha iyi fikirleri ile yaptı, ve inanılmaz güzel bir sonuç ortaya koydu. Kesinlikle tavsiye ederim, kaliteli ve hızlı bir iş oldu. Teşekkürler Yaşar.',
 
    },
  ];

  return (
    <section className="py-20 section-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-heading">
                Müşteri Yorumları
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Mutlu müşterilerimizin deneyimlerini keşfedin
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <div className="group glass-card-hover rounded-2xl p-8 hover:-translate-y-2 h-full">
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
              <p className="text-subtle mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 divider-glass">
                <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-muted text-sm">{testimonial.role}</p>
                </div>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={100}>
          <div className="mt-16 text-center">
          <p className="text-muted mb-6">Siz de mutlu müşterilerimize katılın!</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-brand px-8 py-4"
          >
            Hemen Başlayın
          </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
