import React, { useState, useEffect, useRef } from 'react';
import '../styles/About.css';

const About = ({ profileData }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPhysicsMode, setIsPhysicsMode] = useState(false);
  const [ballPosition, setBallPosition] = useState({ x: 400, y: 300 });
  const [ballVelocity, setBallVelocity] = useState({ x: 0, y: 0 });
  const [ballRotation, setBallRotation] = useState(0);
  const [clickEffect, setClickEffect] = useState({ show: false, x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  const profileImageRef = useRef(null);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  // GitHub Pages 배포를 위한 이미지 경로
  const imagePath = '/Create_Website_with_Claude/images/image.jpg';

  // Mouse tracking for normal mode
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current && !isPhysicsMode) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isPhysicsMode]);

  // Physics animation loop
  useEffect(() => {
    if (!isPhysicsMode) return;

    const animate = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;
      const ballRadius = isMobile ? 60 : 75;

      setBallPosition(prev => {
        setBallVelocity(prevVel => {
          let newVelX = prevVel.x;
          let newVelY = prevVel.y;

          // Apply gravity
          newVelY += 0.8;

          // Apply air resistance
          newVelX *= 0.998;
          newVelY *= 0.998;

          // Calculate new position
          let newX = prev.x + newVelX;
          let newY = prev.y + newVelY;

          // Horizontal boundary collision
          if (newX <= ballRadius) {
            newX = ballRadius;
            newVelX = Math.abs(newVelX) * 0.7;
          } else if (newX >= containerWidth - ballRadius) {
            newX = containerWidth - ballRadius;
            newVelX = -Math.abs(newVelX) * 0.7;
          }

          // Vertical boundary collision
          if (newY >= containerHeight - ballRadius) {
            newY = containerHeight - ballRadius;
            newVelY = -Math.abs(newVelY) * 0.6;
            newVelX *= 0.9; // Ground friction
            
            // Stop very small bounces
            if (Math.abs(newVelY) < 2) {
              newVelY = 0;
            }
          } else if (newY <= ballRadius) {
            newY = ballRadius;
            newVelY = Math.abs(newVelY) * 0.7;
          }

          // Update position immediately
          setBallPosition({ x: newX, y: newY });

          return { x: newVelX, y: newVelY };
        });

        // Update rotation based on horizontal velocity
        setBallRotation(prev => prev + ballVelocity.x * 2);

        return prev; // This will be overridden by setBallPosition above
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPhysicsMode, ballVelocity]);

  // Handle profile image click
  const handleProfileClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isPhysicsMode) {
      // Start physics mode with click effect
      const rect = profileImageRef.current.getBoundingClientRect();
      
      // Show click effect
      setClickEffect({
        show: true,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });

      // Hide click effect after animation
      setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 800);

      // Set initial ball position
      setBallPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
      
      // Give initial random velocity
      setBallVelocity({
        x: (Math.random() - 0.5) * 15,
        y: -Math.random() * 10 - 5
      });
      
      setBallRotation(0);
      setIsPhysicsMode(true);
    } else {
      // Add impulse force when clicked in physics mode
      const clickX = e.clientX;
      const clickY = e.clientY;
      
      setClickEffect({
        show: true,
        x: clickX,
        y: clickY
      });

      setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 600);

      setBallVelocity(prev => ({
        x: prev.x + (Math.random() - 0.5) * 20,
        y: prev.y - 15 - Math.random() * 10
      }));
    }
  };

  // Handle stop physics mode
  const handleStopPhysics = (e) => {
    if (e.key === 'Escape' || (e.type === 'dblclick')) {
      setIsPhysicsMode(false);
      setBallVelocity({ x: 0, y: 0 });
      setBallPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      setBallRotation(0);
    }
  };

  useEffect(() => {
    if (isPhysicsMode) {
      document.addEventListener('keydown', handleStopPhysics);
      document.addEventListener('dblclick', handleStopPhysics);
      
      return () => {
        document.removeEventListener('keydown', handleStopPhysics);
        document.removeEventListener('dblclick', handleStopPhysics);
      };
    }
  }, [isPhysicsMode]);

  // Calculate mouse interaction transform for normal mode
  const getMouseTransform = () => {
    if (isPhysicsMode) return '';
    
    const centerX = 300;
    const centerY = 200;
    
    const deltaX = (mousePosition.x - centerX) * 0.03;
    const deltaY = (mousePosition.y - centerY) * 0.03;
    
    return `translate(${deltaX}px, ${deltaY}px) scale(${1 + Math.abs(deltaX + deltaY) * 0.002})`;
  };

  // 이미지 로드 성공 핸들러
  const handleImageLoad = () => {
    console.log('✅ 이미지 로드 성공:', imagePath);
    setImageError(false);
  };

  // 이미지 로드 실패 핸들러
  const handleImageError = () => {
    console.error('❌ 이미지 로드 실패:', imagePath);
    setImageError(true);
  };

  return (
    <section id="about" className="about">
      <div className="container" ref={containerRef}>
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <h3>{profileData.title}</h3>
            <p>{profileData.description}</p>
            <div className="about-details">
              <h4>Research Interests</h4>
              <ul>
                {profileData.interests && profileData.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p>📧 Email: <a href={`mailto:${profileData.email}`}>{profileData.email}</a></p>
              <p>📍 Location: Suwon, South Korea</p>
              <p>🎓 Tech University of Korea (4th year)</p>
            </div>
          </div>
          
          <div className="about-image">
            {!isPhysicsMode ? (
              // Normal mode - image in original position
              <div 
                className="profile-image"
                ref={profileImageRef}
                onClick={handleProfileClick}
                style={{
                  transform: getMouseTransform(),
                  cursor: 'pointer',
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {!imageError ? (
                  <img 
                    src={imagePath}
                    alt="Profile"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      display: 'block'
                    }}
                  />
                ) : (
                  <div className="profile-placeholder">
                    <div className="placeholder-content">
                      <div className="placeholder-icon">👤</div>
                      <span>프로필 이미지</span>
                      <small>경로: {imagePath}</small>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Physics mode - floating ball
              <div 
                className="profile-image physics-mode"
                ref={profileImageRef}
                onClick={handleProfileClick}
                style={{
                  position: 'fixed',
                  left: `${ballPosition.x - (window.innerWidth <= 768 ? 60 : 75)}px`,
                  top: `${ballPosition.y - (window.innerWidth <= 768 ? 60 : 75)}px`,
                  width: window.innerWidth <= 768 ? '120px' : '150px',
                  height: window.innerWidth <= 768 ? '120px' : '150px',
                  zIndex: 1000,
                  cursor: 'pointer',
                  transition: 'none',
                  transform: `rotate(${ballRotation}deg)`
                }}
              >
                {!imageError ? (
                  <img 
                    src={imagePath}
                    alt="Profile"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      display: 'block'
                    }}
                  />
                ) : (
                  <div className="profile-placeholder">
                    <div className="placeholder-content">
                      <div className="placeholder-icon">👤</div>
                      <span>프로필 이미지</span>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {isPhysicsMode && (
              <div className="physics-info">
                <p>🎾 Physics Mode Active!</p>
                <p>🖱️ Click the image to apply force</p>
                <p>🔄 Double-click or press ESC to stop</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Click Effect */}
      {clickEffect.show && (
        <div 
          className="click-effect"
          style={{
            position: 'fixed',
            left: `${clickEffect.x}px`,
            top: `${clickEffect.y}px`,
            zIndex: 1001,
            pointerEvents: 'none'
          }}
        >
          <div className="ripple"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
        </div>
      )}
    </section>
  );
};

export default About;
