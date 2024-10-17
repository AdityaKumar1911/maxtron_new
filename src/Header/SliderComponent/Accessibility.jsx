import React from "react";
import "./Accessibility.css";

const App = () => {
  return (
    <div className="container">
      <header className="header" role="banner">
        <h1>Inclusive Web Page</h1>
        <nav aria-label="Main Navigation">
          <ul className="nav">
            <li>
              <a href="#about" role="link">
                About
              </a>
            </li>
            <li>
              <a href="#services" role="link">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" role="link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content" tabIndex="-1">
        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About Us</h2>
          <p>
            We focus on making the web accessible for everyone, providing a
            smooth experience with keyboard navigation, and responsive design
            for all screen sizes.
          </p>
        </section>

        <section id="services" aria-labelledby="services-heading">
          <h2 id="services-heading">Our Services</h2>
          <div className="services-grid">
            <article className="service-card" role="article" tabIndex="0">
              <img src="https://via.placeholder.com/150" alt="Service 1" />
              <h3>Design Consultation</h3>
              <p>We provide accessible and aesthetic design consultation.</p>
            </article>
            <article className="service-card" role="article" tabIndex="0">
              <img src="https://via.placeholder.com/150" alt="Service 2" />
              <h3>Web Development</h3>
              <p>Developing web applications with inclusivity in mind.</p>
            </article>
            <article className="service-card" role="article" tabIndex="0">
              <img src="https://via.placeholder.com/150" alt="Service 3" />
              <h3>Accessibility Audits</h3>
              <p>
                We audit websites to ensure compliance with accessibility
                standards.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Get in Touch</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" aria-required="true" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" aria-required="true" />

            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <p>&copy; 2024 Inclusive Web. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
