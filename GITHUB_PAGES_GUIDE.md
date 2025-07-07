# 🚀 GitHub Pages 배포 가이드

이 가이드는 React 포트폴리오 웹사이트를 GitHub Pages에 배포하는 방법을 설명합니다.

## 🎯 Quick Start (가장 빠른 방법)

```bash
# 1. 이 리포지토리를 fork 또는 clone
git clone https://github.com/vpraise00/Create_Website_with_Claude.git
cd Create_Website_with_Claude

# 2. 의존성 설치
install.bat

# 3. 즉시 배포
quick-deploy.bat
```

## 📋 사전 준비 사항

1. **GitHub 계정** 및 **Git 설치**
2. **Node.js 16+** 설치
3. **GitHub 리포지토리** (public 권장)

## 📝 단계별 배포 방법

### 1. GitHub 리포지토리 준비
1. 이 리포지토리를 **Fork** 하거나 새 리포지토리 생성
2. 리포지토리 이름 기억 (예: `my-portfolio`)
3. **Public 리포지토리**로 설정 (GitHub Pages 무료 사용)

### 2. 로컬 설정 (새 리포지토리인 경우)
```bash
# 프로젝트 루트 디렉토리에서
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/[your-username]/[repository-name].git
git push -u origin main
```

### 3. homepage 설정
`frontend/package.json` 파일에서 `homepage` 필드를 수정:
```json
{
  "name": "portfolio-frontend",
  "version": "1.0.0",
  "homepage": "https://[your-username].github.io/[repository-name]",
  ...
}
```

**실제 예시:**
```json
"homepage": "https://vpraise00.github.io/Create_Website_with_Claude",
```

### 4. 배포 실행

**옵션 1: 빠른 배포**
```bash
quick-deploy.bat
```

**옵션 2: 상세 배포**
```bash
deploy-to-github-pages.bat
```

**옵션 3: 수동 배포**
```bash
cd frontend
npm run build
npm run deploy
```

### 5. GitHub Pages 설정 확인
1. GitHub 리포지토리 페이지로 이동
2. **Settings** → **Pages** 섹션으로 이동
3. **Source**가 **Deploy from a branch**로 설정되어 있는지 확인
4. **Branch**가 **gh-pages**로 설정되어 있는지 확인

## 🎉 배포 완료!

- **웹사이트 주소**: `https://[your-username].github.io/[repository-name]`
- **예시**: https://vpraise00.github.io/Create_Website_with_Claude
- **반영 시간**: 배포 후 2-5분 소요

## 🔄 업데이트 방법

코드를 수정한 후 다시 배포하려면:

```bash
# 간단한 방법
quick-deploy.bat

# 또는 Git 커밋 후 배포
git add .
git commit -m "Update portfolio content"
git push
quick-deploy.bat
```

## 🚨 문제 해결

### 빌드 오류 (Build Failed)
```bash
# 깨끗한 설치
npm run clean
install.bat

# 또는 수동으로
cd frontend
rm -rf node_modules
npm install
npm run build
```

### 배포 실패 (Deploy Failed)
```bash
# Git 설정 확인
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 원격 리포지토리 확인
git remote -v

# 수동 배포 시도
cd frontend
npm run deploy
```

### 웹사이트가 표시되지 않음
1. **GitHub Pages 설정 확인**
   - Settings → Pages → Source: gh-pages branch
2. **캐시 문제**
   - 브라우저에서 Ctrl+F5 (강제 새로고침)
   - 시크릿 모드로 접속 시도
3. **시간 문제**
   - 배포 후 최대 10분 대기

### homepage URL 오류
```json
// frontend/package.json에서 확인
"homepage": "https://username.github.io/repository-name"

// 올바른 예시
"homepage": "https://vpraise00.github.io/Create_Website_with_Claude"
```

### 404 Error (가장 흔한 문제)
```bash
# 1. gh-pages 브랜치가 없는 경우
cd frontend
npx gh-pages -d build -r https://github.com/[username]/[repository].git

# 2. GitHub Pages 설정 확인
# GitHub → Settings → Pages → Source: gh-pages branch

# 3. 빌드 파일 확인
cd frontend
npm run build
# build 폴더에 index.html이 있는지 확인
```

### 브랜치 문제
```bash
# gh-pages 브랜치 확인
git branch -a

# gh-pages 브랜치가 없으면 강제 생성
cd frontend
npx gh-pages -d build -r https://github.com/username/repository.git
```

## 추가 기능

### 사용자 정의 도메인
- 사용자 정의 도메인을 사용하려면 `public/CNAME` 파일을 생성하고 도메인을 입력하세요.

### HTTPS 강제 적용
- GitHub Pages 설정에서 "Enforce HTTPS" 옵션을 활성화하세요.

## 예시 완성된 웹사이트

배포가 완료되면 다음과 같은 주소에서 접근할 수 있습니다:
`https://vpraise00.github.io/my-portfolio`

## 참고 자료

- [GitHub Pages 공식 문서](https://pages.github.com/)
- [React 앱 배포 가이드](https://create-react-app.dev/docs/deployment/#github-pages)
- [gh-pages 패키지 문서](https://www.npmjs.com/package/gh-pages)
