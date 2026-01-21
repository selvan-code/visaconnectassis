import "./Australia.css";

function Australia() {
    return (
        <div className="australia-page">
            <div className="australia-container">

                {/* LEFT CONTENT */}
                <div className="australia-content">
                    <h2>Australian Visa Services</h2>

                    <p className="intro">
                        VisaConnect Assis provides complete assistance for Australian visas,
                        helping individuals, families, and business travelers apply with
                        confidence. Our expert team ensures correct documentation, proper
                        application filing, and end-to-end guidance.
                    </p>

                    <div className="visa-card">
                        <h3>Australian Tourist Visa</h3>
                        <p>
                            Ideal for holidays, sightseeing, and leisure travel. We assist with
                            documentation, financial proof, itinerary planning, and accommodation
                            details.
                        </p>
                    </div>

                    <div className="visa-card">
                        <h3>Australian Visitor Visa</h3>
                        <p>
                            For visiting family or friends in Australia. We help with invitation
                            letters, sponsor documents, and relationship proof.
                        </p>
                    </div>

                    <div className="visa-card">
                        <h3>Australian Business Visa</h3>
                        <p>
                            For professionals attending meetings, conferences, or short-term
                            business activities. Complete guidance on invitations and compliance.
                        </p>
                    </div>

                    <div className="australia-highlight">
                        Our consultants guide you through every step of the Australian visa
                        process for a smooth and stress-free experience.
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="australia-image">
                    <img
                        src="/image/caption.jpg"
                        alt="Australia Visa Services"
                    />
                </div>

            </div>
        </div>
    );
}

export default Australia;
