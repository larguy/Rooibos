import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>ROOIBOS TRAVEL</h3>
                    <p>Viajes que se viven, se sienten y transforman.</p>
                </div>

                <div className="footer-contact">
                    <h4>Contacto</h4>
                    <div className="contact-item">
                        <Phone size={16} /> <span>+54 9 11 4028-7624</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={16} /> <span>contacto@rooibos.tur.ar</span>
                    </div>
                </div>

                <div className="footer-social">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="#" className="social-link"><Instagram /></a>
                        <a href="#" className="social-link"><Facebook /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Rooibos Travel. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
