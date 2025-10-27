import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your real estate design services.");
    window.open(`https://wa.me/918398910346?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full gradient-gold shadow-gold hover:scale-110 transition-bounce group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none shadow-luxury">
        Chat on WhatsApp
      </span>
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full gradient-gold animate-ping opacity-20" />
    </button>
  );
};

export default WhatsAppButton;
