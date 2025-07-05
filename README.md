# 🌟 Personal Portfolio Website

> 개인 포트폴리오 웹사이트 프로젝트입니다. React와 Node.js를 사용하여 제작되었으며, Docker로 컨테이너화되어 있습니다.

## 📋 목차

- [프로젝트 개요](#프로젝트-개요)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [빠른 시작](#빠른-시작)
- [실행 방법](#실행-방법)
- [개인 정보 수정](#개인-정보-수정)
- [배포](#배포)
- [트러블슈팅](#트러블슈팅)

## 🎯 프로젝트 개요

### 주요 기능
- 📱 **반응형 웹 디자인** - 모든 디바이스에서 최적화
- 🎨 **모던한 UI/UX** - 깔끔하고 전문적인 디자인
- 🔗 **소셜 미디어 링크** - GitHub, Instagram, LinkedIn 연결
- 🛠️ **기술 스택 소개** - 보유 기술 시각적 표시
- 📧 **연락처 정보** - 쉬운 연락 방법 제공
- 🐳 **Docker 지원** - 컨테이너화된 배포

### 특징
- ✅ **가상환경 불필요** - Node.js 프로젝트로 별도 가상환경 설정 없음
- ✅ **간편한 설치** - 자동화된 설치 스크립트 제공
- ✅ **원클릭 실행** - 배치 파일로 쉬운 실행
- ✅ **개발자 친화적** - 명확한 프로젝트 구조와 문서

## 🛠️ 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스 라이브러리
- **CSS3** - 모던한 스타일링
- **Axios** - HTTP 클라이언트

### Backend
- **Node.js** - JavaScript 런타임
- **Express.js** - 웹 프레임워크
- **CORS** - 교차 출처 리소스 공유
- **Helmet** - 보안 헤더 설정

### DevOps
- **Docker** - 컨테이너화
- **Docker Compose** - 멀티 컨테이너 관리

## 📁 프로젝트 구조

```
📦 Create_Website_with_Claude/
├── 📁 frontend/                   # React 프론트엔드
│   ├── 📁 public/                # 정적 파일
│   │   ├── 📄 index.html         # 메인 HTML
│   │   └── 📄 manifest.json      # PWA 설정
│   ├── 📁 src/
│   │   ├── 📁 components/        # React 컴포넌트
│   │   │   ├── 📄 Header.js      # 네비게이션 바
│   │   │   ├── 📄 About.js       # 개인 소개
│   │   │   ├── 📄 Skills.js      # 기술 스택
│   │   │   ├── 📄 Contact.js     # 연락처 & 소셜 링크
│   │   │   └── 📄 Footer.js      # 푸터
│   │   ├── 📁 styles/           # CSS 스타일시트
│   │   ├── 📄 App.js            # 메인 앱 컴포넌트
│   │   └── 📄 index.js          # 앱 진입점
│   ├── 🐳 Dockerfile            # 프론트엔드 컨테이너 설정
│   └── 📄 package.json          # 프론트엔드 의존성
├── 📁 backend/                   # Node.js 백엔드
│   ├── 📁 src/
│   │   ├── 📁 controllers/       # 비즈니스 로직
│   │   ├── 📁 routes/           # API 라우트
│   │   └── 📄 server.js         # Express 서버
│   ├── 🐳 Dockerfile            # 백엔드 컨테이너 설정
│   └── 📄 package.json          # 백엔드 의존성
├── 🐳 docker-compose.yml        # 개발환경 Docker 설정
├── 🐳 docker-compose.prod.yml   # 프로덕션 Docker 설정
├── 🚀 install.bat              # 의존성 설치 스크립트
├── 🎯 quick-start.bat          # 대화형 실행 가이드
├── ⚙️ start-backend.bat        # 백엔드 서버 실행
├── 🎨 start-frontend.bat       # 프론트엔드 서버 실행
├── 🧪 test-backend.bat         # 백엔드 테스트
└── 📖 README.md                # 프로젝트 문서
```

## 🚀 빠른 시작

### � 필요한 환경
- **Node.js 18+** - [nodejs.org](https://nodejs.org/)에서 다운로드
- **Docker & Docker Compose** (선택사항) - 컨테이너 실행 시 필요

### ⚡ 원클릭 실행 (권장)
```cmd
quick-start.bat
```

### 📦 수동 설치
```cmd
# 1. 의존성 설치
install.bat

# 2. 백엔드 실행 (터미널 1)
start-backend.bat

# 3. 프론트엔드 실행 (터미널 2)
start-frontend.bat
```

### 🌐 접속 주소
- **메인 웹사이트**: http://localhost:3000
- **백엔드 API**: http://localhost:3001
- **헬스체크**: http://localhost:3001/health

## 🚀 빠른 시작 가이드

### 🎯 가장 간단한 실행 방법 (추천)

1. **Node.js 설치**
   - https://nodejs.org/ 에서 LTS 버전 다운로드 및 설치
   - 설치 시 "Add to PATH" 옵션 체크

2. **빠른 실행 가이드 사용**
   ```cmd
   quick-start.bat
   ```
   
   또는 개별 실행:

3. **의존성 설치** (최초 1회)
   ```cmd
   install.bat
   ```

4. **백엔드 서버 실행** (첫 번째 터미널)
   ```cmd
   start-backend.bat
   ```

5. **프론트엔드 서버 실행** (두 번째 터미널)
   ```cmd
   start-frontend.bat
   ```

6. **웹사이트 접속**
   - 메인 웹사이트: http://localhost:3000
   - 백엔드 API: http://localhost:3001
   - 헬스체크: http://localhost:3001/health

## 🎮 실행 방법

### 📋 실행 스크립트 목록

| 스크립트 | 아이콘 | 기능 | 설명 |
|---------|------|------|------|
| `quick-start.bat` | 🎯 | 대화형 실행 가이드 | 메뉴 선택으로 쉬운 실행 |
| `install.bat` | 📦 | 의존성 설치 | 최초 1회 실행 필요 |
| `start-backend.bat` | 🔧 | 백엔드 실행 | API 서버 시작 |
| `start-frontend.bat` | 🎨 | 프론트엔드 실행 | 웹사이트 시작 |
| `test-backend.bat` | 🧪 | 백엔드 테스트 | 서버 동작 테스트 |

### 🐳 Docker 실행
```cmd
# 개발 환경
docker-compose up --build

# 프로덕션 환경
docker-compose -f docker-compose.prod.yml up --build
```

### 🖥️ 수동 실행 (개발자용)
```cmd
# 백엔드 수동 실행
cd backend
set "PATH=C:\Program Files\nodejs;%PATH%"
npm start

# 프론트엔드 수동 실행 (새 터미널)
cd frontend
set "PATH=C:\Program Files\nodejs;%PATH%"
npm start
```

## 🎨 개인 정보 수정

### 📝 기본 정보 수정
`backend/src/controllers/profileController.js` 파일을 편집하세요:

```javascript
const profileData = {
  name: '당신의 이름',                    // 👤 이름
  title: '당신의 직책',                   // 💼 직책
  email: 'your-email@example.com',      // 📧 이메일
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

### 🎨 스타일 수정
`frontend/src/styles/` 폴더의 CSS 파일들을 수정하여 디자인을 변경하세요:

- `App.css` - 전체 앱 스타일
- `Header.css` - 헤더 및 네비게이션
- `About.css` - 소개 섹션
- `Skills.css` - 기술 스택 섹션
- `Contact.css` - 연락처 섹션
- `Footer.css` - 푸터

## 🛠️ 트러블슈팅

### 🚨 Node.js 관련 문제

#### ❌ 'node'은(는) 내부 또는 외부 명령이 아닙니다

**원인**: Node.js가 설치되지 않았거나 시스템 PATH에 등록되지 않음

**해결방법**:
1. **Node.js 설치 확인**
   - https://nodejs.org/ 에서 LTS 버전 다운로드
   - 설치 시 "Add to PATH" 옵션 체크

2. **PATH 문제 해결**
   ```cmd
   # 명령 프롬프트 종료 후 다시 실행
   # 또는 컴퓨터 재시작
   
   # 수동 PATH 추가:
   # 내 PC → 속성 → 고급 시스템 설정 → 환경 변수
   # → 시스템 변수 → Path → 편집 → 새로 만들기
   # → C:\Program Files\nodejs 추가
   ```

3. **설치 확인**
   ```cmd
   node --version
   npm --version
   ```

### 🔌 포트 관련 문제

#### ❌ 포트가 이미 사용중입니다

**확인 방법**:
```cmd
netstat -ano | findstr :3000
netstat -ano | findstr :3001
```

**해결방법**:
```cmd
# 프로세스 ID 확인 후 종료
taskkill /PID [프로세스ID] /F
```

### 📦 의존성 설치 실패

#### ❌ npm install 실패

**해결방법**:
```cmd
# npm 캐시 정리
npm cache clean --force

# 재설치
npm install

# 또는 node_modules 삭제 후 재설치
rmdir /s node_modules
npm install
```

### � Docker 관련 문제

#### ❌ Docker Desktop이 실행되지 않음

**해결방법**:
- Docker Desktop 설치 및 실행 확인
- WSL 2 설정 확인 (Windows)
- 관리자 권한으로 실행

## 🚀 배포

### 🐳 Docker Hub 배포
```bash
# 이미지 빌드
docker build -t your-username/portfolio-frontend ./frontend
docker build -t your-username/portfolio-backend ./backend

# 이미지 푸시
docker push your-username/portfolio-frontend
docker push your-username/portfolio-backend
```

### ☁️ 클라우드 배포 옵션
- **AWS EC2, ECS** - 가상 서버 또는 컨테이너 서비스
- **Google Cloud Platform** - GCE, Cloud Run
- **Heroku** - 간편한 PaaS 플랫폼
- **Vercel** - 프론트엔드 배포 전용
- **Netlify** - 정적 사이트 호스팅

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 👨‍💻 개발자

**Seungchan An**
- 🐙 GitHub: https://github.com/seungchan-an
- 📷 Instagram: https://instagram.com/seungchan.an
- 💼 LinkedIn: https://linkedin.com/in/seungchan-an

---

## 🎯 프로젝트 요약

### ✅ 완성된 기능
- **프론트엔드** - React 기반 반응형 웹사이트
- **백엔드** - Node.js/Express API 서버
- **Docker** - 컨테이너화된 배포 환경
- **자동화** - 원클릭 설치 및 실행 스크립트

### 🔧 기술적 특징
- **가상환경 불필요** - Node.js의 package.json으로 의존성 관리
- **격리된 환경** - 각 프로젝트별 node_modules로 자동 격리
- **크로스 플랫폼** - Windows, Mac, Linux 지원
- **확장 가능** - 모듈화된 구조로 쉬운 기능 추가

### 🎨 커스터마이징 가능
- **개인 정보** - 이름, 직책, 소개글, 기술 스택
- **소셜 링크** - GitHub, Instagram, LinkedIn 등
- **디자인** - CSS 파일 수정으로 스타일 변경
- **기능 추가** - React 컴포넌트 추가로 새 섹션 생성

**🎉 이제 `quick-start.bat`을 실행하여 나만의 포트폴리오 웹사이트를 시작해보세요!**