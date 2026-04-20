import { useState, useEffect } from 'react';
import './Hero.css';

const backgroundImages = [
    '/portada.jpg',
    '/portada-2.jpg',
    '/portada-3.jpg',
    '/portada-4.jpg'
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
        }, 5000); // Transitions every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="hero">
            {backgroundImages.map((img, index) => (
                <div 
                    key={index}
                    className={`hero-bg-layer ${index === currentImage ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            ))}
            
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-logo-container" style={{ display: 'none' }}>
                    <img src="/brand_logo.png" alt="Rooibos Travel Logo" className="hero-logo" />
                </div>
                <h1 className="hero-title">Viajes que se viven, se sienten y transforman</h1>
                <p className="hero-text">Te acompañamos a diseñar una experiencia a medida, con sentido y una filosofía inspirada en la naturaleza.</p>

                <div className="hero-cta-wrapper">
                    <button className="btn hero-btn">Hablemos de tu viaje</button>
                </div>
            </div>
        </section>
    );
}
