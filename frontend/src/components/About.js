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
              <h4>주요 관심사</h4>
              <ul>
                <li>웹 개발 (Frontend & Backend)</li>
                <li>데이터 사이언스 & 머신러닝</li>
                <li>클라우드 컴퓨팅 & DevOps</li>
                <li>오픈소스 기여</li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-placeholder">
              <span>Profile Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
