// 프로필 데이터 (실제 프로젝트에서는 데이터베이스에서 가져올 수 있음)
const profileData = {
  name: 'Seungchan An',
  title: 'Full Stack Developer',
  email: 'vpraise00@gmail.com',
  description: '안녕하세요! 저는 웹 개발과 데이터 사이언스에 열정을 가진 개발자입니다. 새로운 기술을 배우고 실제 프로젝트에 적용하는 것을 좋아합니다.',
  skills: [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Docker',
    'AWS',
    'MongoDB',
    'Git'
  ],
  interests: [
    '웹 개발 (Frontend & Backend)',
    '데이터 사이언스 & 머신러닝',
    '클라우드 컴퓨팅 & DevOps',
    '오픈소스 기여'
  ],
  socialLinks: {
    github: 'https://github.com/seungchan-an',
    instagram: 'https://instagram.com/seungchan.an',
    linkedin: 'https://linkedin.com/in/seungchan-an'
  }
};

// 프로필 정보 조회
exports.getProfile = (req, res) => {
  try {
    res.json(profileData);
  } catch (error) {
    console.error('프로필 데이터 조회 중 오류:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
};
