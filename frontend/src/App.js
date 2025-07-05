import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  // 프로필 데이터 가져오기
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 백엔드 연결 확인을 위한 헬스체크
        const healthResponse = await axios.get('http://localhost:3001/health', {
          timeout: 5000,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        if (healthResponse.status === 200) {
          // 백엔드가 정상이면 프로필 데이터 가져오기
          const response = await axios.get('http://localhost:3001/api/profile', {
            timeout: 10000, // 10초 타임아웃
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
          
          if (response.data.success) {
            setProfileData(response.data.data);
          } else {
            throw new Error(response.data.message || 'Failed to fetch profile data');
          }
        }
        
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError(error.message);
        
        // 백엔드 연결 실패 시 기본 데이터 사용
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
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
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

  // 에러 상태 (데이터는 있지만 백엔드 연결 실패 시 경고 표시)
  const showWarning = error && profileData;

  return (
    <div className="App">
      {showWarning && (
        <div className="connection-warning">
          <p>⚠️ Backend connection failed. Using cached data.</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}
      
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
