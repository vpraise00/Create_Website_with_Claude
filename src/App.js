import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // 다크 모드 설정 로드
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // 시스템 다크 모드 감지
      const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemDarkMode);
    }
  }, []);

  // 다크 모드 적용
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 정적 프로필 데이터 로드
  useEffect(() => {
    // 로딩 시뮬레이션 (UX 향상을 위해)
    setTimeout(() => {
      setProfileData({
        name: 'Seungchan An',
        title: 'AI Researcher',
        email: 'vpraise@naver.com',
        location: 'Suwon, South Korea',
        description: `Hello! I am a 4th-year student at Tech University of Korea, residing in Suwon. 
        I am passionate about artificial intelligence research with a focus on advancing the field 
        through innovative solutions and cutting-edge technologies.`,
        skills: [
          'Python', 'C', 'C++', 'Java', 'TensorFlow', 
          'PyTorch', 'OpenCV', 'ROS', 'CARLA', 'MoraiSim',
          'IsaacSim', 'Git', 'Docker', 'LaTeX'
        ],
        interests: [
          'Reinforcement Learning', 'Robot Manipulation'
        ],
        socialLinks: {
          github: 'https://github.com/vpraise00',
          instagram: 'https://instagram.com/vpraise_a',
          linkedin: 'https://www.linkedin.com/in/%EC%8A%B9%EC%B0%AC-%EC%95%88-8a317a373/',
          email: 'mailto:vpraise@naver.com'
        }
      });
      setLoading(false);
    }, 500);
  }, []);

  // 로딩 상태
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="App">      
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        profileData={profileData} 
      />
      
      <main>
        <About profileData={profileData} />
        <Skills skills={profileData?.skills || []} />
        <Contact profileData={profileData} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
