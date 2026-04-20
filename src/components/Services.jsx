import './Services.css';

const services = [
    {
        title: "Viajes a Medida",
        description: "Diseñamos experiencias únicas para personas que buscan viajes bien pensados, con criterio y acompañados de principio a fin.",
        image: import.meta.env.BASE_URL + "servicio-medida.jpg"
    },
    {
        title: "Viajes Corporativos",
        description: "Soluciones exclusivas para empresas y eventos especiales, ocupándonos de cada detalle para transformar una idea en una experiencia memorable.",
        image: import.meta.env.BASE_URL + "servicio-corporativo.jpg"
    },
    {
        title: "Salidas Grupales",
        description: "Circuitos internacionales y viajes grupales diseñados con cercanía y conocimiento, conectando con la cultura y naturaleza auténtica.",
        image: import.meta.env.BASE_URL + "servicio-grupal.jpg"
    },
    {
        title: "Eventos y Deportes",
        description: "Armamos cada detalle para que puedas vivir tu evento cultural favorito o ese partido soñado, con un viaje pensado a tu medida.",
        image: import.meta.env.BASE_URL + "servicio-eventos.jpg"
    }
];

export default function Services() {
    return (
        <section className="section services-section" id="servicios">
            <div className="container">
                <div className="services-intro">
                    <h2 className="section-title">Diseñamos tu viaje a medida</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-card-image-wrapper">
                                <img src={service.image} alt={service.title} className="service-card-image" />
                            </div>
                            <div className="service-card-content">
                                <h3 className="service-card-title">{service.title}</h3>
                                <p className="service-card-desc">{service.description}</p>
                                <button className="service-btn">Explorar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
