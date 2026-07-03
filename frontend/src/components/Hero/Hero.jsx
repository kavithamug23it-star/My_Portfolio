import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../assets/professional.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-left">
          <h1>
            Hi, I'm <span>Kavitha</span>
          </h1>

          <h2>B.Tech Information Technology Student</h2>

          <p>
            Full Stack Developer | UI/UX Designer | Creative Thinker
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-icons">
            <a
              href="https://github.com/kavithamug23it-star"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/kavirima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={profile}
            alt="Kavitha"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;