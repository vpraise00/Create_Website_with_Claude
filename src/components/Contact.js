import React from 'react';
import '../styles/Contact.css';

const Contact = ({ profileData }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the following platforms!</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
          </div>
          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>Suwon, South Korea</p>
          </div>
          <div className="contact-item">
            <h3>🎓 Education</h3>
            <p>Tech University of Korea (4th year)</p>
          </div>
        </div>
        <div className="social-links">
          <a 
            href={profileData.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github"
          >
            <span>GitHub</span>
          </a>
          <a 
            href={profileData.socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <span>Instagram</span>
          </a>
          <a 
            href={profileData.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
