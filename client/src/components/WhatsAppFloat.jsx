import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '972501234567';
const whatsappLink = `https://wa.me/${whatsappNumber}`;

function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="פתיחת שיחה בוואטסאפ"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFloat;
