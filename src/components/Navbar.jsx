import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <button 
            className="logo"
            onClick={() => scrollToSection('home')}
            style={{
              background: 'none',
              border: 'none',
              color: '#2563eb',
              font: 'inherit',
              fontSize: '1.5rem',
              fontWeight: '700',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#1d4ed8'}
            onMouseLeave={(e) => e.target.style.color = '#2563eb'}
          >
            Chetan's Portfolio
          </button>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={activeSection === item.id ? 'active' : ''}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    font: 'inherit',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'color 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar