import './Destinations.css';

export default function Destinations() {
    return (
        <section className="section destinations-section" id="destinations">
            <div className="container">
                <h2 className="section-title text-center">Destinos que inspiran</h2>

                <div className="destinations-content">
                    <p>Diseñamos experiencias de viaje a medida, pensadas para quienes buscan algo más que un destino, combinando conocimiento profesional y experiencia real.</p>
                    <p>Desde la energía vibrante de Europa, la diversidad y el pulso urbano de América, la espiritualidad y el exotismo de Asia, la inmensidad natural de África, los paisajes infinitos de Oceanía o la magia blanca de la Antártida, cada propuesta nace del deseo de explorar y conectar.</p>
                    <p>Viajes exóticos, aventureros, urbanos o de playa, combinados o por separado, siempre creados de forma personal y consciente. Acompañamos cada etapa con cercanía, escucha y conocimiento, cuidando cada detalle para transformar una idea en un viaje de ensueño, auténtico y memorable.</p>
                </div>

                {/* Photos per continent placeholder */}
                <div className="destinations-grid">
                    <div className="destination-card">
                        <div className="destination-img" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1723061790505-5d17b39cd67d?q=80&w=624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                        <div className="destination-overlay">Europa</div>
                    </div>
                    <div className="destination-card">
                        <div className="destination-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1415804941191-bc0c3bbac10d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                        <div className="destination-overlay">América</div>
                    </div>
                    <div className="destination-card">
                        <div className="destination-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1642325203922-a7dbd7539414?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                        <div className="destination-overlay">Asia</div>
                    </div>
                    <div className="destination-card">
                        <div className="destination-img" style={{ backgroundImage: 'url(https://images.pexels.com/photos/10600292/pexels-photo-10600292.jpeg)' }}></div>
                        <div className="destination-overlay">África</div>
                    </div>
                    <div className="destination-card">
                        <div className="destination-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1765571093226-a6dcfac3b556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhaXNhamUlMjBudWV2YSUyMHplbGFuZGF8ZW58MHwyfDB8fHww)' }}></div>
                        <div className="destination-overlay">Oceanía</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
