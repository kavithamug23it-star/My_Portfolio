import "./Projects.css";
import foodWaste from "../../assets/foodwaste.png";
function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <p className="section-subtitle">MY PROJECTS</p>

        <h2 className="section-title">
          Featured Project
        </h2>

        {/* ================= ZERO FOOD WASTE ================= */}

        <div className="project-card">

          <div className="project-image">
           <img
  src={foodWaste}
  alt="Zero Food Waste"
/>
          </div>

          <div className="project-content">

            <h2>Zero Food Waste</h2>

            <p>
              Zero Food Waste is a UI/UX application designed in Figma to
              reduce food wastage by connecting food donors with NGOs and
              people in need. The application simplifies food donation,
              request management, and distribution through an intuitive
              user interface.
            </p>

            <div className="project-features">

              <span>Food Donation</span>
              <span>NGO Connection</span>
              <span>Request Tracking</span>
              <span>Figma Prototype</span>
              <span>UI/UX Design</span>
              <span>User Friendly</span>

            </div>

            <div className="tech-stack">

              <h3>Tools Used</h3>

              <div className="stack">

                <span>Figma</span>
                <span>UI/UX</span>
                <span>Wireframe</span>
                <span>Prototype</span>

              </div>

            </div>

            <div className="project-buttons">

              <a
  href="https://www.figma.com/design/l32hWDPpLEYZwR626qk7CA/demo-class?node-id=0-1&p=f&t=dXhbA6ieXLOaAeDl-0"
  target="_blank"
  rel="noopener noreferrer"
  className="github-btn"
>
  View Design
</a>

<a
  href="https://www.figma.com/design/l32hWDPpLEYZwR626qk7CA/demo-class?node-id=0-1&p=f&t=dXhbA6ieXLOaAeDl-0"
  target="_blank"
  rel="noopener noreferrer"
  className="demo-btn"
>
  Prototype
</a>

            </div>

          </div>

        </div>

        {/* ================= OTHER PROJECTS ================= */}

        <h2 className="section-title" style={{ marginTop: "80px" }}>
          Other Projects
        </h2>

        <div className="other-projects">

          {/* RentEase */}

          <div className="mini-project">

            

            <h3>RentEase</h3>

            <p>
              A full-stack rental platform that enables users to list
              products, rent items, chat with owners, provide feedback,
              and manage their profiles through a modern web application.
            </p>

            <span>React • Node.js • Express • MongoDB</span>

          </div>

          {/* Canva */}

          <div className="mini-project">

            

            <h3>Canva Creative Designs</h3>

            <p>
              Designed promotional videos, posters, and social media
              creatives using Canva with a focus on engaging visual
              storytelling.
            </p>

            <span>Canva • Video Editing • Graphic Design</span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;