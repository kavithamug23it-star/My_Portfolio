import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">

          <h4>ABOUT ME</h4>

          <h2>
            Passionate Full Stack Developer &
            <span> UI/UX Designer</span>
          </h2>

          <p>
            I'm <strong>Kavitha</strong>, currently pursuing
            <strong> B.Tech Information Technology</strong> at
            <strong> Francis Xavier Engineering College</strong>.
          </p>

          <p>
            I enjoy building modern web applications and designing clean,
            responsive, and user-friendly interfaces using Figma and React.
          </p>

          <p>
            My goal is to become a Full Stack Developer by creating impactful
            applications that solve real-world problems.
          </p>

        </div>

        <div className="about-right">

          <div className="card">
            <h1>3+</h1>
            <p>Projects Completed</p>
          </div>

          <div className="card">
            <h1>2+</h1>
            <p>Figma UI Designs</p>
          </div>

          <div className="card">
            <h1>5+</h1>
            <p>Canva Video Designs</p>
          </div>

          <div className="card">
            <h1>100%</h1>
            <p>Passion for Learning</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;