import { useState } from 'react';
import { MessageCircle, Send, X, Mail, Phone } from 'lucide-react';

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'from-green-500 to-green-600',
      link: 'https://wa.me/905338426383?text=Merhaba,%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum',
    },
    {
      icon: Mail,
      label: 'E-mail',
      color: 'from-purple-500 to-purple-600',
      link: 'mailto:snkirmiziyuzyasar61@gmail.com',
    },
    {
      icon: Phone,
      label: 'Telefon',
      color: 'from-orange-500 to-orange-600',
      link: 'tel:+905338426383',
    },
  ];

  return (
    <div className="fixed z-50 flex flex-col items-end gap-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6">
      {/* Action Buttons */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
        }`}
      >
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 bg-gradient-to-r ${action.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <action.icon className="w-5 h-5" />
            <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
          </a>
        ))}
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default FloatingActions;
