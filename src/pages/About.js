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

            <div className="about-block">
                <h3>Who We Are</h3>
                <p>
                    We specialize in assisting applicants with passport services and
                    international visa applications. Our experienced consultants ensure
                    accurate documentation, compliance with visa requirements, and a
                    smooth application process from start to finish.
                </p>
            </div>

            <div className="about-block">
                <h3>What We Do</h3>
                <p>
                    Our services include passport applications and renewals, tourist,
                    visitor, and business visas, US B1/B2 visa assistance, urgent
                    appointment support, travel insurance, and end-to-end travel
                    documentation guidance.
                </p>
            </div>

            <div className="about-block">
                <h3>Countries We Assist</h3>
                <p>
                    We provide visa assistance for the United States of America, United
                    Kingdom, Australia, New Zealand, Schengen countries, and several
                    other international destinations, ensuring a hassle-free experience
                    for our clients.
                </p>
            </div>

            <div className="about-highlight">
                <p>
                    <strong>Note:</strong> VisaConnect Assis is a private consultancy and is
                    not affiliated with any government, embassy, or immigration authority.
                    Final visa decisions are made solely by the respective authorities.
                </p>
            </div>
        </section>
    );
}

export default About;
