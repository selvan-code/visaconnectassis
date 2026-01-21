import "./Home.css";

function Home() {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="hero">
                <img
                    src="/image/home-hero.jpg"
                    alt="Visa and Passport Assistance"
                    className="hero-image"
                />

                <div className="hero-overlay">
                    <h1>Visa & Passport Assistance Services</h1>

                    <p className="hero-subtitle">
                        USA • UK • Australia • Schengen • Canada • Dubai • Singapore
                    </p>

                    <p className="hero-text">
                        We provide professional passport and visa assistance including
                        fresh passport applications, renewals, urgent appointments,
                        and complete documentation support.
                    </p>

                    <a href="/contact" className="hero-btn">
                        Get Free Consultation
                    </a>
                </div>
            </section>

            {/* ================= PASSPORT SERVICES ================= */}
            <section className="services-section">
                <h2 className="section-title">Passport Services</h2>

                <div className="services-grid">
                    <div className="service-card">
                        <h3>New Passport</h3>
                        <p>Normal & Tatkal appointments with end-to-end assistance.</p>
                    </div>

                    <div className="service-card">
                        <h3>Passport Renewal</h3>
                        <p>Renewal support for expired or soon-to-expire passports.</p>
                    </div>

                    <div className="service-card">
                        <h3>Lost / Damaged Passport</h3>
                        <p>Expert handling for lost or damaged passport cases.</p>
                    </div>

                    <div className="service-card">
                        <h3>Child Passport</h3>
                        <p>Passport services for minors with correct documentation.</p>
                    </div>

                    <div className="service-card">
                        <h3>Name Change</h3>
                        <p>Name correction and change after marriage or legal update.</p>
                    </div>
                </div>
            </section>

            {/* ================= VISA SERVICES ================= */}
            <section className="services-section light-bg">
                <h2 className="section-title">Visa Services</h2>

                <div className="services-grid">
                    <div className="service-card">
                        <h3>Tourist / Visitor Visa</h3>
                        <p>Visa assistance for tourism and family visits.</p>
                    </div>

                    <div className="service-card">
                        <h3>Business Visa</h3>
                        <p>Business and conference visa documentation support.</p>
                    </div>

                    <div className="service-card">
                        <h3>US Visa Services</h3>
                        <p>
                            B1/B2 Visa, Urgent Appointments, Fresh & Dropbox processing.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Stamping & E-Visa</h3>
                        <p>E-Visa and stamping services for selected countries.</p>
                    </div>
                </div>
            </section>

            {/* ================= COUNTRIES ================= */}
            <section className="countries-section">
                <h2 className="section-title">Countries We Serve</h2>

                <p className="countries-text">
                    We provide passport and visa services for the following countries:
                </p>

                <div className="countries-grid">
                    <span>🇺🇸 United States</span>
                    <span>🇬🇧 United Kingdom</span>
                    <span>🇦🇺 Australia</span>
                    <span>🇨🇦 Canada</span>
                    <span>🇪🇺 Schengen</span>
                    <span>🇸🇬 Singapore</span>
                    <span>🇦🇪 Dubai</span>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="cta-section">
                <h2>Need Expert Visa Guidance?</h2>
                <p>Contact our consultants today for reliable support.</p>

                <a href="/contact" className="cta-btn">
                    Contact Us Now
                </a>
            </section>
        </>
    );
}

export default Home;
