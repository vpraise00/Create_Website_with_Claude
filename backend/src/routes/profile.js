const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

/**
 * Profile Routes
 * Base URL: /api/profile
 */

// GET /api/profile - 전체 프로필 정보 조회
router.get('/', profileController.getProfile);

// GET /api/profile/skills - 기술 스택만 조회
router.get('/skills', profileController.getSkills);

// GET /api/profile/contact - 연락처 정보만 조회
router.get('/contact', profileController.getContact);

// Health check for profile routes
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'Profile API',
    timestamp: new Date().toISOString(),
    availableEndpoints: [
      'GET /api/profile',
      'GET /api/profile/skills',
      'GET /api/profile/contact',
      'GET /api/profile/health'
    ]
  });
});

module.exports = router;
