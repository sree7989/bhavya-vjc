"use client";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => (
  <div className="fixed bottom-6 right-5 z-50 flex items-center space-x-0">
    <a
      href="https://wa.me/+919160449000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="flex items-center group"
      style={{ textDecoration: "none" }}
    >
      <span className="relative flex items-center justify-center">
        {/* Pulsing Shadow Circle */}
        <span
          className="absolute inset-0 rounded-full pointer-events-none whatsapp-pulse"
          aria-hidden="true"
        />
        {/* WhatsApp Icon with Shake */}
        <span
          className="bg-[#25d366] p-2 lg:p-4 rounded-full z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#128c7e] whatsapp-shake"
          style={{
            minWidth: 44,
            minHeight: 44,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.71)",
          }}
        >
          <FaWhatsapp size={30} color="white" aria-hidden="true" focusable="false" />
        </span>
      </span>
    </a>
    <style jsx>{`
      .whatsapp-pulse {
        z-index: 0;
        background: radial-gradient(circle, rgba(130, 255, 5, 0.64) 60%, transparent 100%);
        animation: whatsappShadowPulse 1.2s infinite;
      }
      @keyframes whatsappShadowPulse {
        0% {
          opacity: 0.8;
          transform: scale(1);
          box-shadow: 0 0 16px 4px #eb7b03;
        }
        50% {
          opacity: 0.35;
          transform: scale(1.6);
          box-shadow: 0 0 36px 18px #eb7b03;
        }
        100% {
          opacity: 0.8;
          transform: scale(1);
          box-shadow: 0 0 16px 4px #eb7b03;
        }
      }
      .whatsapp-shake {
        animation: whatsappShake 1.2s infinite;
      }
      @keyframes whatsappShake {
        0% { transform: rotate(0deg);}
        10% { transform: rotate(-60deg);}
        20% { transform: rotate(60deg);}
        30% { transform: rotate(-60deg);}
        40% { transform: rotate(60deg);}
        50% { transform: rotate(0deg);}
        100% { transform: rotate(0deg);}
      }
    `}</style>
  </div>
);

export default FloatingWhatsApp;