import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact SafeCity</h1>
      <p className="intro">
        We are committed to keeping communities safe. Reach out to us through any of the channels below.
      </p>

      {/* Helpline Section */}
      <section className="contact-section">
        <h2>Emergency Helplines</h2>
        <div className="contact-cards">
          <div className="card">
            <h3>Police Emergency</h3>
            <p className="number">100</p>
            <p>Available 24/7 for immediate assistance.</p>
          </div>
          <div className="card">
            <h3>Fire & Rescue</h3>
            <p className="number">101</p>
            <p>Responding to fire incidents and emergencies.</p>
          </div>
          <div className="card">
            <h3>Ambulance Services</h3>
            <p className="number">102</p>
            <p>Medical emergency support around the clock.</p>
          </div>
        </div>
      </section>

      {/* Police Rules Section */}
      <section className="contact-section">
        <h2>Important Police Rules & Guidelines</h2>
        <ul>
          <li>Always report a crime immediately to the nearest police station.</li>
          <li>Provide accurate FIR details to ensure proper action.</li>
          <li>Follow police instructions during investigations.</li>
          <li>Maintain public safety and do not interfere with law enforcement operations.</li>
          <li>Share relevant CCTV footage or evidence if requested.</li>
        </ul>
      </section>

      {/* Office & Email */}
      <section className="contact-section">
        <h2>Contact Details</h2>
        <div className="contact-info">
          <div>
            <h3>Office Address</h3>
            <p>SafeCity HQ, 123 Smart Street, Cyber City, India</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>support@safecity.com</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="contact-section">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <span className="icon">🌐 Website</span>
          <span className="icon">📘 Facebook</span>
          <span className="icon">🐦 Twitter</span>
          <span className="icon">📸 Instagram</span>
          <span className="icon">💼 LinkedIn</span>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="contact-section">
        <h2>Locate Us</h2>
        <p>Find the nearest police station or SafeCity office location on the map below.</p>

        <div className="map-container">
          <iframe
            title="SafeCity Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.580291188509!2d72.84499787507013!3d19.16492698204942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b67f5a2b5a7f%3A0x9d06c75e4cbeedbb!2sGoregaon%20Police%20Station!5e0!3m2!1sen!2sin!4v1706001111111"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
