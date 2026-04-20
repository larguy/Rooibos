import './Philosophy.css';

export default function Philosophy() {
    return (
        <section className="section philosophy-section" id="filosofia">
            <div className="container">
                <h2 className="philosophy-title">Una filosofía inspirada en la naturaleza</h2>
                
                <div className="philosophy-content">
                    <div className="philosophy-text">
                        <p><strong>Nuestra esencia</strong> se inspira en la planta sudafricana Rooibos —símbolo de vitalidad y calma—. Representamos una manera de viajar donde lo artesanal y lo profesional conviven en equilibrio. Cada itinerario es una experiencia diseñada para quienes buscan vivir un destino con respeto, curiosidad y profundidad.</p>
                        
                        <p>En Rooibos Travel trabajamos desde una filosofía conectada con la naturaleza y sus ciclos. Nos inspiramos en la armonía de los cuatro elementos, presentes en cada viaje que diseñamos</p>
                        
                        <p>El mar, siempre presente en nuestra identidad, simboliza el horizonte desde el cual nace todo viaje: un punto de partida que invita a avanzar con conciencia y apertura.</p>
                    </div>
                    
                    <div className="philosophy-image-container">
                        <img src={`${import.meta.env.BASE_URL}filosofia-rooibos.jpg`} alt="Hojas de té Rooibos" className="philosophy-image" />
                    </div>
                </div>

                <div className="philosophy-cta">
                    <button className="philosophy-btn">Hablemos de tu próximo viaje</button>
                </div>
            </div>
        </section>
    );
}
