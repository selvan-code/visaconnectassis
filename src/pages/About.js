function About() {
    return (
<<<<<<< Updated upstream
        <div className="about-section">
            <h2>About VisaConnect Assist</h2>
=======
        <section className="about-section">

            <h2>About VisaConnectAssis</h2>
>>>>>>> Stashed changes

            <p>
                VisaConnect Assist is a trusted passport and visa consultancy offering
                expert guidance and fast, transparent processing. We help individuals
                and families complete their passport and visa requirements with ease.
            </p>

<<<<<<< Updated upstream
            <p>
                Our services cover passport applications and renewals, tourist, visit,
                and business visas, US B1/B2 processing, urgent appointments, travel
                insurance, and complete travel support.
            </p>

            <p>
                We assist with visas for the United States of America, United Kingdom,
                Canada, Australia, New Zealand, Europe, and many other destinations
                worldwide, ensuring a smooth and hassle-free experience.
            </p>
        </div>
=======
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
>>>>>>> Stashed changes
    );
}

export default About;
