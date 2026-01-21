import "./About.css";

function About() {
    return (
        <section className="about-section">

            <h2>About VisaConnectAssis</h2>

            <p className="about-intro">
                VisaConnect Assis is a trusted private visa and passport consultancy
                committed to providing reliable guidance and transparent processing
                for individuals and families.
            </p>

            {/* IMAGE + TEXT ROW */}
            <div className="about-row">

                {/* LEFT IMAGE */}
                <div className="about-image">
                    <img
                        src="/image/consultants-reviewing-information-visa-1600x900.jpg"
                        alt="Visa and Passport Services"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="about-content">
                    <div className="about-block">
                        <h3>Who We Are</h3>
                        <p>
                            We specialize in assisting applicants with passport services
                            and international visa applications. Our experienced consultants
                            ensure accurate documentation and a smooth application process.
                        </p>
                    </div>

                    <div className="about-block">
                        <h3>What We Do</h3>
                        <p>
                            Our services include passport applications and renewals,
                            tourist, visitor, and business visas, US B1/B2 visa assistance,
                            urgent appointments, and travel documentation.
                        </p>
                    </div>
                </div>

            </div>

            {/* COUNTRIES */}
            <div className="about-block">
                <h3>Countries We Assist</h3>
                <p>
                    United States, United Kingdom, Australia, New Zealand,
                    Schengen countries, and other global destinations.
                </p>
            </div>

            {/* DISCLAIMER */}
            <div className="about-highlight">
                <p>
                    <strong>Note:</strong> VisaConnect Assis is a private consultancy and
                    is not affiliated with any government or embassy.
                </p>
            </div>

        </section>
    );
}

export default About;
