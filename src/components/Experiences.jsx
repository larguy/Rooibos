import { useState, useEffect } from 'react';
import './Experiences.css';

// Usamos import.meta.glob de Vite para leer las imágenes de la carpeta public al momento de compilar/desarrollar
const horizontalesModules = import.meta.glob('/public/horizontales/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}');
const verticalesModules = import.meta.glob('/public/verticales/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}');

// Procesamos las rutas para que funcionen correctamente desde el directorio public en el navegador
const horizontales = Object.keys(horizontalesModules).map(path => ({
    src: import.meta.env.BASE_URL + path.replace('/public/', ''), // '/public/horizontales/img.jpg' -> '/Rooibos/horizontales/img.jpg'
    format: 'horizontal'
}));

const verticales = Object.keys(verticalesModules).map(path => ({
    src: import.meta.env.BASE_URL + path.replace('/public/', ''),
    format: 'vertical'
}));

// Combinamos todas las imágenes disponibles
const allImages = [...horizontales, ...verticales];

export default function Experiences() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Mezclamos todas las imágenes aleatoriamente
        const shuffled = [...allImages].sort(() => 0.5 - Math.random());
        
        // Seleccionamos un máximo de 12 imágenes (para que la sección no sea interminable) 
        // ¡Cada vez que recargas, serán 12 fotos distintas!
        setImages(shuffled.slice(0, 12));
    }, []);

    return (
        <section className="section experiences-section">
            <div className="container">
                <h2 className="experiences-title">Experiencias que nos transforman</h2>
                <div className="experiences-grid">
                    {images.map((item, index) => (
                        <div key={index} className={`experience-img-wrapper ${item.format}`}>
                            <img src={item.src} alt={`Destino exótico ${index + 1}`} className="experience-img" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
