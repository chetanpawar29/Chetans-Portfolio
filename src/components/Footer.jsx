import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <a 
              href="mailto:chetanpawar2901@gmail.com" 
              style={{ color: '#60a5fa', textDecoration: 'none' }}
            >
              📧 Email
            </a>
            <a 
              href="https://www.linkedin.com/in/chetan-pawar29/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'none' }}
            >
              💼 LinkedIn
            </a>
            <a 
              href="https://github.com/chetanpawar29" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'none' }}
            >
              👨‍💻 GitHub
            </a>
          </div>
          
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#9ca3af' }}>
            © {currentYear} Chetan Pawar. All rights reserved.
          </p>
          
          
        </div>
      </div>
    </footer>
  )
}

export default Footer