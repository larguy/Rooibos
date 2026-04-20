import { useState } from 'react';
import { Mail, Phone, Clock, Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <img src={`${import.meta.env.BASE_URL}logo_t.png`} alt="Rooibos Travel Logo Icon" className="logo-img logo-t" />
          <img src={`${import.meta.env.BASE_URL}logo_nm.png`} alt="Rooibos Travel Logo Text" className="logo-img logo-nm" />
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={toggleMenu}>Inicio</a>
          <a href="#destinations" onClick={toggleMenu}>Destinos</a>
          <a href="#values" onClick={toggleMenu}>Filosofía</a>
          <a href="#contact" onClick={toggleMenu}>Contacto</a>
        </nav>

        <div className="header-info">
          <div className="info-item">
            <Phone size={18} className="icon" />
            <span>+54 9 11 4028-7624</span>
          </div>
          <div className="info-item">
            <Mail size={18} className="icon" />
            <span>contacto@rooibos.tur.ar</span>
          </div>
          <div className="info-item">
            <Clock size={18} className="icon" />
            <span>Lun - Vie: 9am - 18pm</span>
          </div>
        </div>
      </div>
    </header>
  );
}
