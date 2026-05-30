import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              İletişime Geçin
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                className="block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-blue-400" />
              </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Sosyal Medya</h3>
              <a
                href="https://www.instagram.com/yasar_kirmiziyuz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all"
              >
                <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Instagram</p>
                  <p className="text-gray-400 text-xs">@yasar_kirmiziyuz</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mesajınız Gönderildi!</h3>
                  <p className="text-gray-400">En kısa sürede size dönüş yapacağım.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="+90 555 123 45 67"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Hizmet Türü *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
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
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
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
