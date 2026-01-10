import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Australia from "./pages/Australia";
import UK from "./pages/UK";
import US from "./pages/US";
import EU from "./pages/EU";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-wrapper">
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-item">
          <img src="/image/phone.jpg" alt="Phone" className="icon" />
          <span>+91 87221 69966</span>
        </div>

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

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="/image/companylogo.jpeg"
            alt="VisaConnect Assis"
            className="logo-img"
          />
          <span className="logo-text">VisaConnect Assis</span>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/australia-visa">Australian Visas</Link></li>
          <li><Link to="/uk-visa">UK Visas</Link></li>
          <li><Link to="/us-visa">US Visas</Link></li>
          <li><Link to="/eu-citizenship">EU Citizenship</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

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
        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <img
              src="/image/companylogo.jpeg"
              alt="Footer Logo"
              className="footer-logo"
            />
            <p>
              Trusted passport and visa consultancy offering expert guidance and
              hassle-free processing worldwide.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>📞 +91 87221 69966</p>
            <p>📍2nd Floor, Jattappa Complex, 10, Kanakapura Main Rd, Yelachenahalli, Kumaraswamy Layout, Bengaluru, Karnataka 560078</p>

            <a
              href="https://wa.me/918722169966"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <img src="/image/whats app.webp" alt="WhatsApp" />
              Chat on WhatsApp
            </a>


          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} VisaConnect Assis. All rights reserved.
        </div>
      </footer>

      {/* BACK TO TOP */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
