import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/yasar_kirmiziyuz/',
    icon: InstagramIcon,
    hoverClass: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/905338426383',
    icon: WhatsAppIcon,
    hoverClass: 'hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '72b0ac4e-d0a1-4d4f-a8e0-8a4e5d3f0d9f', // Web3Forms Access Key
          subject: `Yeni Web Sitesi Talebi - ${formData.service}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: 'snkirmiziyuzyasar61@gmail.com'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-posta',
      value: 'snkirmiziyuzyasar61@gmail.com',
      link: 'mailto:snkirmiziyuzyasar61@gmail.com',
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 533 842 63 83',
      link: 'tel:+905338426383',
    },
    {
      icon: MapPin,
      title: 'Konum',
      value: 'İskele, KKTC',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 section-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-heading">
              İletişime Geçin
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Projeniz hakkında konuşmak için benimle iletişime geçin. Size en kısa sürede dönüş yapacağım.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="block glass-card-hover rounded-xl p-6 hover:scale-105"
              >
                <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-blue-400" />
              </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                    <p className="text-muted text-sm">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Sosyal Medya</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-12 h-12 icon-box-glass rounded-lg flex items-center justify-center transition-all ${social.hoverClass}`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mesajınız Gönderildi!</h3>
                  <p className="text-muted">En kısa sürede size dönüş yapacağım.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-subtle text-sm font-medium mb-2">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-glass w-full px-4 py-3 rounded-lg"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-subtle text-sm font-medium mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-glass w-full px-4 py-3 rounded-lg"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-subtle text-sm font-medium mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-glass w-full px-4 py-3 rounded-lg"
                        placeholder="+90 533 842 63 83"
                      />
                    </div>
                    <div>
                      <label className="block text-subtle text-sm font-medium mb-2">
                        Hizmet Türü *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="input-glass w-full px-4 py-3 rounded-lg"
                      >
                        <option value="">Seçiniz</option>
                        <option value="web">Web Sitesi Geliştirme</option>
                        <option value="ecommerce">E-Ticaret</option>
                        <option value="seo">SEO Optimizasyonu</option>
                        <option value="maintenance">Bakım & Destek</option>
                        <option value="other">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-subtle text-sm font-medium mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-glass w-full px-4 py-3 rounded-lg resize-none"
                      placeholder="Projeniz hakkında detayları paylaşın..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Mesaj Gönder
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
