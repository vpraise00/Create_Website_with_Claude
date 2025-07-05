# 🌟 Personal Portfolio Website

> A modern, responsive portfolio website built with React and Node.js. Features dark mode, interactive animations, and a RESTful API backend.

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## � Quick Start (3 Steps)

### Step 1: Prerequisites
Make sure you have **Node.js** installed:
- Download from [https://nodejs.org/](https://nodejs.org/)
- Install the **LTS version** (recommended)
- Restart your computer after installation

### Step 2: Clone & Navigate
```bash
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio
```

### Step 3: Run!
**Option A: One-Click Start (Windows)**
```bash
quick-start-final.bat
```

**Option B: Command Line (All Platforms)**
```bash
npm start
```

🎉 **That's it!** Your portfolio will automatically open at:
- **🌐 Website**: http://localhost:3000
- **🔧 API**: http://localhost:3001

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚙️ Installation Guide](#️-installation-guide)
- [🔧 Usage](#-usage)
- [🎨 Customization](#-customization)
- [🐳 Docker Support](#-docker-support)
- [🔧 API Documentation](#-api-documentation)
- [🚀 Deployment](#-deployment)
- [🛠️ Troubleshooting](#️-troubleshooting)
- [🤝 Contributing](#-contributing)

## ✨ Features

### 🎨 Frontend Features
- **� Fully Responsive** - Perfect on all devices
- **🌙 Dark/Light Mode** - Toggle with system preference detection
- **⚡ Interactive Animations** - Smooth transitions and hover effects
- **🎯 Interactive Profile Image** - Physics-based animations on click
- **🔄 Real-time API Integration** - Dynamic data loading from backend
- **⚠️ Smart Error Handling** - Graceful fallbacks when backend is unavailable
- **🎨 Modern UI/UX** - Clean, professional design

### 🔧 Backend Features
- **🛡️ Security First** - Helmet.js security headers, CORS protection
- **📊 Health Monitoring** - Real-time server status and metrics
- **🔍 API Documentation** - Self-documenting endpoints
- **⚡ High Performance** - Optimized for speed and efficiency
- **🔄 Environment Flexible** - Easy configuration via environment variables
- **📝 Comprehensive Logging** - Request tracking and error monitoring

### 🏗️ Development Experience
- **🔧 Hot Reload** - Instant updates during development
- **📦 Zero Configuration** - Works out of the box
- **🐳 Docker Ready** - Containerized deployment support
- **🔧 One-Click Scripts** - Automated setup and execution
- **📋 Debug Friendly** - Detailed logging and error messages

## 🛠️ Tech Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Frontend** | React | 18.2.0 | UI Framework |
| | Axios | 1.6.0 | HTTP Client |
| | CSS3 | - | Styling & Animations |
| **Backend** | Node.js | 16+ | Runtime Environment |
| | Express.js | 4.18.2 | Web Framework |
| | Helmet.js | 7.1.0 | Security Middleware |
| | CORS | 2.8.5 | Cross-Origin Resource Sharing |
| **DevOps** | Docker | - | Containerization |
| | npm | 8+ | Package Management |
| | Concurrently | 8.2.2 | Process Management |

## ⚙️ Installation Guide

### 🔍 Prerequisites Check
Before starting, ensure you have:
- **Node.js 16+** and **npm 8+** installed
- **Git** for version control
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

```bash
# Check versions
node --version    # Should show v16.0.0 or higher
npm --version     # Should show 8.0.0 or higher
```

### 📥 Method 1: Automated Installation (Recommended)

**Windows Users:**
```bash
# Clone the repository
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio

# One-click setup and start
quick-start-final.bat
```

**Linux/macOS Users:**
```bash
# Clone the repository
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio

# Install all dependencies and start
npm start
```

### 🔧 Method 2: Manual Installation

```bash
# 1. Clone repository
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio

# 2. Install root dependencies
npm install

# 3. Install backend dependencies
cd backend
npm install
cd ..

# 4. Install frontend dependencies
cd frontend
npm install
cd ..

# 5. Start both servers
npm start
```

### 📦 Method 3: Step-by-Step Installation

```bash
# Install dependencies only
npm run install-all

# Start servers
npm start
```

## 🔧 Usage

### 🚀 Development Mode

**Start Both Servers (Recommended):**
```bash
npm start
# Starts backend on :3001 and frontend on :3000
```

**Start Individually:**
```bash
# Terminal 1: Backend only
npm run start-backend

# Terminal 2: Frontend only  
npm run start-frontend
```

**Windows Batch Files:**
```bash
# Core scripts for development
install.bat          # Install all dependencies
start-backend.bat    # Backend server only (port 3001)
start-frontend.bat   # Frontend server only (port 3000)
quick-start.bat      # Interactive menu with options
diagnose-nodejs.bat  # Troubleshoot Node.js issues
```

**🔧 How to use separate servers:**
1. **First Terminal:** Run `start-backend.bat`
   - Backend will start on http://localhost:3001
   - Keep this terminal open
   
2. **Second Terminal:** Run `start-frontend.bat`  
   - Frontend will start on http://localhost:3000
   - Your browser will automatically open
   
3. **Access your portfolio:** http://localhost:3000

💡 **Why separate terminals?**
- Better development experience
- Independent server management
- Easier debugging and monitoring
- Can restart individual servers without affecting the other

### 🏗️ Production Mode

```bash
# Build frontend
npm run build

# Start production backend
cd backend
NODE_ENV=production npm start
```

### 🧪 Testing & Verification

```bash
# Verify installation
npm run verify

# Clean install test
clean-install-test.bat   # Windows only

# Check for port conflicts
npm run check-ports
```

## 🎨 Customization

### 👤 Personal Information

Edit your profile in `backend/src/controllers/profileController.js`:

```javascript
const profileData = {
  // Basic Info - Update these with your details
  name: 'Your Full Name',
  title: 'Your Professional Title',
  email: 'your.email@example.com',
  phone: '+1-234-567-8900',
  location: 'Your City, Country',
  
  // About You
  description: `Write a compelling description about yourself...`,
  
  // Technical Skills
  skills: [
    'JavaScript', 'Python', 'React', 'Node.js',
    'Docker', 'AWS', 'MongoDB', 'PostgreSQL',
    // Add your skills here
  ],
  
  // Areas of Interest
  interests: [
    'Web Development', 'Machine Learning', 'Cloud Computing',
    // Add your interests here
  ],
  
  // Social Media Links
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    instagram: 'https://instagram.com/yourusername',
    email: 'mailto:your.email@example.com'
  }
};
```

### 🎨 Visual Customization

**Colors & Themes** (`frontend/src/styles/App.css`):
```css
:root {
  --primary-color: #3498db;     /* Main theme color */
  --secondary-color: #2ecc71;   /* Accent color */
  --accent-color: #e74c3c;      /* Highlight color */
  /* Customize these colors */
}
```

**Component Styles:**
- `Header.css` - Navigation and header styling
- `About.css` - About section and profile image
- `Skills.css` - Skills grid and animations
- `Contact.css` - Contact form and social links
- `Footer.css` - Footer design

### 🖼️ Profile Image

1. **Add your image** to `frontend/public/images/`
2. **Name it** `image.jpg` (or update the reference in `About.js`)
3. **Recommended size**: 300x300px square
4. **Supported formats**: JPG, PNG, GIF, WebP

### 🌙 Dark Mode Configuration

The dark mode toggle is automatic. Customize colors in `App.css`:
```css
[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  /* Customize dark theme colors */
}
```

## 🐳 Docker Support

### 🔧 Development with Docker

```bash
# Start development environment
docker-compose up --build

# Start with live reload
docker-compose up --build --watch
```

### 🚀 Production with Docker

```bash
# Production deployment
docker-compose -f docker-compose.prod.yml up --build

# Background mode
docker-compose -f docker-compose.prod.yml up -d --build
```

### 📦 Individual Containers

```bash
# Backend only
docker build -t portfolio-backend ./backend
docker run -p 3001:3001 portfolio-backend

# Frontend only
docker build -t portfolio-frontend ./frontend
docker run -p 3000:3000 portfolio-frontend
```

## 🔧 API Documentation

### 🌐 Base URLs
- **Development**: `http://localhost:3001`
- **Production**: `https://your-domain.com`

### 📋 Available Endpoints

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/` | GET | API information | Basic server info |
| `/health` | GET | Health check | Server status & metrics |
| `/api` | GET | API documentation | Available endpoints |
| `/api/profile` | GET | Complete profile | Full profile data |
| `/api/profile/skills` | GET | Skills only | Array of skills |
| `/api/profile/contact` | GET | Contact info | Contact details |

### 📝 Example Responses

**Health Check (`GET /health`):**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600,
  "memory": {
    "rss": 45678592,
    "heapTotal": 26738688,
    "heapUsed": 18234576
  }
}
```

**Profile Data (`GET /api/profile`):**
```json
{
  "success": true,
  "data": {
    "name": "Seungchan An",
    "title": "AI Researcher & Full-Stack Developer",
    "email": "vpraise@naver.com",
    "skills": ["Python", "JavaScript", "React"],
    "socialLinks": {
      "github": "https://github.com/vpraise00"
    }
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🚀 Deployment

### ☁️ Platform Options

| Platform | Best For | Cost | Difficulty |
|----------|----------|------|------------|
| **Vercel** | Frontend only | Free tier | Easy |
| **Netlify** | Static sites | Free tier | Easy |
| **Heroku** | Full-stack | Free tier | Medium |
| **AWS** | Production apps | Pay-as-go | Advanced |
| **DigitalOcean** | VPS hosting | $5/month | Medium |

### 🔧 Environment Variables

Create `.env` in backend directory:
```env
# Server Configuration
PORT=3001
NODE_ENV=production

# Security
CORS_ORIGIN=https://your-domain.com
HELMET_ENABLED=true

# Logging
LOG_LEVEL=error
```

### � Build Commands

```bash
# Frontend build
cd frontend && npm run build

# Backend start
cd backend && npm start

# Full build
npm run build
```

## �🛠️ Troubleshooting

### 🔍 Quick Diagnosis Tool

**Windows users: If you're having Node.js issues, run this first:**
```bash
# Run the automated diagnosis tool
diagnose-nodejs.bat
```

This tool will:
- Check if Node.js is installed
- Verify PATH configuration
- Test common Node.js commands
- Provide specific fix recommendations

### 🔧 Enhanced Script Features

Our batch files now include:
- **Auto-detection** of Node.js in common installation paths
- **Intelligent PATH fixing** for the current session
- **Detailed error messages** with specific solutions
- **Fallback mechanisms** when Node.js isn't in PATH

### ❌ Common Issues & Solutions

#### **"node is not recognized"**
```bash
# Solution: Install Node.js
# 1. Download from https://nodejs.org/
# 2. Install LTS version
# 3. Restart computer
# 4. Verify: node --version
```

#### **Port Already in Use**
```bash
# Check what's using the port
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Kill the process (Windows)
taskkill /PID [PID_NUMBER] /F

# Kill the process (Linux/macOS)
kill -9 [PID_NUMBER]
```

#### **Backend Connection Failed**
```bash
# 1. Check if backend is running
curl http://localhost:3001/health

# 2. Check firewall settings
# 3. Verify port 3001 is not blocked

# 4. Check logs in terminal for errors
```

#### **Dependencies Installation Failed**
```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install

# Try with different registry
npm install --registry https://registry.npmjs.org/
```

#### **React App Won't Start**
```bash
# Check Node.js version
node --version  # Should be 16+

# Clear React cache
rm -rf node_modules/.cache

# Reinstall React dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### **Windows Batch Files Issues**
```bash
# If start-backend.bat or start-frontend.bat don't work:

# 1. Check Node.js installation
diagnose-nodejs.bat

# 2. If Node.js is installed but not detected:
# - Close all Command Prompt windows
# - Open new Command Prompt as Administrator
# - Try running the script again

# 3. Manual start (alternative):
# For backend:
cd backend
"C:\Program Files\nodejs\npm.cmd" start

# For frontend:
cd frontend  
"C:\Program Files\nodejs\npm.cmd" start
```

#### **Servers Won't Start Separately**
```bash
# Make sure to run in separate terminals:

# Terminal 1 (Backend):
start-backend.bat
# Wait for "Backend Server Started!" message

# Terminal 2 (Frontend):
start-frontend.bat
# Wait for "webpack compiled" message
```

### 🔍 Debug Mode

```bash
# Backend with debug logs
cd backend
DEBUG=* npm start

# Frontend with verbose logging
cd frontend
VERBOSE=true npm start

# Both with debug info
DEBUG=* npm start
```

### 🆘 Getting Help

1. **Check the logs** in your terminal for error messages
2. **Verify prerequisites** (Node.js, npm versions)
3. **Try clean installation** using `clean-install-test.bat`
4. **Check GitHub Issues** for similar problems
5. **Run verification** with `npm run verify`

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 🔧 Development Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/personal-portfolio.git
cd personal-portfolio

# 3. Install dependencies
npm run install-all

# 4. Create a feature branch
git checkout -b feature/amazing-feature

# 5. Make your changes and test
npm start

# 6. Commit your changes
git commit -m 'Add some amazing feature'

# 7. Push to your fork
git push origin feature/amazing-feature

# 8. Open a Pull Request
```

### 📝 Contribution Guidelines

- **Code Style**: Follow existing code patterns
- **Testing**: Test your changes thoroughly
- **Documentation**: Update README if needed
- **Commits**: Use clear, descriptive commit messages
- **Pull Requests**: Provide detailed description of changes

### 🐛 Bug Reports

When reporting bugs, please include:
- Operating system and version
- Node.js and npm versions
- Error messages (full text)
- Steps to reproduce
- Expected vs actual behavior

### 💡 Feature Requests

For new features, please:
- Check existing issues first
- Describe the use case
- Explain why it would be valuable
- Consider implementation complexity

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Use commercially**
- ✅ **Modify freely** 
- ✅ **Distribute copies**
- ✅ **Include in private use**
- ❗ **Include license notice**

---

## 👨‍💻 Author

**Seungchan An**
- 🌟 **GitHub**: [@vpraise00](https://github.com/vpraise00)
- 📷 **Instagram**: [@vpraise_a](https://instagram.com/vpraise_a)
- 💼 **LinkedIn**: [seungchan-an](https://www.linkedin.com/in/%EC%8A%B9%EC%B0%AC-%EC%95%88-8a317a373/)
- � **Email**: vpraise@naver.com

---

## 🎯 Project Roadmap

### ✅ **Completed Features**
- [x] React frontend with dark mode
- [x] Node.js backend with REST API
- [x] Docker containerization
- [x] Responsive design
- [x] Interactive animations
- [x] Automated setup scripts
- [x] Comprehensive documentation

### 🔄 **In Progress**
- [ ] Unit test coverage
- [ ] CI/CD pipeline setup
- [ ] Performance optimizations
- [ ] Accessibility improvements

### 📋 **Future Enhancements**
- [ ] Blog/Articles section
- [ ] Contact form with email integration
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA features

### 🚀 **Version History**
- **v1.0.0** - Initial release with basic portfolio features
- **v1.1.0** - Added dark mode and animations
- **v1.2.0** - Docker support and deployment guides
- **v1.3.0** - Enhanced error handling and verification tools

---

## 🌟 Acknowledgments

- **React Team** - For the amazing frontend framework
- **Express.js** - For the robust backend framework
- **Node.js Community** - For the extensive ecosystem
- **Open Source Contributors** - For inspiration and libraries
- **GitHub** - For hosting and collaboration tools

---

<div align="center">

### 🌟 If this project helped you, please give it a star! 🌟

**Made with ❤️ by [Seungchan An](https://github.com/vpraise00)**

[⬆ Back to Top](#-personal-portfolio-website)

</div>

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### One-Click Setup
```bash
# Clone the repository
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio

# Run the quick start script (Windows)
quick-start.bat

# Or for manual installation (All platforms)
npm run install-all
npm start
```

🎉 **That's it!** Your portfolio will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## ✨ Features

### 🎨 Frontend Features
- **📱 Responsive Design** - Works on all devices
- **🌙 Dark/Light Mode** - Toggle with system preference detection
- **⚡ Interactive Animations** - Smooth transitions and hover effects
- **🎯 Interactive Profile Image** - Physics-based animations and click effects
- **� Real-time API Integration** - Dynamic data loading from backend
- **⚠️ Error Handling** - Graceful fallbacks when backend is unavailable

### 🔧 Backend Features
- **🛡️ Security** - Helmet.js for security headers
- **🌐 CORS Support** - Cross-origin resource sharing
- **📊 Health Monitoring** - Health check and system information endpoints
- **🔍 API Documentation** - Self-documenting API endpoints
- **⚡ Performance** - Optimized for speed and efficiency
- **🔄 Environment Configuration** - Flexible environment variables

### 🏗️ Development Features
- **🔧 Hot Reload** - Instant updates during development
- **📦 Modular Architecture** - Easy to extend and maintain
- **🐳 Docker Support** - Containerized deployment
- **🔧 One-Click Scripts** - Automated setup and deployment
- **📋 Comprehensive Logging** - Debug and monitor easily

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with CSS variables
- **HTML5** - Semantic markup

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Helmet.js** - Security middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### DevOps
- **Docker** - Containerization
- **npm** - Package management
- **Git** - Version control

## 📁 Project Structure

```
personal-portfolio/
├── 📁 backend/                 # Node.js backend
│   ├── 📁 src/
│   │   ├── 📁 controllers/     # API controllers
│   │   ├── 📁 routes/          # API routes
│   │   └── 📄 server.js        # Main server file
│   ├── 📄 package.json
│   ├── 📄 .env                 # Environment variables
│   └── 📄 Dockerfile
├── 📁 frontend/                # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/      # React components
│   │   ├── 📁 styles/          # CSS stylesheets
│   │   ├── 📄 App.js           # Main app component
│   │   └── 📄 index.js         # Entry point
│   ├── 📁 public/
│   │   ├── 📁 images/          # Static images
│   │   └── 📄 index.html
│   ├── 📄 package.json
│   └── 📄 Dockerfile
├── 📄 package.json             # Root package.json
├── 📄 docker-compose.yml       # Docker configuration
├── 📄 README.md                # This file
├── 📄 .gitignore               # Git ignore rules
└── 📁 scripts/                 # Automation scripts
    ├── 📄 install.bat          # Dependencies installation
    ├── 📄 quick-start.bat      # One-click startup
    ├── 📄 start-backend.bat    # Backend server
    └── 📄 start-frontend.bat   # Frontend server
```

## ⚙️ Installation

### Method 1: Automated Installation (Recommended)
```bash
# Windows
install.bat

# Linux/macOS
npm run install-all
```

### Method 2: Manual Installation
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## 🔧 Usage

### Development Mode
```bash
# Start both servers (recommended)
npm start

# Or start individually
npm run start-backend  # Backend only
npm run start-frontend # Frontend only
```

### Production Mode
```bash
# Build frontend
npm run build

# Start production server
NODE_ENV=production npm run start-backend
```

### Using Scripts (Windows)
```bash
quick-start.bat        # Start both servers
start-backend.bat      # Backend only
start-frontend.bat     # Frontend only
```

## 🎨 Customization

### � Personal Information
Edit `backend/src/controllers/profileController.js`:

```javascript
const profileData = {
  name: '당신의 이름',                    // 👤 이름
  title: '당신의 직책',                   // 💼 직책
  email: 'your-email@example.com',      // 📧 이메일
  location: 'Your Location',            // 🌍 위치
  description: '당신의 소개글...',        // � 소개
  skills: [                             // 🛠️ 기술 스택
    'JavaScript', 'React', 'Node.js',
    'Python', 'Docker', 'AWS'
  ],
  socialLinks: {                        // 🔗 소셜 링크
    github: 'https://github.com/your-username',
    instagram: 'https://instagram.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username'
  }
};
```

### 🎨 Styling
Customize the appearance by editing files in `frontend/src/styles/`:

- **App.css** - Global styles and themes
- **Header.css** - Header and navigation
- **About.css** - About section and profile image
- **Skills.css** - Skills section
- **Contact.css** - Contact section
- **Footer.css** - Footer

### 🖼️ Profile Image
1. Add your image to `frontend/public/images/`
2. Rename it to `image.jpg` (or update the reference in About.js)
3. Recommended size: 300x300px
4. Supported formats: JPG, PNG, GIF, WebP

### 🌙 Dark Mode
The dark mode toggle is in the header. Colors are controlled by CSS variables in `App.css`.

## 🐳 Docker Support

### Development
```bash
docker-compose up --build
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Individual Services
```bash
# Backend only
docker build -t portfolio-backend ./backend
docker run -p 3001:3001 portfolio-backend

# Frontend only
docker build -t portfolio-frontend ./frontend
docker run -p 3000:3000 portfolio-frontend
```

## 🔧 API Documentation

### Base URL
- Development: `http://localhost:3001`
- Production: `https://your-domain.com`

### Endpoints

#### GET /
Basic API information
```json
{
  "message": "Portfolio Backend API Server",
  "version": "1.0.0",
  "status": "running"
}
```

#### GET /health
Health check endpoint
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600,
  "memory": {...}
}
```

#### GET /api/profile
Get complete profile information
```json
{
  "success": true,
  "data": {
    "name": "Seungchan An",
    "title": "AI Researcher",
    "email": "vpraise@naver.com",
    "description": "...",
    "skills": [...],
    "interests": [...],
    "socialLinks": {...}
  }
}
```

#### GET /api/profile/skills
Get skills only
```json
{
  "success": true,
  "data": ["Python", "JavaScript", "React", "..."]
}
```

#### GET /api/profile/contact
Get contact information only
```json
{
  "success": true,
  "data": {
    "email": "vpraise@naver.com",
    "socialLinks": {...}
  }
}
```

## 🚀 Deployment

### Platform Options
- **AWS EC2, ECS** - 가상 서버 또는 컨테이너 서비스
- **Google Cloud Platform** - GCE, Cloud Run
- **Heroku** - 간편한 PaaS 플랫폼
- **Vercel** - 프론트엔드 배포 전용
- **Netlify** - 정적 사이트 호스팅

### Environment Variables
Create `.env` file in backend directory:
```env
PORT=3001
NODE_ENV=production
CORS_ORIGIN=https://your-domain.com
```

### Build Commands
```bash
# Frontend build
cd frontend && npm run build

# Backend start
cd backend && npm start
```

## 🛠️ Troubleshooting

### 🔍 Quick Diagnosis Tool

**Windows users: If you're having Node.js issues, run this first:**
```bash
# Run the automated diagnosis tool
diagnose-nodejs.bat
```

This tool will:
- Check if Node.js is installed
- Verify PATH configuration
- Test common Node.js commands
- Provide specific fix recommendations

### 🔧 Enhanced Script Features

Our batch files now include:
- **Auto-detection** of Node.js in common installation paths
- **Intelligent PATH fixing** for the current session
- **Detailed error messages** with specific solutions
- **Fallback mechanisms** when Node.js isn't in PATH

### ❌ Common Issues & Solutions

#### **"node is not recognized"**
```bash
# Solution: Install Node.js
# 1. Download from https://nodejs.org/
# 2. Install LTS version
# 3. Restart computer
# 4. Verify: node --version
```

#### **Port Already in Use**
```bash
# Check what's using the port
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Kill the process (Windows)
taskkill /PID [PID_NUMBER] /F

# Kill the process (Linux/macOS)
kill -9 [PID_NUMBER]
```

#### **Backend Connection Failed**
```bash
# 1. Check if backend is running
curl http://localhost:3001/health

# 2. Check firewall settings
# 3. Verify port 3001 is not blocked

# 4. Check logs in terminal for errors
```

#### **Dependencies Installation Failed**
```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install

# Try with different registry
npm install --registry https://registry.npmjs.org/
```

#### **React App Won't Start**
```bash
# Check Node.js version
node --version  # Should be 16+

# Clear React cache
rm -rf node_modules/.cache

# Reinstall React dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### **Windows Batch Files Issues**
```bash
# If start-backend.bat or start-frontend.bat don't work:

# 1. Check Node.js installation
diagnose-nodejs.bat

# 2. If Node.js is installed but not detected:
# - Close all Command Prompt windows
# - Open new Command Prompt as Administrator
# - Try running the script again

# 3. Manual start (alternative):
# For backend:
cd backend
"C:\Program Files\nodejs\npm.cmd" start

# For frontend:
cd frontend  
"C:\Program Files\nodejs\npm.cmd" start
```

#### **Servers Won't Start Separately**
```bash
# Make sure to run in separate terminals:

# Terminal 1 (Backend):
start-backend.bat
# Wait for "Backend Server Started!" message

# Terminal 2 (Frontend):
start-frontend.bat
# Wait for "webpack compiled" message
```

### 🔍 Debug Mode

```bash
# Backend with debug logs
cd backend
DEBUG=* npm start

# Frontend with verbose logging
cd frontend
VERBOSE=true npm start

# Both with debug info
DEBUG=* npm start
```

### 🆘 Getting Help

1. **Check the logs** in your terminal for error messages
2. **Verify prerequisites** (Node.js, npm versions)
3. **Try clean installation** using `clean-install-test.bat`
4. **Check GitHub Issues** for similar problems
5. **Run verification** with `npm run verify`

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 🔧 Development Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/personal-portfolio.git
cd personal-portfolio

# 3. Install dependencies
npm run install-all

# 4. Create a feature branch
git checkout -b feature/amazing-feature

# 5. Make your changes and test
npm start

# 6. Commit your changes
git commit -m 'Add some amazing feature'

# 7. Push to your fork
git push origin feature/amazing-feature

# 8. Open a Pull Request
```

### 📝 Contribution Guidelines

- **Code Style**: Follow existing code patterns
- **Testing**: Test your changes thoroughly
- **Documentation**: Update README if needed
- **Commits**: Use clear, descriptive commit messages
- **Pull Requests**: Provide detailed description of changes

### 🐛 Bug Reports

When reporting bugs, please include:
- Operating system and version
- Node.js and npm versions
- Error messages (full text)
- Steps to reproduce
- Expected vs actual behavior

### 💡 Feature Requests

For new features, please:
- Check existing issues first
- Describe the use case
- Explain why it would be valuable
- Consider implementation complexity

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Use commercially**
- ✅ **Modify freely** 
- ✅ **Distribute copies**
- ✅ **Include in private use**
- ❗ **Include license notice**

---

## 👨‍💻 Author

**Seungchan An**
- 🌟 **GitHub**: [@vpraise00](https://github.com/vpraise00)
- 📷 **Instagram**: [@vpraise_a](https://instagram.com/vpraise_a)
- 💼 **LinkedIn**: [seungchan-an](https://www.linkedin.com/in/%EC%8A%B9%EC%B0%AC-%EC%95%88-8a317a373/)
- � **Email**: vpraise@naver.com

---

## 🎯 Project Roadmap

### ✅ **Completed Features**
- [x] React frontend with dark mode
- [x] Node.js backend with REST API
- [x] Docker containerization
- [x] Responsive design
- [x] Interactive animations
- [x] Automated setup scripts
- [x] Comprehensive documentation

### 🔄 **In Progress**
- [ ] Unit test coverage
- [ ] CI/CD pipeline setup
- [ ] Performance optimizations
- [ ] Accessibility improvements

### 📋 **Future Enhancements**
- [ ] Blog/Articles section
- [ ] Contact form with email integration
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA features

### 🚀 **Version History**
- **v1.0.0** - Initial release with basic portfolio features
- **v1.1.0** - Added dark mode and animations
- **v1.2.0** - Docker support and deployment guides
- **v1.3.0** - Enhanced error handling and verification tools

---

## 🌟 Acknowledgments

- **React Team** - For the amazing frontend framework
- **Express.js** - For the robust backend framework
- **Node.js Community** - For the extensive ecosystem
- **Open Source Contributors** - For inspiration and libraries
- **GitHub** - For hosting and collaboration tools

---

<div align="center">

### 🌟 If this project helped you, please give it a star! 🌟

**Made with ❤️ by [Seungchan An](https://github.com/vpraise00)**

[⬆ Back to Top](#-personal-portfolio-website)

</div>

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### One-Click Setup
```bash
# Clone the repository
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio

# Run the quick start script (Windows)
quick-start.bat

# Or for manual installation (All platforms)
npm run install-all
npm start
```

🎉 **That's it!** Your portfolio will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## ✨ Features

### 🎨 Frontend Features
- **📱 Responsive Design** - Works on all devices
- **🌙 Dark/Light Mode** - Toggle with system preference detection
- **⚡ Interactive Animations** - Smooth transitions and hover effects
- **🎯 Interactive Profile Image** - Physics-based animations and click effects
- **� Real-time API Integration** - Dynamic data loading from backend
- **⚠️ Error Handling** - Graceful fallbacks when backend is unavailable

### 🔧 Backend Features
- **🛡️ Security** - Helmet.js for security headers
- **🌐 CORS Support** - Cross-origin resource sharing
- **📊 Health Monitoring** - Health check and system information endpoints
- **🔍 API Documentation** - Self-documenting API endpoints
- **⚡ Performance** - Optimized for speed and efficiency
- **🔄 Environment Configuration** - Flexible environment variables

### 🏗️ Development Features
- **🔧 Hot Reload** - Instant updates during development
- **📦 Modular Architecture** - Easy to extend and maintain
- **🐳 Docker Support** - Containerized deployment
- **🔧 One-Click Scripts** - Automated setup and deployment
- **📋 Comprehensive Logging** - Debug and monitor easily

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with CSS variables
- **HTML5** - Semantic markup

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Helmet.js** - Security middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### DevOps
- **Docker** - Containerization
- **npm** - Package management
- **Git** - Version control

## 📁 Project Structure

```
personal-portfolio/
├── 📁 backend/                 # Node.js backend
│   ├── 📁 src/
│   │   ├── 📁 controllers/     # API controllers
│   │   ├── 📁 routes/          # API routes
│   │   └── 📄 server.js        # Main server file
│   ├── 📄 package.json
│   ├── 📄 .env                 # Environment variables
│   └── 📄 Dockerfile
├── 📁 frontend/                # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/      # React components
│   │   ├── 📁 styles/          # CSS stylesheets
│   │   ├── 📄 App.js           # Main app component
│   │   └── 📄 index.js         # Entry point
│   ├── 📁 public/
│   │   ├── 📁 images/          # Static images
│   │   └── 📄 index.html
│   ├── 📄 package.json
│   └── 📄 Dockerfile
├── 📄 package.json             # Root package.json
├── 📄 docker-compose.yml       # Docker configuration
├── 📄 README.md                # This file
├── 📄 .gitignore               # Git ignore rules
└── 📁 scripts/                 # Automation scripts
    ├── 📄 install.bat          # Dependencies installation
    ├── 📄 quick-start.bat      # One-click startup
    ├── 📄 start-backend.bat    # Backend server
    └── 📄 start-frontend.bat   # Frontend server
```

## ⚙️ Installation

### Method 1: Automated Installation (Recommended)
```bash
# Windows
install.bat

# Linux/macOS
npm run install-all
```

### Method 2: Manual Installation
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## 🔧 Usage

### Development Mode
```bash
# Start both servers (recommended)
npm start

# Or start individually
npm run start-backend  # Backend only
npm run start-frontend # Frontend only
```

### Production Mode
```bash
# Build frontend
npm run build

# Start production server
NODE_ENV=production npm run start-backend
```

### Using Scripts (Windows)
```bash
quick-start.bat        # Start both servers
start-backend.bat      # Backend only
start-frontend.bat     # Frontend only
```

## 🎨 Customization

### � Personal Information
Edit `backend/src/controllers/profileController.js`:

```javascript
const profileData = {
  name: '당신의 이름',                    // 👤 이름
  title: '당신의 직책',                   // 💼 직책
  email: 'your-email@example.com',      // 📧 이메일
  location: 'Your Location',            // 🌍 위치
  description: '당신의 소개글...',        // � 소개
  skills: [                             // 🛠️ 기술 스택
    'JavaScript', 'React', 'Node.js',
    'Python', 'Docker', 'AWS'
  ],
  socialLinks: {                        // 🔗 소셜 링크
    github: 'https://github.com/your-username',
    instagram: 'https://instagram.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username'
  }
};
```

### 🎨 Styling
Customize the appearance by editing files in `frontend/src/styles/`:

- **App.css** - Global styles and themes
- **Header.css** - Header and navigation
- **About.css** - About section and profile image
- **Skills.css** - Skills section
- **Contact.css** - Contact section
- **Footer.css** - Footer

### 🖼️ Profile Image
1. Add your image to `frontend/public/images/`
2. Rename it to `image.jpg` (or update the reference in About.js)
3. Recommended size: 300x300px
4. Supported formats: JPG, PNG, GIF, WebP

### 🌙 Dark Mode
The dark mode toggle is in the header. Colors are controlled by CSS variables in `App.css`.

## 🐳 Docker Support

### Development
```bash
docker-compose up --build
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Individual Services
```bash
# Backend only
docker build -t portfolio-backend ./backend
docker run -p 3001:3001 portfolio-backend

# Frontend only
docker build -t portfolio-frontend ./frontend
docker run -p 3000:3000 portfolio-frontend
```

## 🔧 API Documentation

### Base URL
- Development: `http://localhost:3001`
- Production: `https://your-domain.com`

### Endpoints

#### GET /
Basic API information
```json
{
  "message": "Portfolio Backend API Server",
  "version": "1.0.0",
  "status": "running"
}
```

#### GET /health
Health check endpoint
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600,
  "memory": {...}
}
```

#### GET /api/profile
Get complete profile information
```json
{
  "success": true,
  "data": {
    "name": "Seungchan An",
    "title": "AI Researcher",
    "email": "vpraise@naver.com",
    "description": "...",
    "skills": [...],
    "interests": [...],
    "socialLinks": {...}
  }
}
```

#### GET /api/profile/skills
Get skills only
```json
{
  "success": true,
  "data": ["Python", "JavaScript", "React", "..."]
}
```

#### GET /api/profile/contact
Get contact information only
```json
{
  "success": true,
  "data": {
    "email": "vpraise@naver.com",
    "socialLinks": {...}
  }
}
```

## 🚀 Deployment

### ☁️ Platform Options

| Platform | Best For | Cost | Difficulty |
|----------|----------|------|------------|
| **Vercel** | Frontend only | Free tier | Easy |
| **Netlify** | Static sites | Free tier | Easy |
| **Heroku** | Full-stack | Free tier | Medium |
| **AWS** | Production apps | Pay-as-go | Advanced |
| **DigitalOcean** | VPS hosting | $5/month | Medium |

### 🔧 Environment Variables

Create `.env` in backend directory:
```env
# Server Configuration
PORT=3001
NODE_ENV=production

# Security
CORS_ORIGIN=https://your-domain.com
HELMET_ENABLED=true

# Logging
LOG_LEVEL=error
```

### � Build Commands

```bash
# Frontend build
cd frontend && npm run build

# Backend start
cd backend && npm start

# Full build
npm run build
```

## �🛠️ Troubleshooting

### 🔍 Quick Diagnosis Tool

**Windows users: If you're having Node.js issues, run this first:**
```bash
# Run the automated diagnosis tool
diagnose-nodejs.bat
```

This tool will:
- Check if Node.js is installed
- Verify PATH configuration
- Test common Node.js commands
- Provide specific fix recommendations

### 🔧 Enhanced Script Features

Our batch files now include:
- **Auto-detection** of Node.js in common installation paths
- **Intelligent PATH fixing** for the current session
- **Detailed error messages** with specific solutions
- **Fallback mechanisms** when Node.js isn't in PATH

### ❌ Common Issues & Solutions

#### **"node is not recognized"**
```bash
# Solution: Install Node.js
# 1. Download from https://nodejs.org/
# 2. Install LTS version
# 3. Restart computer
# 4. Verify: node --version
```

#### **Port Already in Use**
```bash
# Check what's using the port
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Kill the process (Windows)
taskkill /PID [PID_NUMBER] /F

# Kill the process (Linux/macOS)
kill -9 [PID_NUMBER]
```

#### **Backend Connection Failed**
```bash
# 1. Check if backend is running
curl http://localhost:3001/health

# 2. Check firewall settings
# 3. Verify port 3001 is not blocked

# 4. Check logs in terminal for errors
```

#### **Dependencies Installation Failed**
```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install

# Try with different registry
npm install --registry https://registry.npmjs.org/
```

#### **React App Won't Start**
```bash
# Check Node.js version
node --version  # Should be 16+

# Clear React cache
rm -rf node_modules/.cache

# Reinstall React dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### **Windows Batch Files Issues**
```bash
# If start-backend.bat or start-frontend.bat don't work:

# 1. Check Node.js installation
diagnose-nodejs.bat

# 2. If Node.js is installed but not detected:
# - Close all Command Prompt windows
# - Open new Command Prompt as Administrator
# - Try running the script again

# 3. Manual start (alternative):
# For backend:
cd backend
"C:\Program Files\nodejs\npm.cmd" start

# For frontend:
cd frontend  
"C:\Program Files\nodejs\npm.cmd" start
```

#### **Servers Won't Start Separately**
```bash
# Make sure to run in separate terminals:

# Terminal 1 (Backend):
start-backend.bat
# Wait for "Backend Server Started!" message

# Terminal 2 (Frontend):
start-frontend.bat
# Wait for "webpack compiled" message
```

### 🔍 Debug Mode

```bash
# Backend with debug logs
cd backend
DEBUG=* npm start

# Frontend with verbose logging
cd frontend
VERBOSE=true npm start

# Both with debug info
DEBUG=* npm start
```

### 🆘 Getting Help

1. **Check the logs** in your terminal for error messages
2. **Verify prerequisites** (Node.js, npm versions)
3. **Try clean installation** using `clean-install-test.bat`
4. **Check GitHub Issues** for similar problems
5. **Run verification** with `npm run verify`

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 🔧 Development Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/personal-portfolio.git
cd personal-portfolio

# 3. Install dependencies
npm run install-all

# 4. Create a feature branch
git checkout -b feature/amazing-feature

# 5. Make your changes and test
npm start

# 6. Commit your changes
git commit -m 'Add some amazing feature'

# 7. Push to your fork
git push origin feature/amazing-feature

# 8. Open a Pull Request
```

### 📝 Contribution Guidelines

- **Code Style**: Follow existing code patterns
- **Testing**: Test your changes thoroughly
- **Documentation**: Update README if needed
- **Commits**: Use clear, descriptive commit messages
- **Pull Requests**: Provide detailed description of changes

### 🐛 Bug Reports

When reporting bugs, please include:
- Operating system and version
- Node.js and npm versions
- Error messages (full text)
- Steps to reproduce
- Expected vs actual behavior

### 💡 Feature Requests

For new features, please:
- Check existing issues first
- Describe the use case
- Explain why it would be valuable
- Consider implementation complexity

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Use commercially**
- ✅ **Modify freely** 
- ✅ **Distribute copies**
- ✅ **Include in private use**
- ❗ **Include license notice**

---

## 👨‍💻 Author

**Seungchan An**
- 🌟 **GitHub**: [@vpraise00](https://github.com/vpraise00)
- 📷 **Instagram**: [@vpraise_a](https://instagram.com/vpraise_a)
- 💼 **LinkedIn**: [seungchan-an](https://www.linkedin.com/in/%EC%8A%B9%EC%B0%AC-%EC%95%88-8a317a373/)
- � **Email**: vpraise@naver.com

---

## 🎯 Project Roadmap

### ✅ **Completed Features**
- [x] React frontend with dark mode
- [x] Node.js backend with REST API
- [x] Docker containerization
- [x] Responsive design
- [x] Interactive animations
- [x] Automated setup scripts
- [x] Comprehensive documentation

### 🔄 **In Progress**
- [ ] Unit test coverage
- [ ] CI/CD pipeline setup
- [ ] Performance optimizations
- [ ] Accessibility improvements

### 📋 **Future Enhancements**
- [ ] Blog/Articles section
- [ ] Contact form with email integration
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA features

### 🚀 **Version History**
- **v1.0.0** - Initial release with basic portfolio features
- **v1.1.0** - Added dark mode and animations
- **v1.2.0** - Docker support and deployment guides
- **v1.3.0** - Enhanced error handling and verification tools

---

## 🌟 Acknowledgments

- **React Team** - For the amazing frontend framework
- **Express.js** - For the robust backend framework
- **Node.js Community** - For the extensive ecosystem
- **Open Source Contributors** - For inspiration and libraries
- **GitHub** - For hosting and collaboration tools

---

<div align="center">

### 🌟 If this project helped you, please give it a star! 🌟

**Made with ❤️ by [Seungchan An](https://github.com/vpraise00)**

[⬆ Back to Top](#-personal-portfolio-website)

</div>

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### One-Click Setup
```bash
# Clone the repository
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio

# Run the quick start script (Windows)
quick-start.bat

# Or for manual installation (All platforms)
npm run install-all
npm start
```

🎉 **That's it!** Your portfolio will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## ✨ Features

### 🎨 Frontend Features
- **📱 Responsive Design** - Works on all devices
- **🌙 Dark/Light Mode** - Toggle with system preference detection
- **⚡ Interactive Animations** - Smooth transitions and hover effects
- **🎯 Interactive Profile Image** - Physics-based animations and click effects
- **� Real-time API Integration** - Dynamic data loading from backend
- **⚠️ Error Handling** - Graceful fallbacks when backend is unavailable

### 🔧 Backend Features
- **🛡️ Security** - Helmet.js for security headers
- **🌐 CORS Support** - Cross-origin resource sharing
- **📊 Health Monitoring** - Health check and system information endpoints
- **🔍 API Documentation** - Self-documenting API endpoints
- **⚡ Performance** - Optimized for speed and efficiency
- **🔄 Environment Configuration** - Flexible environment variables

### 🏗️ Development Features
- **🔧 Hot Reload** - Instant updates during development
- **📦 Modular Architecture** - Easy to extend and maintain
- **🐳 Docker Support** - Containerized deployment
- **🔧 One-Click Scripts** - Automated setup and deployment
- **📋 Comprehensive Logging** - Debug and monitor easily

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with CSS variables
- **HTML5** - Semantic markup

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Helmet.js** - Security middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### DevOps
- **Docker** - Containerization
- **npm** - Package management
- **Git** - Version control

## 📁 Project Structure

```
personal-portfolio/
├── 📁 backend/                 # Node.js backend
│   ├── 📁 src/
│   │   ├── 📁 controllers/     # API controllers
│   │   ├── 📁 routes/          # API routes
│   │   └── 📄 server.js        # Main server file
│   ├── 📄 package.json
│   ├── 📄 .env                 # Environment variables
│   └── 📄 Dockerfile
├── 📁 frontend/                # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/      # React components
│   │   ├── 📁 styles/          # CSS stylesheets
│   │   ├── 📄 App.js           # Main app component
│   │   └── 📄 index.js         # Entry point
│   ├── 📁 public/
│   │   ├── 📁 images/          # Static images
│   │   └── 📄 index.html
│   ├── 📄 package.json
│   └── 📄 Dockerfile
├── 📄 package.json             # Root package.json
├── 📄 docker-compose.yml       # Docker configuration
├── 📄 README.md                # This file
├── 📄 .gitignore               # Git ignore rules
└── 📁 scripts/                 # Automation scripts
    ├── 📄 install.bat          # Dependencies installation
    ├── 📄 quick-start.bat      # One-click startup
    ├── 📄 start-backend.bat    # Backend server
    └── 📄 start-frontend.bat   # Frontend server
```

## ⚙️ Installation

### Method 1: Automated Installation (Recommended)
```bash
# Windows
install.bat

# Linux/macOS
npm run install-all
```

### Method 2: Manual Installation
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## 🔧 Usage

### Development Mode
```bash
# Start both servers (recommended)
npm start

# Or start individually
npm run start-backend  # Backend only
npm run start-frontend # Frontend only
```

### Production Mode
```bash
# Build frontend
npm run build

# Start production server
NODE_ENV=production npm run start-backend
```

### Using Scripts (Windows)
```bash
quick-start.bat        # Start both servers
start-backend.bat      # Backend only
start-frontend.bat     # Frontend only
```

## 🎨 Customization

### � Personal Information
Edit `backend/src/controllers/profileController.js`:

```javascript
const profileData = {
  name: '당신의 이름',                    // 👤 이름
  title: '당신의 직책',                   // 💼 직책
  email: 'your-email@example.com',      // 📧 이메일
  location: 'Your Location',            // 🌍 위치
  description: '당신의 소개글...',        // � 소개
  skills: [                             // 🛠️ 기술 스택
    'JavaScript', 'React', 'Node.js',
    'Python', 'Docker', 'AWS'
  ],
  socialLinks: {                        // 🔗 소셜 링크
    github: 'https://github.com/your-username',
    instagram: 'https://instagram.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username'
  }
};
```

### 🎨 Styling
Customize the appearance by editing files in `frontend/src/styles/`:

- **App.css** - Global styles and themes
- **Header.css** - Header and navigation
- **About.css** - About section and profile image
- **Skills.css** - Skills section
- **Contact.css** - Contact section
- **Footer.css** - Footer

### 🖼️ Profile Image
1. Add your image to `frontend/public/images/`
2. Rename it to `image.jpg` (or update the reference in About.js)
3. Recommended size: 300x300px
4. Supported formats: JPG, PNG, GIF, WebP

### 🌙 Dark Mode
The dark mode toggle is in the header. Colors are controlled by CSS variables in `App.css`.

## 🐳 Docker Support

### Development
```bash
docker-compose up --build
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Individual Services
```bash
# Backend only
docker build -t portfolio-backend ./backend
docker run -p 3001:3001 portfolio-backend

# Frontend only
docker build -t portfolio-frontend ./frontend
docker run -p 3000:3000 portfolio-frontend
```

## 🔧 API Documentation

### Base URL
- Development: `http://localhost:3001`
- Production: `https://your-domain.com`

### Endpoints

#### GET /
Basic API information
```json
{
  "message": "Portfolio Backend API Server",
  "version": "1.0.0",
  "status": "running"
}
```

#### GET /health
Health check endpoint
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600,
  "memory": {...}
}
```

#### GET /api/profile
Get complete profile information
```json
{
  "success": true,
  "data": {
    "name": "Seungchan An",
    "title": "AI Researcher",
    "email": "vpraise@naver.com",
    "description": "...",
    "skills": [...],
    "interests": [...],
    "socialLinks": {...}
  }
}
```

#### GET /api/profile/skills
Get skills only
```json
{
  "success": true,
  "data": ["Python", "JavaScript", "React", "..."]
}
```

#### GET /api/profile/contact
Get contact information only
```json
{
  "success": true,
  "data": {
    "email": "vpraise@naver.com",
    "socialLinks": {...}
  }
}
```

## 🚀 Deployment

### ☁️ Platform Options

| Platform | Best For | Cost | Difficulty |
|----------|----------|------|------------|
| **Vercel** | Frontend only | Free tier | Easy |
| **Netlify** | Static sites | Free tier | Easy |
| **Heroku** | Full-stack | Free tier | Medium |
| **AWS** | Production apps | Pay-as-go | Advanced |
| **DigitalOcean** | VPS hosting | $5/month | Medium |

### 🔧 Environment Variables

Create `.env` in backend directory:
```env
# Server Configuration
PORT=3001
NODE_ENV=production

# Security
CORS_ORIGIN=https://your-domain.com
HELMET_ENABLED=true

# Logging
LOG_LEVEL=error
```

### � Build Commands

```bash
# Frontend build
cd frontend && npm run build

# Backend start
cd backend && npm start

# Full build
npm run build
```

## �🛠️ Troubleshooting

### 🔍 Quick Diagnosis Tool

**Windows users: If you're having Node.js issues, run this first:**
```bash
# Run the automated diagnosis tool
diagnose-nodejs.bat
```

This tool will:
- Check if Node.js is installed
- Verify PATH configuration
- Test common Node.js commands
- Provide specific fix recommendations

### 🔧 Enhanced Script Features

Our batch files now include:
- **Auto-detection** of Node.js in common installation paths
- **Intelligent PATH fixing** for the current session
- **Detailed error messages** with specific solutions
- **Fallback mechanisms** when Node.js isn't in PATH

### ❌ Common Issues & Solutions

#### **"node is not recognized"**
```bash
# Solution: Install Node.js
# 1. Download from https://nodejs.org/
# 2. Install LTS version
# 3. Restart computer
# 4. Verify: node --version
```

#### **Port Already in Use**
```bash
# Check what's using the port
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Kill the process (Windows)
taskkill /PID [PID_NUMBER] /F

# Kill the process (Linux/macOS)
kill -9 [PID_NUMBER]
```

#### **Backend Connection Failed**
```bash
# 1. Check if backend is running
curl http://localhost:3001/health

# 2. Check firewall settings
# 3. Verify port 3001 is not blocked

# 4. Check logs in terminal for errors
```

#### **Dependencies Installation Failed**
```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install

# Try with different registry
npm install --registry https://registry.npmjs.org/
```

#### **React App Won't Start**
```bash
# Check Node.js version
node --version  # Should be 16+

# Clear React cache
rm -rf node_modules/.cache

# Reinstall React dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### **Windows Batch Files Issues**
```bash
# If start-backend.bat or start-frontend.bat don't work:

# 1. Check Node.js installation
diagnose-nodejs.bat

# 2. If Node.js is installed but not detected:
# - Close all Command Prompt windows
# - Open new Command Prompt as Administrator
# - Try running the script again

# 3. Manual start (alternative):
# For backend:
cd backend
"C:\Program Files\nodejs\npm.cmd" start

# For frontend:
cd frontend  
"C:\Program Files\nodejs\npm.cmd" start
```

#### **Servers Won't Start Separately**
```bash
# Make sure to run in separate terminals:

# Terminal 1 (Backend):
start-backend.bat
# Wait for "Backend Server Started!" message

# Terminal 2 (Frontend):
start-frontend.bat
# Wait for "webpack compiled" message
```

### 🔍 Debug Mode

```bash
# Backend with debug logs
cd backend
DEBUG=* npm start

# Frontend with verbose logging
cd frontend
VERBOSE=true npm start

# Both with debug info
DEBUG=* npm start
```

### 🆘 Getting Help

1. **Check the logs** in your terminal for error messages
2. **Verify prerequisites** (Node.js, npm versions)
3. **Try clean installation** using `clean-install-test.bat`
4. **Check GitHub Issues** for similar problems
5. **Run verification** with `npm run verify`

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 🔧 Development Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/personal-portfolio.git
cd personal-portfolio

# 3. Install dependencies
npm run install-all

# 4. Create a feature branch
git checkout -b feature/amazing-feature

# 5. Make your changes and test
npm start

# 6. Commit your changes
git commit -m 'Add some amazing feature'

# 7. Push to your fork
git push origin feature/amazing-feature

# 8. Open a Pull Request
```

### 📝 Contribution Guidelines

- **Code Style**: Follow existing code patterns
- **Testing**: Test your changes thoroughly
- **Documentation**: Update README if needed
- **Commits**: Use clear, descriptive commit messages
- **Pull Requests**: Provide detailed description of changes

### 🐛 Bug Reports

When reporting bugs, please include:
- Operating system and version
- Node.js and npm versions
- Error messages (full text)
- Steps to reproduce
- Expected vs actual behavior

### 💡 Feature Requests

For new features, please:
- Check existing issues first
- Describe the use case
- Explain why it would be valuable
- Consider implementation complexity

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Use commercially**
- ✅ **Modify freely** 
- ✅ **Distribute copies**
- ✅ **Include in private use**
- ❗ **Include license notice**

---

## 👨‍💻 Author

**Seungchan An**
- 🌟 **GitHub**: [@vpraise00](https://github.com/vpraise00)
- 📷 **Instagram**: [@vpraise_a](https://instagram.com/vpraise_a)
- 💼 **LinkedIn**: [seungchan-an](https://www.linkedin.com/in/%EC%8A%B9%EC%B0%AC-%EC%95%88-8a317a373/)
- � **Email**: vpraise@naver.com

---

## 🎯 Project Roadmap

### ✅ **Completed Features**
- [x] React frontend with dark mode
- [x] Node.js backend with REST API
- [x] Docker containerization
- [x] Responsive design
- [x] Interactive animations
- [x] Automated setup scripts
- [x] Comprehensive documentation

### 🔄 **In Progress**
- [ ] Unit test coverage
- [ ] CI/CD pipeline setup
- [ ] Performance optimizations
- [ ] Accessibility improvements

### 📋 **Future Enhancements**
- [ ] Blog/Articles section
- [ ] Contact form with email integration
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA features

### 🚀 **Version History**
- **v1.0.0** - Initial release with basic portfolio features
- **v1.1.0** - Added dark mode and animations
- **v1.2.0** - Docker support and deployment guides
- **v1.3.0** - Enhanced error handling and verification tools

---

## 🌟 Acknowledgments

- **React Team** - For the amazing frontend framework
- **Express.js** - For the robust backend framework
- **Node.js Community** - For the extensive ecosystem
- **Open Source Contributors** - For inspiration and libraries
- **GitHub** - For hosting and collaboration tools

---

<div align="center">

### 🌟 If this project helped you, please give it a star! 🌟

**Made with ❤️ by [Seungchan An](https://github.com/vpraise00)**

[⬆ Back to Top](#-personal-portfolio-website)

</div>

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### One-Click Setup
```bash
# Clone the repository
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio

# Run the quick start script (Windows)
quick-start.bat

# Or for manual installation (All platforms)
npm run install-all
npm start
```

🎉 **That's it!** Your portfolio will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## ✨ Features

### 🎨 Frontend Features
- **📱 Responsive Design** - Works on all devices
- **🌙 Dark/Light Mode** - Toggle with system preference detection
- **⚡ Interactive Animations** - Smooth transitions and hover effects
- **🎯 Interactive Profile Image** - Physics-based animations and click effects
- **� Real-time API Integration** - Dynamic data loading from backend
- **⚠️ Error Handling** - Graceful fallbacks when backend is unavailable

### 🔧 Backend Features
- **🛡️ Security** - Helmet.js for security headers
- **🌐 CORS Support** - Cross-origin resource sharing
- **📊 Health Monitoring** - Health check and system information endpoints
- **🔍 API Documentation** - Self-documenting API endpoints
- **⚡ Performance** - Optimized for speed and efficiency
- **🔄 Environment Configuration** - Flexible environment variables

### 🏗️ Development Features
- **🔧 Hot Reload** - Instant updates during development
- **📦 Modular Architecture** - Easy to extend and maintain
- **🐳 Docker Support** - Containerized deployment
- **🔧 One-Click Scripts** - Automated setup and deployment
- **📋 Comprehensive Logging** - Debug and monitor easily

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with CSS variables
- **HTML5** - Semantic markup

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework

- **Helmet.js** - Security middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### DevOps
- **Docker** - Containerization
- **npm** - Package management
- **Git** - Version control

## 📁 Project Structure

```
personal-portfolio/
├── 📁 backend/                 # Node.js backend
│   ├── 📁 src/
│   │   ├── 📁 controllers/     # API controllers
│   │   ├── 📁 routes/          # API routes
│   │   └── 📄 server.js        # Main server file
│   ├── 📄 package.json
│   ├── 📄 .env                 # Environment variables
│   └── 📄 Dockerfile
├── 📁 frontend/                # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/      # React components
│   │   ├── 📁 styles/          # CSS stylesheets
│   │   ├── 📄 App.js           # Main app component
│   │   └── 📄 index.js         # Entry point
│   ├── 📁 public/
│   │   ├── 📁 images/          # Static images
│   │   └── 📄 index.html
│   ├── 📄 package.json
│   └── 📄 Dockerfile
├── 📄 package.json             # Root package.json
├── 📄 docker-compose.yml       # Docker configuration
├── 📄 README.md                # This file
├── 📄 .gitignore               # Git ignore rules
└── 📁 scripts/                 # Automation scripts
    ├── 📄 install.bat          # Dependencies installation
    ├── 📄 quick-start.bat      # One-click startup
    ├── 📄 start-backend.bat    # Backend server
    └── 📄 start-frontend.bat   # Frontend server
```

## ⚙️ Installation

### Method 1: Automated Installation (Recommended)
```bash
# Windows
install.bat

# Linux/macOS
npm run install-all
```

### Method 2: Manual Installation
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## 🔧 Usage

### Development Mode
```bash
# Start both servers (recommended)
npm start

# Or start individually
npm run start-backend  # Backend only
npm run start-frontend # Frontend only
```

### Production Mode
```bash
# Build frontend
npm run build

# Start production server
NODE_ENV=production npm run start-backend
```

### Using Scripts (Windows)
```bash
quick-start.bat        # Start both servers
start-backend.bat      # Backend only
start-frontend.bat     # Frontend only
```

## 🎨 Customization

### � Personal Information
Edit `backend/src/controllers/profileController.js`:

```javascript
const profileData = {
  name: '당신의 이름',                    // 👤 이름
  title: '당신의 직책',                   // 💼 직책
  email: 'your-email@example.com',      // 📧 이메일
  location: 'Your Location',            // 🌍 위치
  description: '당신의 소개글...',        // � 소개
  skills: [                             // 🛠️ 기술 스택
    'JavaScript', 'React', 'Node.js',
    'Python', 'Docker', 'AWS'
  ],
  socialLinks: {                        // 🔗 소셜 링크
    github: 'https://github.com/your-username',
    instagram: 'https://instagram.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username'
  }
};
```

### 🎨 Styling
Customize the appearance by editing files in `frontend/src/styles/`:

- **App.css** - Global styles and themes
- **Header.css** - Header and navigation
- **About.css** - About section and profile image
- **Skills.css** - Skills section
- **Contact.css** - Contact section
- **Footer.css** - Footer

### 🖼️ Profile Image
1. Add your image to `frontend/public/images/`
2. Rename it to `image.jpg` (or update the reference in About.js)
3. Recommended size: 300x300px
4. Supported formats: JPG, PNG, GIF, WebP

### 🌙 Dark Mode
The dark mode toggle is in the header. Colors are controlled by CSS variables in `App.css`.

## 🐳 Docker Support

### Development
```bash
docker-compose up --build
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Individual Services
```bash
# Backend only
docker build -t portfolio-backend ./backend
docker run -p 3001:3001 portfolio-backend

# Frontend only
docker build -t portfolio-frontend ./frontend
docker run -p 3000:3000 portfolio-frontend
```

## 🔧 API Documentation

### Base URL
- Development: `http://localhost:3001`
- Production: `https://your-domain.com`

### Endpoints

#### GET /
Basic API information
```json
{
  "message": "Portfolio Backend API Server",
  "version": "1.0.0",
  "status": "running"
}
```

#### GET /health
Health check endpoint
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600,
  "memory": {...}
}
```

#### GET /api/profile
Get complete profile information
```json
{
  "success": true,
  "data": {
    "name": "Seungchan An",
    "title": "AI Researcher",
    "email": "vpraise@naver.com",
    "description": "...",
    "skills": [...],
    "interests": [...],
    "socialLinks": {...}
  }
}
```

#### GET /api/profile/skills
Get skills only
```json
{
  "success": true,
  "data": ["Python", "JavaScript", "React", "..."]
}
```

#### GET /api/profile/contact
Get contact information only
```json
{
  "success": true,
  "data": {
    "email": "vpraise@naver.com",
    "socialLinks": {...}
  }
}
```

## 🚀 Deployment

### ☁️ Platform Options

| Platform | Best For | Cost | Difficulty |
|----------|----------|------|------------|
| **Vercel** | Frontend only | Free tier | Easy |
| **Netlify** | Static sites | Free tier | Easy |
| **Heroku** | Full-stack | Free tier | Medium |
| **AWS** | Production apps | Pay-as-go | Advanced |
| **DigitalOcean** | VPS hosting | $5/month | Medium |

### 🔧 Environment Variables

Create `.env` in backend directory:
```env
# Server Configuration
PORT=3001
NODE_ENV=production

# Security
CORS_ORIGIN=https://your-domain.com
HELMET_ENABLED=true

# Logging
LOG_LEVEL=error
```

### � Build Commands

```bash
# Frontend build
cd frontend && npm run build

# Backend start
cd backend && npm start

# Full build
npm run build
```

## �🛠️ Troubleshooting

### 🔍 Quick Diagnosis Tool

**Windows users: If you're having Node.js issues, run this first:**
```bash
# Run the automated diagnosis tool
diagnose-nodejs.bat
```

This tool will:
- Check if Node.js is installed
- Verify PATH configuration
- Test common Node.js commands
- Provide specific fix recommendations

### 🔧 Enhanced Script Features

Our batch files now include:
- **Auto-detection** of Node.js in common installation paths
- **Intelligent PATH fixing** for the current session
- **Detailed error messages** with specific solutions
- **Fallback mechanisms** when Node.js isn't in PATH

### ❌ Common Issues & Solutions

#### **"node is not recognized"**
```bash
# Solution: Install Node.js
# 1. Download from https://nodejs.org/
# 2. Install LTS version
# 3. Restart computer
# 4. Verify: node --version
```

#### **Port Already in Use**
```bash
# Check what's using the port
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Kill the process (Windows)
taskkill /PID [PID_NUMBER] /F

# Kill the process (Linux/macOS)
kill -9 [PID_NUMBER]
```

#### **Backend Connection Failed**
```bash
# 1. Check if backend is running
curl http://localhost:3001/health

# 2. Check firewall settings
# 3. Verify port 3001 is not blocked

# 4. Check logs in terminal for errors
```

#### **Dependencies Installation Failed**
```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install

# Try with different registry
npm install --registry https://registry.npmjs.org/
```

#### **React App Won't Start**
```bash
# Check Node.js version
node --version  # Should be 16+

# Clear React cache
rm -rf node_modules/.cache

# Reinstall React dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### **Windows Batch Files Issues**
```bash
# If start-backend.bat or start-frontend.bat don't work:

# 1. Check Node.js installation
diagnose-nodejs.bat

# 2. If Node.js is installed but not detected:
# - Close all Command Prompt windows
# - Open new Command Prompt as Administrator
# - Try running the script again

# 3. Manual start (alternative):
# For backend:
cd backend
"C:\Program Files\nodejs\npm.cmd" start

# For frontend:
cd frontend  
"C:\Program Files\nodejs\npm.cmd" start
```

#### **Servers Won't Start Separately**
```bash
# Make sure to run in separate terminals:

# Terminal 1 (Backend):
start-backend.bat
# Wait for "Backend Server Started!" message

# Terminal 2 (Frontend):
start-frontend.bat
# Wait for "webpack compiled" message
```

### 🔍 Debug Mode

```bash
# Backend with debug logs
cd backend
DEBUG=* npm start

# Frontend with verbose logging
cd frontend
VERBOSE=true npm start

# Both with debug info
DEBUG=* npm start
```

### 🆘 Getting Help

1. **Check the logs** in your terminal for error messages
2. **Verify prerequisites** (Node.js, npm versions)
3. **Try clean installation** using `clean-install-test.bat`
4. **Check GitHub Issues** for similar problems
5. **Run verification** with `npm run verify`

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 🔧 Development Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/personal-portfolio.git
cd personal-portfolio

# 3. Install dependencies
npm run install-all

# 4. Create a feature branch
git checkout -b feature/amazing-feature

# 5. Make your changes and test
npm start

# 6. Commit your changes
git commit -m 'Add some amazing feature'

# 7. Push to your fork
git push origin feature/amazing-feature

# 8. Open a Pull Request
```

### 📝 Contribution Guidelines

- **Code Style**: Follow existing code patterns
- **Testing**: Test your changes thoroughly
- **Documentation**: Update README if needed
- **Commits**: Use clear, descriptive commit messages
- **Pull Requests**: Provide detailed description of changes

### 🐛 Bug Reports

When reporting bugs, please include:
- Operating system and version
- Node.js and npm versions
- Error messages (full text)
- Steps to reproduce
- Expected vs actual behavior

### 💡 Feature Requests

For new features, please:
- Check existing issues first
- Describe the use case
- Explain why it would be valuable
- Consider implementation complexity

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Use commercially**
- ✅ **Modify freely** 
- ✅ **Distribute copies**
- ✅ **Include in private use**
- ❗ **Include license notice**

---

## 👨‍💻 Author

**Seungchan An**
- 🌟 **GitHub**: [@vpraise00](https://github.com/vpraise00)
- 📷 **Instagram**: [@vpraise_a](https://instagram.com/vpraise_a)
- 💼 **LinkedIn**: [seungchan-an](https://www.linkedin.com/in/%EC%8A%B9%EC%B0%AC-%EC%95%88-8a317a373/)
- � **Email**: vpraise@naver.com

---

## 🎯 Project Roadmap

### ✅ **Completed Features**
- [x] React frontend with dark mode
- [x] Node.js backend with REST API
- [x] Docker containerization
- [x] Responsive design
- [x] Interactive animations
- [x] Automated setup scripts
- [x] Comprehensive documentation

### 🔄 **In Progress**
- [ ] Unit test coverage
- [ ] CI/CD pipeline setup
- [ ] Performance optimizations
- [ ] Accessibility improvements

### 📋 **Future Enhancements**
- [ ] Blog/Articles section
- [ ] Contact form with email integration
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA features

### 🚀 **Version History**
- **v1.0.0** - Initial release with basic portfolio features
- **v1.1.0** - Added dark mode and animations
- **v1.2.0** - Docker support and deployment guides
- **v1.3.0** - Enhanced error handling and verification tools

---

## 🌟 Acknowledgments

- **React Team** - For the amazing frontend framework
- **Express.js** - For the robust backend framework
- **Node.js Community** - For the extensive ecosystem
- **Open Source Contributors** - For inspiration and libraries
- **GitHub** - For hosting and collaboration tools

---

<div align="center">

### 🌟 If this project helped you, please give it a star! 🌟

**Made with ❤️ by [Seungchan An](https://github.com/vpraise00)**

[⬆ Back to Top](#-personal-portfolio-website)

</div>