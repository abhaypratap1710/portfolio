import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-bracket">{'<'}</span>
              <span className="logo-text">Abhay</span>
              <span className="logo-bracket">{'/>'}</span>
            </div>
            <p className="footer-tagline">
              Building digital experiences with passion and precision
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Connect</h4>
              <ul className="footer-list">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <span className="heart">❤️</span> by abhay
          </p>
        </div>
      </div>

      <div className="footer-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </footer>
  );
}

export default Footer;
