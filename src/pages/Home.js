function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <div className="hero">
                <div className="hero-content">
                    <p className="welcome">WELCOME TO VISACONNECT ASSIS</p>
                    <h1>Visa & Passport Assistance Services</h1>
                    <h3>
                        USA, China, Schengen, UK, Australia, New Zealand, Dubai, Singapore
                    </h3>
                    <p className="description">
                        We provide complete visa assistance, fresh passport applications,
                        renewals, and travel documentation support with expert guidance.
                    </p>
                    <h2 className="brand">VISACONNECT ASSIS</h2>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="contact-section">
                <h2>Contact Us</h2>
                <p className="contact-subtitle">
                    Get in touch with us for passport and visa assistance
                </p>

                <form className="contact-form">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="tel" placeholder="Your Phone Number" />

                    <textarea placeholder="Message"></textarea>

                    <button type="submit">SEND</button>
                </form>
            </div>
        </>
    );
}

export default Home;
