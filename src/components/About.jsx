import React from 'react'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="card" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'justify' }}>
              A passionate <strong>B.Tech student in Computer Engineering</strong> at R.C. Patel Institute of Technology, Shirpur, 
              with a strong academic record (<strong>CGPA 7.97 until 6th semester</strong>). I'm deeply interested in full-stack development 
              and building impactful software solutions.
            </p>
            
            <p style={{ fontSize: '1.1rem', textAlign: 'justify', marginBottom: '2rem' }}>
              My journey in technology is driven by curiosity and a desire to solve real-world problems through code. 
              I specialize in <strong>Java backend development with Spring Boot</strong> and modern frontend technologies, 
              creating secure, scalable, and efficient applications.
            </p>
          </div>
          
          <div className="hero-buttons" style={{ justifyContent: 'center' }}>
            <a href="#experience" className="btn">View My Experience</a>
            <a href="#skills" className="btn btn-outline">See My Skills</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About