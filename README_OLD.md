# 🌟 Personal Portfolio Website

> A modern, responsive portfolio website built with React and Node.js featuring dark mode, interactive animations, and RESTful API backend.

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js 16+** - Download from [nodejs.org](https://nodejs.org/)
- **Git** - For cloning the repository

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/vpraise00/Create_Website_with_Claude.git
cd Create_Website_with_Claude

# Install dependencies
install.bat                 # Windows
# or npm run install-all    # All platforms
```

### 3. Start Development Servers

**Windows (Recommended):**
```bash
# Terminal 1: Start backend
start-backend.bat

# Terminal 2: Start frontend  
start-frontend.bat
```

**All Platforms:**
```bash
# Start both servers
npm start
```

🎉 **Access your portfolio:** http://localhost:3000

---

## ✨ Features

- 🌙 **Dark/Light Mode** with system preference detection
- 📱 **Fully Responsive** design for all devices
- ⚡ **Interactive Animations** and smooth transitions
- 🔄 **Real-time API Integration** with graceful fallbacks
- 🛡️ **Security-First** backend with comprehensive protection
- 📊 **Health Monitoring** and API documentation
- 🐳 **Docker Ready** for containerized deployment

## 🛠️ Tech Stack

**Frontend:** React 18.2.0, Axios, CSS3  
**Backend:** Node.js, Express.js, Helmet.js, CORS  
**Tools:** Docker, npm, Concurrently

## 📁 Project Structure

```
personal-portfolio/
├── 📁 backend/                 # Node.js backend
│   ├── 📁 src/
│   │   ├── 📁 controllers/     # API controllers
│   │   ├── 📁 routes/          # API routes
│   │   └── 📄 server.js        # Main server file
│   └── 📄 package.json
├── 📁 frontend/                # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/      # React components
│   │   ├── 📁 styles/          # CSS stylesheets
│   │   └── 📄 App.js           # Main app component
│   └── 📄 package.json
├── 📄 install.bat              # Install dependencies
├── 📄 start-backend.bat        # Start backend server
├── 📄 start-frontend.bat       # Start frontend server
├── 📄 quick-start.bat          # Interactive startup menu
├── 📄 diagnose-nodejs.bat      # Node.js troubleshooting
└── 📄 README.md                # This file
```

## 🔧 Usage

### Development Mode
```bash
# Start backend (port 3001)
start-backend.bat

# Start frontend (port 3000) 
start-frontend.bat

# Or start both together
npm start
```

### Production Build
```bash
# Build frontend
cd frontend && npm run build

# Start production backend
cd backend && NODE_ENV=production npm start
```

## 🎨 Customization

### Update Profile Information
Edit `backend/src/controllers/profileController.js`:
```javascript
const profileData = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  skills: ['Skill1', 'Skill2', 'Skill3'],
  interests: ['Interest1', 'Interest2']
  // ... more fields
};
```

### Environment Configuration
Create `.env` file in backend folder:
```env
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## 🐳 Docker Support

```bash
# Development
docker-compose up

# Production
docker-compose -f docker-compose.prod.yml up
```

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Server health check |
| `/api/profile` | GET | Complete profile data |
| `/api/profile/skills` | GET | Skills list |
| `/api/profile/contact` | GET | Contact information |

## 🚀 Deployment

### Vercel (Frontend)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend && vercel
```

### Heroku (Backend)
```bash
# Login and create app
heroku login
heroku create your-portfolio-api

# Deploy
git subtree push --prefix backend heroku main
```

### GitHub Pages (Frontend)
```bash
# Deploy to GitHub Pages
deploy-to-github-pages.bat
```

## 🛠️ Troubleshooting

### Windows: "Node.js not found"
```bash
# Run diagnosis tool
diagnose-nodejs.bat

# Manual fix
# 1. Download Node.js from https://nodejs.org/
# 2. Install with default settings
# 3. Restart computer
# 4. Try again
```

### Port Already in Use
```bash
# Find process using port
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Kill process (Windows)
taskkill /PID [PID_NUMBER] /F
```

### Backend Connection Failed
```bash
# Check if backend is running
curl http://localhost:3001/health

# Or open in browser
http://localhost:3001/health
```

### Dependencies Installation Failed
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js community for the robust backend framework
- All contributors who helped improve this project

---

**Made with ❤️ by [Seungchan An](https://github.com/vpraise00)**

> 💡 **Need help?** Check our [troubleshooting guide](#️-troubleshooting) or open an issue on GitHub.

---

## 🌐 GitHub Pages Deployment

Deploy your portfolio as a static website to GitHub Pages:

### Quick Deploy
```bash
# Deploy to GitHub Pages
deploy-to-github-pages.bat
```

### Manual Setup
1. **Create GitHub Repository** (public)
2. **Add homepage to package.json:**
   ```json
   "homepage": "https://[username].github.io/[repository-name]"
   ```
3. **Deploy:** Run `deploy-to-github-pages.bat`

📋 **Detailed Guide:** See [GITHUB_PAGES_GUIDE.md](GITHUB_PAGES_GUIDE.md)

---
