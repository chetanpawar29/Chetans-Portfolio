import React from 'react'
import chetanImage from '../assets/images/chetan4.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Chetan Pawar</h1>
            <div className="title">Computer Engineering Student</div>
            <p className="tagline">
              Passionate about building secure, scalable, and efficient software solutions. 
              Combining technical expertise with problem-solving skills to develop efficient software solutions.
            </p>
            
            <div className="contact-info">
              <a href="mailto:chetanpawar2901@gmail.com">
                📧 chetanpawar2901@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/chetan-pawar29/" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn Profile
              </a>
              <a href="https://github.com/chetanpawar29" target="_blank" rel="noopener noreferrer">
                👨‍💻 GitHub Profile
              </a>
            </div>

            <div className="hero-buttons">
              <a href="#contact" className="btn">Get In Touch</a>
              <a 
                href="/Chetan_Pawar_Resume1.pdf" 
                download="Chetan_Pawar_Resume.pdf"
                className="btn btn-outline"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div 
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '600',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Replace this div with your actual image when available */}
              <img 
                src={chetanImage} 
                alt="Chetan Pawar" 
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '20px'
                }} 
                />
              
              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero