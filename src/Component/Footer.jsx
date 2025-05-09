import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="extra-large-footer">
        <div className="footer-container">
    
          <p>
            &copy; {new Date().getFullYear()} Copyright: All rights reserved. Designed by <a href="https://github.com/AmrDesoky">Advance Technologies</a>
          </p>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-sections">
            <section className="footer-about">
              <h2>About Our Company</h2>
              <p>
                We provide outstanding software solutions with a focus on performance, usability, and modern design. Our team is passionate about creating scalable and efficient products.
              </p>
            </section>
            <section className="footer-contact">
              <h2>Contact Us</h2>
              <address>
                1234 Software Ave.<br />
                Suite 567<br />
                Tech City, TC 12345<br />
                Email: <a href="mailto:info@company.com">info@company.com</a><br />
                Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
              </address>
            </section>
            <section className="footer-social">
              <h2>Follow Us</h2>
              <div className="social-icons" aria-label="Social media links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘 Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦 Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗 LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸 Instagram</a>
              </div>
            </section>
            <section className="footer-newsletter">
              <h2>Subscribe to Our Newsletter</h2>
              <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  aria-label="Email address" 
                  required 
                />
                <button type="submit">Subscribe</button>
              </form>
            </section>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .extra-large-footer {
          background-color: #111;
          color: #ddd;
          padding: 60px 40px;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          box-sizing: border-box;
          text-align: center;
          border-top: 8px solid #1e90ff;
        }
        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }
        p {
          font-size: 1.3rem;
          margin-bottom: 35px;
          line-height: 1.6;
          font-weight: 500;
          color: #b0c4de;
        }
        .footer-navigation {
          margin-bottom: 40px;
        }
        .footer-navigation a {
          color: #1e90ff;
          margin: 0 20px;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .footer-navigation a:hover,
        .footer-navigation a:focus {
          color: #63b3ed;
          outline: none;
        }
        .footer-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
          text-align: left;
          margin-top: 30px;
          color: #ccc;
        }
        .footer-sections h2 {
          font-size: 1.6rem;
          margin-bottom: 15px;
          font-weight: 700;
          color: #1e90ff;
        }
        .footer-about p {
          font-size: 1rem;
          line-height: 1.5;
        }
        address {
          font-style: normal;
          font-size: 1rem;
          line-height: 1.5;
        }
        address a {
          color: #1e90ff;
          text-decoration: none;
        }
        address a:hover,
        address a:focus {
          text-decoration: underline;
          outline: none;
        }
        .social-icons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 1.1rem;
        }
        .social-icons a {
          color: #1e90ff;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .social-icons a:hover,
        .social-icons a:focus {
          color: #63b3ed;
          outline: none;
        }
        .footer-newsletter {
          max-width: 320px;
        }
        .newsletter-form {
          display: flex;
          gap: 10px;
        }
        .newsletter-form input[type="email"] {
          flex: 1;
          padding: 10px 12px;
          border: 2px solid #1e90ff;
          border-radius: 4px;
          font-size: 1rem;
          color: #111;
        }
        .newsletter-form input[type="email"]:focus {
          outline: none;
          border-color: #63b3ed;
          box-shadow: 0 0 5px #63b3ed;
        }
        .newsletter-form button {
          background-color: #1e90ff;
          color: white;
          border: none;
          padding: 0 18px;
          border-radius: 4px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .newsletter-form button:hover,
        .newsletter-form button:focus {
          background-color: #63b3ed;
          outline: none;
        }
        @media (max-width: 600px) {
          .extra-large-footer {
            padding: 40px 20px;
          }
          h1 {
            font-size: 2.2rem;
            margin-bottom: 15px;
          }
          p {
            font-size: 1rem;
            margin-bottom: 25px;
          }
          .footer-navigation a {
            margin: 0 12px;
            font-size: 1rem;
          }
          .footer-sections {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-newsletter {
            max-width: 100%;
          }
          .newsletter-form {
            flex-direction: column;
          }
          .newsletter-form input[type="email"] {
            width: 100%;
          }
          .newsletter-form button {
            width: 100%;
            padding: 12px 0;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
