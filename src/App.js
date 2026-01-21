import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Australia from "./pages/Australia";
import UK from "./pages/UK";
import US from "./pages/US";
import EU from "./pages/EU";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="app-wrapper">

      {/* ================= FIXED HEADER ================= */}
      <header className="header">

        {/* TOP BAR */}
        <div className="top-bar">
          <a href="tel:+918722169966" className="top-item">
            <img src="/image/phone.jpg" alt="Phone" className="icon" />
            <span>+91 87221 69966</span>
          </a>

          <a
            href="https://wa.me/918722169966"
            target="_blank"
            rel="noopener noreferrer"
            className="top-item"
          >
            <img src="/image/whats app.webp" alt="WhatsApp" className="icon" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo-container">
            <img
              src="/image/companylogo.jpeg"
              alt="VisaConnectAssis"
              className="logo-img"
            />
            <span className="logo-text">VisaConnectAssis</span>
          </div>

          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/australia-visa">Australia</Link></li>
            <li><Link to="/uk-visa">UK</Link></li>
            <li><Link to="/us-visa">USA</Link></li>
            <li><Link to="/eu-citizenship">EU</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/australia-visa" element={<Australia />} />
          <Route path="/uk-visa" element={<UK />} />
          <Route path="/us-visa" element={<US />} />
          <Route path="/eu-citizenship" element={<EU />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">

          {/* COLUMN 1 */}
          <div className="footer-column">
            <img
              src="/image/companylogo.jpeg"
              alt="VisaConnect Assis"
              className="footer-logo"
            />
            <p>
              VisaConnect Assis is a private consultancy providing guidance for
              tourist, visitor, and business visa applications.
            </p>

            {/* SOCIAL ICONS */}
            <div className="footer-social">
              <a href="https://wa.me/918722169966" target="_blank" rel="noreferrer">
                <img src="/image/whats app.webp" alt="WhatsApp" />
              </a>
              <a href="https://www.instagram.com/visaconnectassis/" target="_blank" rel="noreferrer">
                <img src="/image/insatgram.png" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570025681917#" target="_blank" rel="noreferrer">
                <img src="/image/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.youtube.com/@visaconnectassis" target="_blank" rel="noreferrer">
                <img src="/image/youtube1.png" alt="Youtube" />
              </a>
              <a href="https://www.linkedin.com/in/visaconnectassis/" target="_blank" rel="noreferrer">
                <img src="/image/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="footer-column">
            <h4>Contact</h4>
            <p>📞 <a href="tel:+918722169966">+91 87221 69966</a></p>
            <p>
              📍 2nd Floor, Jattappa Complex,<br />
              Kumaraswamy Layout,<br />
              Bengaluru – 560078
            </p>
          </div>

        </div>

        {/* DISCLAIMER */}
        <div className="footer-disclaimer">
          <strong>Disclaimer:</strong> VisaConnect Assis is a private consultancy.
          We are not affiliated with any government, embassy, or immigration authority.
          Final visa decisions are made solely by the respective authorities.
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} VisaConnect Assis. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
