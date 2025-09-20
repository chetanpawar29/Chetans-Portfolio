import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Java Backend Developer Intern",
      company: "ITWebInfo, Indore",
      duration: "Aug 2025 – Present",
      type: "Remote",
      description: [
        "Built and deployed 7+ RESTful APIs (Participants, BetOutcomeResult, Competition DTOs) using Java and Spring Boot.",
        "Resolved 4+ critical issues in SubParticipant APIs, improving data accuracy and system reliability.",
        "Contributed to FLEXBETS-SPORT microservice, integrating live sports APIs and transforming data into unified REST responses.",
        "Collaborated via GitHub with 3+ pull requests merged, ensuring clean and maintainable code."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Celebal Technologies, Pune",
      duration: "Jun 2025 – Aug 2025",
      type: "Remote",
      description: [
        "Completed Celebal Summer Internship (CSI) 2025, specializing in SQL Optimization.",
        "Developed an Employee Check-In/Check-Out Calculation System for attendance and work-hour reports.",
        "Executed multiple SQL assignments, improving query performance and accuracy."
      ]
    },
    {
      title: "Java Backend Developer Intern",
      company: "R3 Systems India Pvt. Ltd., Nashik",
      duration: "Jul 2024 – Aug 2024",
      type: "Remote",
      description: [
        "Developed responsive web applications using Java, Spring Framework, Hibernate, JSP, and Servlets.",
        "Integrated MySQL and JDBC for efficient database management.",
        "Built dynamic frontends with HTML, CSS, JavaScript, and Bootstrap5.",
        "Debugged and optimized code for performance and scalability."
      ]
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-duration">{exp.duration} – {exp.type}</div>
              </div>
              
              <div className="experience-description">
                <ul>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience