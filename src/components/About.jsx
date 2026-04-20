import './About.css';

export default function About() {
    return (
        <section className="section about-section" id="nosotros">
            <div className="container about-container">
                <div className="about-text-content">
                    <h2 className="about-title">Nuestra manera de<br/>viajar</h2>
                    <div className="about-text">
                        <p>Rooibos Travel nace de más de 20 años de experiencia personal y profesional en el turismo, recorriendo destinos por todo el mundo con una convicción profunda: un buen viaje no se improvisa, se diseña con conocimiento y sensibilidad.</p>
                        <p>Mi primer destino internacional fue Sudáfrica, un viaje que marcó el inicio de una forma particular de mirar el mundo y de entender el turismo: desde la conexión con el entorno, el respeto por cada lugar y la importancia de los detalles.</p>
                    </div>
                </div>
                <div className="about-image-content">
                    <img src="/manera-de-viajar.jpg" alt="Nuestra manera de viajar" className="about-image" />
                </div>
            </div>
        </section>
    );
}
