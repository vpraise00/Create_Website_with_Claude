// Profile data (can be fetched from database in real projects)
const profileData = {
  name: 'Seungchan An',
  title: 'AI Researcher',
  email: 'vpraise@naver.com',
  description: 'Hello! I am a 4th-year student at Tech University of Korea, residing in Suwon. I am passionate about artificial intelligence research with a focus on advancing the field through innovative solutions and cutting-edge technologies.',
  skills: [
    'Python',
    'C',
    'C++',
    'Java',
    'LaTeX',
    'CARLA',
    'MoraiSim',
    'IsaacSim',
    'TensorFlow',
    'PyTorch',
    'OpenCV',
    'ROS'
  ],
  interests: [
    'Reinforcement Learning',
    'Robot Manipulation',
    'Autonomous Driving',
    'Computer Vision',
    'Machine Learning',
    'Deep Learning'
  ],
  socialLinks: {
    github: 'https://github.com/vpraise00',
    instagram: 'https://instagram.com/vpraise_a',
    linkedin: 'https://www.linkedin.com/in/%EC%8A%B9%EC%B0%AC-%EC%95%88-8a317a373/'
  }
};

// Get profile information
exports.getProfile = (req, res) => {
  try {
    res.json(profileData);
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({ message: 'Server error occurred.' });
  }
};
