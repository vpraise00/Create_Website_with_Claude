#!/bin/bash

# 개발 환경 시작 스크립트

echo "🚀 포트폴리오 웹사이트 개발 환경을 시작합니다..."

# 백엔드 의존성 설치
echo "📦 백엔드 의존성 설치 중..."
cd backend
npm install
cd ..

# 프론트엔드 의존성 설치
echo "📦 프론트엔드 의존성 설치 중..."
cd frontend
npm install
cd ..

# Docker Compose로 개발 환경 실행
echo "🐳 Docker Compose로 개발 환경 실행 중..."
docker-compose up --build

echo "✅ 개발 환경이 시작되었습니다!"
echo "🌐 프론트엔드: http://localhost:3000"
echo "🔧 백엔드: http://localhost:3001"
