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

  useEffect(() => {
    // 백엔드에서 프로필 데이터 가져오기
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/profile');
        setProfileData(response.data);
      } catch (error) {
        console.error('프로필 데이터를 가져오는 중 오류가 발생했습니다:', error);
        // 오류 시 기본 데이터 사용
        setProfileData({
          name: 'Seungchan An',
          title: 'Full Stack Developer',
          description: '웹 개발과 데이터 사이언스에 관심이 많은 개발자입니다.',
          skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Docker'],
          socialLinks: {
            github: 'https://github.com/seungchan-an',
            instagram: 'https://instagram.com/seungchan.an',
            linkedin: 'https://linkedin.com/in/seungchan-an'
          }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <About profileData={profileData} />
        <Skills skills={profileData.skills} />
        <Contact socialLinks={profileData.socialLinks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
