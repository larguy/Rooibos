import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config';

const WhatsAppButton = () => {
    return (
        <a
            href={getWhatsAppUrl()}
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsAppButton;
