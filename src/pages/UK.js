<<<<<<< Updated upstream
=======
import "./UK.css";

>>>>>>> Stashed changes
function UK() {
    return (
        <section className="uk-section">
            <div className="uk-container">

                <h2 className="uk-title">UK Visa Services</h2>

                <p className="uk-intro">
                    VisaConnect Assis offers complete support for UK visa applications,
                    assisting travelers, families, and business professionals with
                    accurate documentation and transparent processing.
                </p>

                <div className="uk-row">

                    {/* ===== LEFT CONTENT ===== */}
                    <div className="uk-content">

                        <div className="uk-card">
                            <h3>UK Tourist Visa</h3>
                            <p>
                                Suitable for individuals planning holidays, sightseeing,
                                cultural exploration, or short-term leisure travel to the
                                United Kingdom. We assist with documentation, travel itinerary,
                                accommodation proof, and financial requirements.
                            </p>
                        </div>

                        <div className="uk-card">
                            <h3>UK Visitor Visa</h3>
                            <p>
                                Ideal for applicants visiting family or friends in the UK.
                                We help prepare invitation letters, sponsor documents,
                                relationship proof, and ensure compliance with UK immigration
                                guidelines.
                            </p>
                        </div>

                        <div className="uk-card">
                            <h3>UK Business Visa</h3>
                            <p>
                                Designed for professionals attending meetings, conferences,
                                training sessions, exhibitions, or business events. Our team
                                assists with employer letters, business invitations, and
                                financial documentation.
                            </p>
                        </div>

                    </div>

                    {/* ===== RIGHT IMAGE ===== */}
                    <div className="uk-image">
                        <img
                            src="/image/london.jpg"
                            alt="UK Visa Services"
                        />
                    </div>

                </div>

                <div className="uk-highlight">
                    Our consultants ensure accuracy, compliance, and timely submission,
                    making your UK visa process smooth, reliable, and stress-free.
                </div>

            </div>
        </section>
    );
}

export default UK;
