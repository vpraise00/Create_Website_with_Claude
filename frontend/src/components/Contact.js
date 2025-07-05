import React from 'react';
import '../styles/Contact.css';

const Contact = ({ socialLinks }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>저와 연결되어 소통하고 싶으시다면 아래 링크를 통해 연락해주세요!</p>
        <div className="social-links">
          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github"
          >
            <span>GitHub</span>
          </a>
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <span>Instagram</span>
          </a>
          <a 
            href={socialLinks.linkedin} 
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
