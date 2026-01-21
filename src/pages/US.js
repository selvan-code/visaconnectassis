import "./US.css";

function US() {
    return (
        <section className="us-section">
            <div className="us-container">

                <h2 className="us-title">United States (US) Visa Services</h2>

                <p className="us-intro">
                    VisaConnect Assis provides expert assistance for United States visa
                    applications, helping individuals, families, and professionals apply
                    with confidence through accurate documentation and transparent
                    processing.
                </p>

                <div className="us-row">

                    {/* LEFT CONTENT */}
                    <div className="us-content">

                        <div className="us-card">
                            <h3>US Tourist Visa (B2)</h3>
                            <p>
                                Suitable for individuals traveling to the United States for
                                holidays, sightseeing, or leisure. We assist with application
                                preparation, financial documentation, travel itinerary, and
                                interview guidance.
                            </p>
                        </div>

                        <div className="us-card">
                            <h3>US Visitor Visa (B2)</h3>
                            <p>
                                Ideal for applicants visiting family or friends in the US.
                                Our team supports invitation letters, relationship proof,
                                sponsor documents, and visa interview preparation.
                            </p>
                        </div>

                        <div className="us-card">
                            <h3>US Business Visa (B1)</h3>
                            <p>
                                Designed for professionals attending meetings, conferences,
                                training programs, or exhibitions. We guide applicants with
                                business invitations, employer letters, and financial records.
                            </p>
                        </div>

                        <div className="us-card">
                            <h3>US B1/B2 Visa</h3>
                            <p>
                                A combined visa category for business and tourism purposes.
                                We assist with DS-160 form filling, appointment booking, and
                                complete interview preparation.
                            </p>
                        </div>

                        <div className="us-card">
                            <h3>US H1 / H1B Work Visa</h3>
                            <p>
                                Designed for skilled professionals employed by US-based
                                companies. We guide applicants through eligibility checks,
                                employer documentation, and petition support.
                            </p>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="us-image">
                        <img
                            src="/image/usa.jpg"
                            alt="US Visa Services"
                        />

                    </div>

                </div>

                <div className="us-highlight">
                    Our experienced consultants guide you through every stage of the US
                    visa process, from application filing to interview preparation,
                    ensuring a smooth and stress-free experience.
                </div>

            </div>
        </section>
    );
}

export default US;
