'use client';

import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  const phoneNumber = '1234567890'; // Replace with your actual WhatsApp number
  const message = '¡Hola! Me gustaría obtener más información sobre sus servicios.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-20 h-20 rounded-full bg-black-900 hover:bg-black-800 text-white shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105"
        style={{
          animation: 'float 3s ease-in-out infinite'
        }}
        aria-label="Chatear por WhatsApp"
      >
        <FaWhatsapp className="w-12 h-12" style={{ color: 'white' }} />
      </a>
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
