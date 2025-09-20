import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java (Core & Advanced)", "C", "JavaScript"]
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5"]
    },
    {
      title: "Backend Frameworks",
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "Data JPA", "REST APIs", "JWT", "Microservices"]
    },
    {
      title: "Database Technologies",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "VSCode", "IntelliJ IDEA", "Eclipse", "Postman", "XAMPP", "Vercel"]
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card skill-category"
              style={{ 
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '2px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Category Icon/Decoration */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                borderRadius: '50%',
                opacity: 0.3
              }}></div>
              
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    onClick={() => {
                      // Add click animation
                      const element = document.activeElement;
                      element.style.transform = 'scale(0.95)';
                      setTimeout(() => {
                        element.style.transform = '';
                      }, 150);
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem' }}>
            Continuously learning and exploring new technologies to build better software solutions.
          </p>
          <div className="hero-buttons" style={{ justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
            <a href="#projects" className="btn">See My Projects</a>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Skills