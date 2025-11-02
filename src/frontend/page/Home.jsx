import { Link } from "react-router-dom"
import '../css/home.css';

function Home() {
  return <>
    <div className="home-container">
      <section id="home-section" className="hero-section">
        <div className="hero-text">
          <h1>Welcome to <span className="highlight">MedCare</span></h1>
          <p>
            Book hospital beds in real-time, view availability, and get instant confirmations.
            Simplify emergency and planned admissions with our trusted platform.
          </p>
          <Link to="/hospitals">
            <button className="explore-btn">Find Hospitals</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/image/hero-hospital.avif" alt="Hospital Illustration" />
        </div>
      </section>

      <section id="service-section" className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/image/real-time.avif" alt="Real-time availability" />
            <h3>Real-Time Availability</h3>
            <p>Check live hospital bed status and availability with a single click.</p>
          </div>

          <div className="feature-card">
            <img src="/image/secure.avif" alt="Secure booking" />
            <h3>Secure Booking</h3>
            <p>Your details are fully encrypted and safe with hospital networks.</p>
          </div>

          <div className="feature-card">
            <img src="/image/support.avif" alt="24x7 Support" />
            <h3>24×7 Support</h3>
            <p>Our team is available round-the-clock to assist during emergencies.</p>
          </div>
        </div>
      </section>
      <section id="review-section" className="review-section">
        <h2>What Our Users Say</h2>
        <p className="review-intro">
          Thousands of users trust MedCare for quick and safe hospital bookings.
        </p>

        <div className="review-grid">
          <div className="review-card">
            <img src="/image/user_demo.png" alt="User" />
            <p className="review-text">
              “I found a hospital bed within minutes when my father needed emergency care.
              The process was smooth and stress-free.”
            </p>
            <h4>— Riya Sharma</h4>
            <p className="user-location">Kolkata, WB</p>
          </div>

          <div className="review-card">
            <img src="/image/user_demo.png" alt="User" />
            <p className="review-text">
              “This platform helped me compare hospitals nearby and instantly book a bed.
              Highly recommended!”
            </p>
            <h4>— Arjun Patel</h4>
            <p className="user-location">Ahmedabad, GJ</p>
          </div>

          <div className="review-card">
            <img src="/image/user_demo.png" alt="User" />
            <p className="review-text">
              “Excellent UI, quick updates, and real-time data.
              MedCare really made hospital booking easier.”
            </p>
            <h4>— Sneha Das</h4>
            <p className="user-location">Delhi, DL</p>
          </div>
        </div>
      </section>
      <section id="contact-section" className="cta-section">
        <h2>Need a hospital bed urgently?</h2>
        <p>Browse nearby hospitals and make quick bookings instantly.</p>
        <Link to="/hospitals">
          <button className="cta-btn">Book Now</button>
        </Link>
      </section>
    </div>
  </>
}

export default Home