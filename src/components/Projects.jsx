import React from 'react'
import chefImg from "../assets/images/chef.jpeg";
import vaxiImg from "../assets/images/vaxiReminder.png";
import autoImg from "../assets/images/autoschedulo.png";
import inventoryImg from "../assets/images/inventry.jpeg";
import travelImg from "../assets/images/Travel.png";

const Projects = () => {
    const projects = [
    {
        title: "My-Chef-Now",
        tech: "Java, Spring Boot, Spring Security, Data JPA, PostgreSQL, REST API, JWT",
        description: "Developed a secure chef booking platform with role-based authentication (JWT), enabling customers to book chefs, chefs to manage bookings, and admins to approve registrations.",
        image: chefImg,
        githubUrl: "https://github.com/chetanpawar29/My-Chef-Now"
    },
    {
        title: "VaxiReminder",
        tech: "Java, Spring Framework, MySQL, HTML, CSS, JavaScript",
        description: "Built a child vaccination reminder system with hospital/parent roles, secure authentication, and automated 30-day prior reminders.",
        image: vaxiImg,
        githubUrl: "https://github.com/chetanpawar29/VaxiReminder"
    },
    {
        title: "AutoSchedulo",
        tech: "Java, Spring Framework, MySQL, HTML, CSS, JavaScript, Mapbox API",
        description: "Designed a bus scheduling system to automate routes, crew assignments, and duty linking.",
        image: autoImg,
        githubUrl: "https://github.com/chetanpawar29/AutoSchedulo"
    },
    {
        title: "Inventory Management Tool",
        tech: "Java, Spring Framework, Hibernate, MySQL, JSP, Servlet",
        description: "Developed a web-based inventory system with CRUD for products/suppliers, real-time stock tracking.",
        image: inventoryImg,
        githubUrl: "https://github.com/chetanpawar29/Inventory_Management_Tool"
    },
    {
        title: "Travel Planner",
        tech: "Java, Spring Framework, JSP, Servlet, MySQL, HTML, CSS, JavaScript",
        description: "Created a travel planning app to manage itineraries, destinations, and bookings.",
        image: travelImg,
        githubUrl: "https://github.com/chetanpawar29/Travel_Planner",
        liveUrl: "https://travel-planner-henna.vercel.app/"
    }
    ];


  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    marginBottom: '1rem'
                  }}
                />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tech">{project.tech}</div>
                  </div>
                </div>
                
                <div className="project-description">
                  {project.description}
                </div>
              </div>
              
              <div className="project-actions" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                {project.liveUrl ? (
                  <div className="hero-buttons" style={{ gap: '0.75rem' }}>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn"
                      style={{ flex: 1, fontSize: '0.9rem', padding: '10px 16px' }}
                    >
                      🌐 Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ flex: 1, fontSize: '0.9rem', padding: '10px 16px' }}
                    >
                      💻 View Code
                    </a>
                  </div>
                ) : (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline" 
                    style={{ width: '100%' }}
                  >
                    💻 View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a 
            href="https://github.com/chetanpawar29" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
            style={{ fontSize: '1.1rem', padding: '15px 40px' }}
          >
            View All Projects →
          </a>
          <p style={{ marginTop: '1rem', color: '#6b7280' }}>
            Visit my GitHub profile to see more projects and contributions
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects