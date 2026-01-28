import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>SafeCity</h1>
          <p className="tagline">
            Smart Crime Mapping & Predictive Policing Platform
          </p>
          <p className="hero-desc">
            Empowering law enforcement agencies with AI-driven insights to predict crime,
            identify hotspots, and ensure safer communities.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Dashboard</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          {/* Image placeholder */}
          <img src="" alt="SafeCity overview" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>

        <div className="feature-cards">
          <div className="feature-card">
            <h3>Crime Hotspot Mapping</h3>
            <p>
              Visualize crime-prone areas using FIR data and real-time analytics
              to improve patrolling efficiency.
            </p>
          </div>

          <div className="feature-card">
            <h3>Predictive Policing</h3>
            <p>
              AI/ML models analyze historical crime patterns to predict
              future incidents before they occur.
            </p>
          </div>

          <div className="feature-card">
            <h3>Alert Zones</h3>
            <p>
              Automatically notify residents and authorities about sensitive
              or high-risk locations via alerts.
            </p>
          </div>

          <div className="feature-card">
            <h3>FIR Management</h3>
            <p>
              Digitally register and manage FIRs with secure access for
              police and administrators.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <h2>Our Impact</h2>

        <div className="impact-stats">
          <div>
            <h3>35%</h3>
            <p>Faster Response Time</p>
          </div>
          <div>
            <h3>50%</h3>
            <p>Better Resource Allocation</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Real-time Monitoring</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <h3>SafeCity</h3>
        <p>Building safer cities through technology</p>
        <p className="copyright">
          © 2025 SafeCity. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;
