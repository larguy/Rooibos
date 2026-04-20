export const WHATSAPP_NUMBER = '5491140287624';

export const getWhatsAppUrl = (message = 'Hola! Me gustaría más información.') => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
