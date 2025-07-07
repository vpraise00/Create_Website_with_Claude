# GitHub Pages 배포 가이드

이 가이드는 React 포트폴리오 웹사이트를 GitHub Pages에 배포하는 방법을 설명합니다.

## 사전 준비 사항

1. **GitHub 계정** 및 **Git 설치**
2. **GitHub 리포지토리 생성**
3. **로컬 Git 설정**

## 단계별 배포 방법

### 1. GitHub 리포지토리 생성
1. GitHub에서 새 리포지토리 생성
2. 리포지토리 이름 기억 (예: `my-portfolio`)
3. Public 리포지토리로 생성 (GitHub Pages는 Public 리포지토리에서만 무료)

### 2. 로컬 프로젝트와 GitHub 연결
```bash
# 프로젝트 루트 디렉토리에서
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[your-username]/[repository-name].git
git push -u origin main
```

### 3. package.json에 homepage 필드 추가
`frontend/package.json` 파일에 다음 라인을 추가:
```json
{
  "name": "portfolio-frontend",
  "version": "1.0.0",
  "homepage": "https://[your-username].github.io/[repository-name]",
  ...
}
```

**예시:**
```json
"homepage": "https://vpraise00.github.io/my-portfolio",
```

### 4. 배포 스크립트 실행
```bash
# 프로젝트 루트 디렉토리에서
deploy-to-github-pages.bat
```

### 5. GitHub Pages 설정 확인
1. GitHub 리포지토리 페이지로 이동
2. **Settings** → **Pages** 섹션으로 이동
3. **Source**가 **Deploy from a branch**로 설정되어 있는지 확인
4. **Branch**가 **gh-pages**로 설정되어 있는지 확인

## 배포 후 확인

- 웹사이트 주소: `https://vpraise00.github.io/Create_Website_with_Claude`
- 배포 후 몇 분 정도 기다려야 변경사항이 반영됩니다.

## 업데이트 방법

코드를 수정한 후 다시 배포하려면:
1. 변경사항을 Git에 커밋
2. `deploy-to-github-pages.bat` 다시 실행

## 문제 해결

### 빌드 오류
- `npm run build` 명령이 실패하는 경우, 코드에 오류가 있을 수 있습니다.
- 터미널에서 오류 메시지를 확인하고 수정하세요.

### 배포 실패
- Git 설정이 올바른지 확인
- GitHub 토큰이 필요한 경우, Personal Access Token을 설정
- 리포지토리 권한을 확인

### 웹사이트가 표시되지 않는 경우
- GitHub Pages 설정이 올바른지 확인
- 몇 분 후 다시 시도 (배포 반영에 시간이 소요됨)
- 브라우저 캐시를 지우고 다시 시도

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
