# 📁 Project Structure

```
personal-portfolio/
├── 📁 backend/                    # Node.js/Express API Server
│   ├── 📁 src/
│   │   ├── server.js             # Main server file
│   │   ├── 📁 controllers/       # API controllers
│   │   │   └── profileController.js
│   │   └── 📁 routes/            # API routes
│   │       └── profile.js
│   ├── package.json              # Backend dependencies
│   └── Dockerfile                # Docker configuration
│
├── 📁 frontend/                   # React Client Application
│   ├── 📁 public/
│   │   ├── index.html            # Main HTML template
│   │   ├── manifest.json         # PWA manifest
│   │   └── 📁 images/            # Static images
│   ├── 📁 src/
│   │   ├── index.js              # React entry point
│   │   ├── App.js                # Main App component
│   │   ├── 📁 components/        # React components
│   │   │   ├── Header.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   └── 📁 styles/            # CSS stylesheets
│   │       ├── App.css
│   │       ├── Header.css
│   │       ├── About.css
│   │       ├── Skills.css
│   │       ├── Contact.css
│   │       └── Footer.css
│   ├── package.json              # Frontend dependencies
│   └── Dockerfile                # Docker configuration
│
├── 📁 .vscode/                    # VS Code workspace settings
├── 📄 .gitignore                  # Git ignore rules
├── 📄 docker-compose.yml         # Docker development setup
├── 📄 docker-compose.prod.yml    # Docker production setup
├── 📄 package.json               # Root package.json (monorepo)
├── 📄 README.md                  # Main documentation
├── 📄 GITHUB_PAGES_GUIDE.md      # GitHub Pages deployment guide
│
├── 🔧 install.bat                # Windows installation script
├── 🔧 quick-start.bat            # Windows quick start script
├── 🔧 start-backend.bat          # Windows backend start script
├── 🔧 start-frontend.bat         # Windows frontend start script
├── 🔧 deploy-to-github-pages.bat # GitHub Pages deployment script
└── 🔧 diagnose-nodejs.bat        # Node.js diagnostic script
```

## 📋 File Descriptions

### 🎯 Core Files
- **README.md** - Main project documentation and setup guide
- **package.json** - Root dependencies and scripts for monorepo management
- **GITHUB_PAGES_GUIDE.md** - Detailed GitHub Pages deployment instructions

### 🛠️ Windows Scripts
- **install.bat** - Install all dependencies (backend + frontend)
- **quick-start.bat** - Start both servers with one command
- **start-backend.bat** - Start only the backend server
- **start-frontend.bat** - Start only the frontend server
- **deploy-to-github-pages.bat** - Deploy to GitHub Pages
- **diagnose-nodejs.bat** - Troubleshoot Node.js installation

### 🐳 Docker Files
- **docker-compose.yml** - Development environment setup
- **docker-compose.prod.yml** - Production environment setup
- **backend/Dockerfile** - Backend container configuration
- **frontend/Dockerfile** - Frontend container configuration

### 📱 Frontend Structure
- **App.js** - Main React component with routing and state management
- **components/** - Reusable UI components
- **styles/** - CSS modules for styling
- **public/images/** - Static assets and images

### 🔧 Backend Structure
- **server.js** - Express server setup with middleware
- **controllers/** - Business logic for API endpoints
- **routes/** - API route definitions
- **package.json** - Backend-specific dependencies

## 🚀 Getting Started

1. **Install Dependencies**: Run `install.bat` (Windows) or `npm run install-all`
2. **Start Development**: Run `quick-start.bat` (Windows) or `npm start`
3. **Access Application**: Open http://localhost:3000
4. **API Endpoints**: Available at http://localhost:3001

## 🌐 Deployment Options

- **GitHub Pages**: Use `deploy-to-github-pages.bat` for static deployment
- **Docker**: Use `docker-compose up` for containerized deployment
- **Manual**: Build frontend with `npm run build` and deploy build folder

## 🔧 Maintenance

- **Clean Install**: Delete `node_modules` and run `install.bat` again
- **Update Dependencies**: Run `npm update` in root, backend, and frontend folders
- **Check Ports**: Use `npm run check-ports` to verify port availability
