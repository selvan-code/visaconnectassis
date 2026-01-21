import "./EU.css";

function EU() {
    return (
        <section className="eu-section">
            <div className="eu-container">

                <h2 className="eu-title">EU & Schengen Visa Services</h2>

                <p className="eu-intro">
                    VisaConnect Assis provides complete assistance for European Union (EU)
                    and Schengen visa applications. We help travelers, families, and
                    professionals apply with correct documentation and expert guidance,
                    ensuring a smooth and transparent visa process.
                </p>

                <div className="eu-row">

                    {/* LEFT CONTENT */}
                    <div className="eu-content">

                        <div className="eu-card">
                            <h3>Schengen Tourist Visa</h3>
                            <p>
                                The Schengen Tourist Visa allows individuals to travel across
                                multiple European countries for holidays, sightseeing, and
                                leisure. With a single visa, travelers can visit France,
                                Germany, Italy, Spain, Switzerland, and other Schengen nations.
                                We assist with itinerary planning, accommodation, financial
                                proof, and travel insurance.
                            </p>
                        </div>

                        <div className="eu-card">
                            <h3>Schengen Visitor Visa</h3>
                            <p>
                                Suitable for applicants visiting family members or friends
                                residing in European countries. Our team helps prepare
                                invitation letters, relationship proof, sponsor documents, and
                                all required supporting paperwork as per embassy guidelines.
                            </p>
                        </div>

                        <div className="eu-card">
                            <h3>Schengen Business Visa</h3>
                            <p>
                                Designed for professionals attending business meetings,
                                conferences, exhibitions, and trade fairs across Europe. We
                                guide applicants with business invitations, employer letters,
                                financial records, and compliance requirements.
                            </p>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="eu-image">
                        <img
                            src="/image/EU.jpg"
                            alt="EU Schengen Visa Assistance"
                        />
                    </div>

                </div>

                <div className="eu-highlight">
                    Our experienced consultants guide you through every step of the EU and
                    Schengen visa process, ensuring a reliable, accurate, and stress-free
                    experience from application submission to final decision.
                </div>

            </div>
        </section>
    );
}

export default EU;
