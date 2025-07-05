const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// GET /api/profile - 프로필 정보 조회
router.get('/', profileController.getProfile);

module.exports = router;
