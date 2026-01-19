import "./Home.css";
function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Visa & Passport Assistance Services</h1>

                    <p className="hero-subtitle">
                        USA, China, Schengen, UK, Australia, New Zealand, Dubai, Singapore
                    </p>

                    <p className="hero-text">
                        We provide complete visa assistance, fresh passport applications,
                        renewals, and travel documentation support with expert guidance.
                    </p>

                    <a href="/contact" className="hero-btn">
                        Get Free Consultation
                    </a>
                </div>
            </section>

            {/* WHY US */}
            <section className="about-section">
                <h2>Why VisaConnect Assis?</h2>
                <p>
                    VisaConnect Assis is a trusted private consultancy offering professional
                    guidance for tourist, visitor, and business visa applications.
                </p>

                <p>
                    Our experienced consultants ensure correct documentation, transparent
                    processing, and timely updates throughout your application journey.
                </p>
            </section>

            {/* CONTACT */}
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>Get in touch with us for passport and visa assistance</p>

                <form className="contact-form">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="tel" placeholder="Your Phone Number" />
                    <textarea placeholder="Message" rows="4"></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>
        </>
    );
}

export default Home;
