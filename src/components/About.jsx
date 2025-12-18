import { useState, useEffect, useRef } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '1.5+', label: 'Years Experience' },
    // { number: '+', label: 'Happy Clients' },
    // { number: '100%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className={`about ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I'm a passionate full-stack web developer who loves building beautiful, functional, and user-centered digital experiences. Over the years, I’ve worked on a diverse range of projects that strengthened my problem-solving skills, sharpened my design sense, and helped me create products that genuinely make an impact.
            </p>
            <p className="about-description">
              My approach to development is simple: write clean, maintainable code, follow best
              practices, and always keep the end user in mind. I believe in continuous learning
              and staying up-to-date with the latest technologies and trends in web development.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community through
              blogs and tutorials.
            </p>
          </div>

          <div className="about-image">
            <div className="image-card">
              <div className="code-snippet">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="code-title">developer.js</span>
                </div>
                <div className="code-content">
                  <pre>
{`const developer = {
  name: "Abhay Pratap Singh ",
  role: "Full Stack Developer",
  skills: [
    "React", "Node.js",
    "JavaScript", "Python"
  ],
  passions: [
    "Clean Code",
    "User Experience",
    "Innovation"
  ],
  motto: "Build with purpose"
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
