import { Code2, Rocket, Shield, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Modern Teknolojiler',
      description: 'React, Next.js, TypeScript ve en güncel web teknolojileri ile geliştirme',
    },
    {
      icon: Zap,
      title: 'Hızlı & Performanslı',
      description: 'Optimize edilmiş kod yapısı ile yıldırım hızında yüklenen siteler',
    },
    {
      icon: Shield,
      title: 'Güvenli & Güncel',
      description: 'En son güvenlik standartları ve düzenli güncellemeler',
    },
    {
      icon: Rocket,
      title: 'SEO Optimize',
      description: 'Google\'da üst sıralarda yer almak için optimize edilmiş yapı',
    },
  ];

  return (
    <section id="about" className="py-20 section-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Hakkımda
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              8 yıllık kodlama deneyimim ve 3 yıllık profesyonel web geliştirme tecrübemle, işletmeden bireye her projeye özel çözümler sunuyorum
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 p-1">
                  <div className="w-full h-full rounded-full bg-ink-soft flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-blue-400" />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Yaşar <span className="text-muted font-normal text-lg">· Live Kırmızıyüz</span>
                </h3>
                <p className="text-muted text-sm mb-3">Web Geliştirici · Backend Coder · Full-Stack · Freelance</p>
                <p className="text-subtle leading-relaxed mb-4">
                  Merhaba! Ben Yaşar — script dünyasında sekiz, web geliştirmede üç yılı geride bıraktım. 
                  Şirket sitesinden mağazaya, kurs platformundan kişisel bloga; FiveM gibi niş sektörlerdeki detaylı kodlamadan ajans projelerine kadar freelance olarak çalışıyorum.
                </p>
                <p className="text-muted leading-relaxed">
                  Vizyonum ve hevesimle büyüyen bilgim, dürüstlüğümle birleşince işler farklılaşıyor. 
                  Hızlı teslim, özenli ilgi ve sürekli iletişim benim için standart — tek başıma çalıştığım için projeniz doğrudan bana emanet. Satırlarınız bol olsun.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 80}
            >
              <div className="group glass-card-hover rounded-xl p-6 hover:-translate-y-1 h-full">
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={100}>
          <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Kullandığım Teknolojiler</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Vercel', 'Git', 'Figma', 'SEO', 'Responsive Design'].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 tag-glass rounded-full hover:border-sky-400/30 transition-all hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
