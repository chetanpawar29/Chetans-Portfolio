import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#6b7280', 
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              lineHeight: '1.7'
            }}>
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
            
            <div className="hero-buttons" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
              <a 
                href="mailto:chetanpawar2901@gmail.com" 
                className="btn btn-outline"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
              >
                📧 Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/chetan-pawar29/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
              >
                💼 LinkedIn
              </a>
              <a 
                href="https://github.com/chetanpawar29" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
              >
                👨‍💻 GitHub
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows="5"
                ></textarea>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact