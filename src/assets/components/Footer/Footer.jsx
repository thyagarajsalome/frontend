import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-btn">
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/thyagarajsalome"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            GitHub
          </a>
        </div>
        <p className="footer-text">
          &copy; 2024 Thyagaraja M. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
