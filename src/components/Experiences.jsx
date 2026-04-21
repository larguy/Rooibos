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
        const shuffledH = [...horizontales].sort(() => 0.5 - Math.random());
        const shuffledV = [...verticales].sort(() => 0.5 - Math.random());
        
        // Seleccionamos exactamente 6 de cada formato
        const selH = shuffledH.slice(0, 6);
        const selV = shuffledV.slice(0, 6);

        // Patrón mágico para que encajen perfecto en rectángulos de 4 columnas (PC) y 2 columnas (Móvil)
        // Secuencia: V, H, V, H, H, V, H, V, V, V, H, H
        const pattern = [
            selV[0], selH[0], selV[1], selH[1],
            selH[2], selV[2], selH[3], selV[3],
            selV[4], selV[5], selH[4], selH[5]
        ];
        
        setImages(pattern);
    }, []);

    return (
        <section className="section experiences-section">
            <div className="container">
                <h2 className="experiences-title">Experiencias que nos transforman</h2>
                <div className="experiences-grid">
                    {images.map((item, index) => (
                        <div key={index} className={`experience-img-wrapper ${item?.format || ''}`}>
                            <img src={item?.src} alt={`Destino exótico ${index + 1}`} className="experience-img" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
