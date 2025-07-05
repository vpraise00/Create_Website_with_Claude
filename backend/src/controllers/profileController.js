// Profile data configuration
// 👇 여기서 개인 정보를 수정하세요!
const profileData = {
  // 기본 정보
  name: 'Seungchan An',
  title: 'AI Researcher & Full-Stack Developer',
  email: 'vpraise@naver.com',
  phone: '+82-10-XXXX-XXXX', // 선택사항
  location: 'Suwon, South Korea',
  
  // 자기소개
  description: `Hello! I am a 4th-year student at Tech University of Korea, residing in Suwon. 
  I am passionate about artificial intelligence research with a focus on advancing the field 
  through innovative solutions and cutting-edge technologies. I enjoy building full-stack 
  applications and exploring the intersection of AI and web development.`,
  
  // 기술 스택
  skills: [
    'Python', 'C', 'C++', 'Java', 'TensorFlow', 
    'PyTorch', 'OpenCV', 'ROS', 'CARLA', 'MoraiSim',
    'IsaacSim', 'Git', 'Docker', 'LaTeX'
  ],
  
  // 관심 분야
  interests: [
    'Reinforcement Learning',
    'Robot Manipulation'
  ],
  
  // 소셜 링크
  socialLinks: {
    github: 'https://github.com/vpraise00',
    instagram: 'https://instagram.com/vpraise_a',
    linkedin: 'https://www.linkedin.com/in/%EC%8A%B9%EC%B0%AC-%EC%95%88-8a317a373/',
    email: 'mailto:vpraise@naver.com'
  },
  
  // 추가 정보
  education: {
    university: 'Tech University of Korea',
    degree: 'Bachelor of Engineering',
    year: '4th Year',
    major: 'Computer Science & AI'
  },
  
  // 프로젝트 경험 (선택사항)
  projects: [
    {
      name: 'Personal Portfolio Website',
      description: 'Full-stack portfolio website with React and Node.js',
      technologies: ['React', 'Node.js', 'Express', 'Docker'],
      link: 'https://github.com/vpraise00/portfolio'
    }
  ]
};

/**
 * Get user profile information
 * @route GET /api/profile
 * @returns {Object} User profile data
 */
exports.getProfile = async (req, res) => {
  try {
    // 요청 로깅
    console.log(`Profile requested at ${new Date().toISOString()}`);
    
    // 응답 헤더 설정
    res.setHeader('Cache-Control', 'public, max-age=3600'); // 1시간 캐시
    res.setHeader('Content-Type', 'application/json');
    
    // 성공 응답
    res.status(200).json({
      success: true,
      data: profileData,
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    });
    
  } catch (error) {
    console.error('Error fetching profile data:', error);
    
    // 에러 응답
    res.status(500).json({
      success: false,
      message: 'Failed to fetch profile data',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Get profile skills only
 * @route GET /api/profile/skills
 * @returns {Array} List of skills
 */
exports.getSkills = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: profileData.skills,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch skills',
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Get contact information
 * @route GET /api/profile/contact
 * @returns {Object} Contact information
 */
exports.getContact = async (req, res) => {
  try {
    const contactInfo = {
      email: profileData.email,
      phone: profileData.phone,
      location: profileData.location,
      socialLinks: profileData.socialLinks
    };
    
    res.status(200).json({
      success: true,
      data: contactInfo,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching contact info:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact information',
      timestamp: new Date().toISOString()
    });
  }
};
