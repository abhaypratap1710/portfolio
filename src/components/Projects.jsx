import { useState, useEffect, useRef } from "react";
import "./Projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Health Partner",
      description:
        "A healthcare management platform connecting patients and doctors with secure medical records, appointments, and real-time communication.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image:
        "https://ik.imagekit.io/binucwnfv/Screenshot%202025-12-11%20123530.png",
      liveUrl: "https://healthpartner-fmds.onrender.com/",
      githubUrl: "https://github.com/abhaypratap1710/Health-Partner",
    },
    {
      id: 2,
      title: "GreenCart – Grocery Delivery",
      description:
        "Online grocery delivery platform with product browsing, cart, checkout, and order management.",
      technologies: ["React", "Firebase", "D3.js", "Material-UI"],
      image: "https://ik.imagekit.io/binucwnfv/image.png",
      liveUrl: "https://grocery-delivery-x3rt.onrender.com/",
      githubUrl: "https://github.com/abhaypratap1710/Grocery-Delivery",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Weather dashboard using OpenWeather API to display real-time weather data and forecasts.",
      technologies: ["React", "OpenWeather API", "CSS3"],
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: null,
      githubUrl: "https://github.com/abhaypratap1710/Weather-App",
    },
    {
      id: 4,
      title: "MicroBlog",
      description:
        "A microblogging platform with authentication, CRUD operations, and secure user sessions.",
      technologies: ["Django", "Python", "SQLite", "Tailwind CSS"],
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: null,
      githubUrl: "https://github.com/abhaypratap1710/MicroBlog",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className={`projects ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
    >
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world projects showcasing my development skills
          </p>
        </div>

        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            ‹
          </button>

          <div className="carousel-track">
            {projects.map((project, index) => {
              let position = "next";
              if (index === currentIndex) position = "active";
              else if (
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === projects.length - 1)
              )
                position = "prev";

              return (
                <div key={project.id} className={`project-card ${position}`}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href={project.liveUrl || project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          {project.liveUrl ? "Live Demo" : "View on GitHub"}
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
