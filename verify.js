const http = require('http');
const fs = require('fs');
const path = require('path');

// 색상 코드 (Windows 터미널 호환)
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
};

console.log('\n' + colors.cyan + '🔍 Portfolio Website Verification Test' + colors.reset);
console.log('=' .repeat(50));

// 1. 프로젝트 구조 확인
console.log('\n' + colors.blue + '📁 Checking project structure...' + colors.reset);

const requiredFiles = [
    'package.json',
    'backend/package.json',
    'frontend/package.json',
    'backend/src/server.js',
    'frontend/src/App.js',
    'README.md'
];

let structureOk = true;
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(colors.green + '✅ ' + file + colors.reset);
    } else {
        console.log(colors.red + '❌ ' + file + colors.reset);
        structureOk = false;
    }
});

// 2. 의존성 확인
console.log('\n' + colors.blue + '📦 Checking dependencies...' + colors.reset);

const dependencyDirs = [
    'node_modules',
    'backend/node_modules',
    'frontend/node_modules'
];

let depsOk = true;
dependencyDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        console.log(colors.green + '✅ ' + dir + colors.reset);
    } else {
        console.log(colors.yellow + '⚠️  ' + dir + ' (run npm install)' + colors.reset);
        depsOk = false;
    }
});

// 3. 백엔드 서버 테스트
console.log('\n' + colors.blue + '🔧 Testing backend server...' + colors.reset);

// 백엔드 서버 시작
const serverScript = path.join(__dirname, 'backend', 'src', 'server.js');
let backendProcess;

try {
    // 서버 프로세스 시작
    const { spawn } = require('child_process');
    backendProcess = spawn('node', [serverScript], {
        cwd: path.join(__dirname, 'backend'),
        stdio: 'pipe'
    });

    // 서버 시작 대기
    setTimeout(() => {
        // 헬스체크 요청
        const req = http.request({
            hostname: 'localhost',
            port: 3001,
            path: '/health',
            method: 'GET'
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const healthData = JSON.parse(data);
                    if (healthData.status === 'OK') {
                        console.log(colors.green + '✅ Backend server is running' + colors.reset);
                        console.log(colors.green + '✅ Health check passed' + colors.reset);
                        
                        // API 테스트
                        testAPI();
                    } else {
                        console.log(colors.red + '❌ Health check failed' + colors.reset);
                        cleanup();
                    }
                } catch (e) {
                    console.log(colors.red + '❌ Invalid health check response' + colors.reset);
                    cleanup();
                }
            });
        });

        req.on('error', (err) => {
            console.log(colors.red + '❌ Backend server connection failed: ' + err.message + colors.reset);
            cleanup();
        });

        req.end();
    }, 2000); // 2초 대기

} catch (error) {
    console.log(colors.red + '❌ Failed to start backend server: ' + error.message + colors.reset);
    cleanup();
}

// API 테스트 함수
function testAPI() {
    console.log('\n' + colors.blue + '🌐 Testing API endpoints...' + colors.reset);
    
    const req = http.request({
        hostname: 'localhost',
        port: 3001,
        path: '/api/profile',
        method: 'GET'
    }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            try {
                const profileData = JSON.parse(data);
                if (profileData.success && profileData.data) {
                    console.log(colors.green + '✅ Profile API working' + colors.reset);
                    console.log(colors.green + '✅ Profile data: ' + profileData.data.name + colors.reset);
                } else {
                    console.log(colors.red + '❌ Profile API failed' + colors.reset);
                }
                showResults();
            } catch (e) {
                console.log(colors.red + '❌ Invalid profile API response' + colors.reset);
                showResults();
            }
        });
    });

    req.on('error', (err) => {
        console.log(colors.red + '❌ Profile API connection failed: ' + err.message + colors.reset);
        showResults();
    });

    req.end();
}

// 결과 표시
function showResults() {
    console.log('\n' + colors.cyan + '📊 Verification Results' + colors.reset);
    console.log('=' .repeat(50));
    
    if (structureOk && depsOk) {
        console.log(colors.green + '🎉 All checks passed!' + colors.reset);
        console.log('\n' + colors.white + '🚀 Ready to run:' + colors.reset);
        console.log(colors.yellow + '   npm start' + colors.reset);
        console.log(colors.yellow + '   or quick-start.bat' + colors.reset);
        console.log('\n' + colors.white + '🌐 Access URLs:' + colors.reset);
        console.log(colors.cyan + '   Frontend: http://localhost:3000' + colors.reset);
        console.log(colors.cyan + '   Backend:  http://localhost:3001' + colors.reset);
    } else {
        console.log(colors.red + '❌ Some checks failed' + colors.reset);
        if (!structureOk) {
            console.log(colors.yellow + '💡 Fix project structure issues first' + colors.reset);
        }
        if (!depsOk) {
            console.log(colors.yellow + '💡 Run: npm run install-all' + colors.reset);
        }
    }
    
    cleanup();
}

// 정리 함수
function cleanup() {
    if (backendProcess) {
        backendProcess.kill();
    }
    console.log('\n' + colors.white + '✨ Verification complete!' + colors.reset);
    process.exit(0);
}

// 프로세스 종료 시 정리
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
