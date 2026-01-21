import "./Contact.css";

function Contact() {
    return (
        <section className="contact-page">
            <div className="contact-container">

                {/* HEADER */}
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-subtitle">
                    Get in touch with VisaConnect Assis for passport and visa assistance.
                    Our experts are ready to guide you.
                </p>

                <div className="contact-row">

                    {/* LEFT – CONTACT DETAILS */}
                    <div className="contact-info">
                        <h3>Reach Us</h3>

                        <p>
                            <strong>📞 Phone:</strong><br />
                            <a href="tel:+918722169966">+91 87221 69966</a>
                        </p>

                        <p>
                            <strong>📧 Email:</strong><br />
                            <a href="mailto:visaconnectassis.54@gmail.com">
                                visaconnectassis.54@gmail.com
                            </a>
                        </p>

                        <p>
                            <strong>📍 Address:</strong><br />
                            2nd Floor, Jattappa Complex,<br />
                            10, Kanakapura Main Road,<br />
                            Yelachenahalli, Kumaraswamy Layout,<br />
                            Bengaluru – 560078
                        </p>

                        <div className="contact-note">
                            <strong>Business Hours:</strong><br />
                            Monday – Saturday: 10:00 AM – 7:00 PM
                        </div>
                    </div>

                    {/* RIGHT – CONTACT FORM */}
                    <div className="contact-form-box">
                        <h3>Send Us a Message</h3>

                        <form className="contact-form">
                            <input type="text" placeholder="Full Name" required />
                            <input type="email" placeholder="Email Address" required />
                            <input type="tel" placeholder="Phone Number" required />

                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                required
                            ></textarea>

                            <button type="submit">Submit Enquiry</button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;
