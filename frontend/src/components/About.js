import React from 'react';
import '../styles/About.css';

const About = ({ profileData }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <h3>{profileData.title}</h3>
            <p>{profileData.description}</p>
            <div className="about-details">
              <h4>Research Interests</h4>
              <ul>
                {profileData.interests && profileData.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p>📧 Email: <a href={`mailto:${profileData.email}`}>{profileData.email}</a></p>
              <p>📍 Location: Suwon, South Korea</p>
              <p>🎓 Tech University of Korea (4th year)</p>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-image">
              <img 
                src="/images/image.jpg" 
                alt="Profile" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder" style={{display: 'none'}}>
                <span>Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
