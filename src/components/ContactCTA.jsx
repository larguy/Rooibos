import { getWhatsAppUrl } from '../config';
import './ContactCTA.css';

export default function ContactCTA() {
    return (
        <section className="section contact-cta-section">
            <div className="container contact-cta-container">
                <h2 className="cta-title">Hablemos de tu próximo viaje</h2>
                <p className="cta-text">Cada experiencia comienza con una conversación. Escuchamos tu idea y la transformamos en una experiencia con sentido.</p>
                <a href={getWhatsAppUrl("Hola! Quiero diseñar mi experiencia de viaje.")} target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ textDecoration: 'none', display: 'inline-block', boxSizing: 'border-box' }}>Diseñar mi experiencia</a>
            </div>
        </section>
    );
}
