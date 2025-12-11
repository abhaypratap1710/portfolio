import { useState, useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Health partner',
      description: 'A comprehensive healthcare management platform designed to connect patients, doctors, and medical facilities in a unified digital ecosystem.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://ik.imagekit.io/binucwnfv/Screenshot%202025-12-11%20123530.png',
      liveUrl: 'https://healthpartner-fmds.onrender.com/',
      githubUrl: 'https://github.com/abhaypratap1710/Health-Partner'
    },
    {
      id: 2,
      title: 'Green Cart',
      description: 'A grocery delivery platform that allows users to order groceries online and have them delivered to their doorstep.',
      technologies: ['React', 'D3.js', 'Firebase', 'Material-UI'],
      image: 'https://ik.imagekit.io/binucwnfv/image.png',
      liveUrl: 'https://grocery-delivery-x3rt.onrender.com/',
      githubUrl: 'https://github.com/abhaypratap1710/Grocery-Delivery'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task manager with team features, deadlines, and progress tracking.',
      technologies: ['React', 'Redux', 'Express', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with 7-day forecast, maps, and location-based predictions.',
      technologies: ['React', 'OpenWeather API', 'CSS3'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio CMS',
      description: 'Content management system for portfolios with drag-and-drop page builder.',
      technologies: ['React', 'GraphQL', 'Prisma', 'Next.js'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Track workouts, nutrition, and progress with interactive charts and insights.',
      technologies: ['React Native', 'Redux', 'Firebase'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className={`projects ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work that I'm proud of</p>
        </div>

        <div className="carousel">
          <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="carousel-track">
            {projects.map((project, index) => {
              let position = 'next';
              if (index === currentIndex) {
                position = 'active';
              } else if (
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === projects.length - 1)
              ) {
                position = 'prev';
              }

              return (
                <div key={project.id} className={`project-card ${position}`}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Live Demo
                        </a>
                        <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
