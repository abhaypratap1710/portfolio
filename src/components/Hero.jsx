import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Abhay</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Crafting beautiful, responsive web experiences with modern technologies.
            Passionate about clean code and innovative solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1"></div>
          <div className="floating-card card-2"></div>
          <div className="floating-card card-3"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
