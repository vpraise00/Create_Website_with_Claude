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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Fetch profile data from backend
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/profile');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        // Use default data on error
        setProfileData({
          name: 'Seungchan An',
          title: 'AI Researcher',
          email: 'vpraise@naver.com',
          description: 'AI researcher passionate about advancing the field through innovative solutions.',
          skills: ['Python', 'C++', 'TensorFlow', 'PyTorch', 'CARLA'],
          interests: ['Reinforcement Learning', 'Robot Manipulation', 'Autonomous Driving'],
          socialLinks: {
            github: 'https://github.com/vpraise00',
            instagram: 'https://instagram.com/vpraise_a',
            linkedin: 'https://www.linkedin.com/in/%EC%8A%B9%EC%B0%AC-%EC%95%88-8a317a373/'
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
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <About profileData={profileData} />
        <Skills skills={profileData.skills} />
        <Contact profileData={profileData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
