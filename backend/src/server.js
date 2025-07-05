const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const profileRoutes = require('./routes/profile');

const app = express();
const PORT = process.env.PORT || 3001;

// 미들웨어
app.use(helmet());
app.use(cors());
app.use(express.json());

// 라우트
app.use('/api/profile', profileRoutes);

// 헬스체크 엔드포인트
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 핸들러
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// 에러 핸들러
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
