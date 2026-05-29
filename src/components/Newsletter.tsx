import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Newsletter subscription simülasyonu
    console.log('Newsletter subscription:', email);
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Web Trendlerini Kaçırmayın
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          En son web tasarım trendleri, teknoloji güncellemeleri ve özel teklifler için bültenimize abone olun.
        </p>

        {isSubmitted ? (
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
            <CheckCircle className="w-6 h-6 text-white" />
            <span className="text-white font-medium">Teşekkürler! Abone oldunuz.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              required
              className="flex-1 px-6 py-4 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 whitespace-nowrap"
            >
              Abone Ol
            </button>
          </form>
        )}

        <p className="text-white/70 text-sm mt-6">
          Spam göndermiyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
