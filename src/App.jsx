import { useState } from "react";
import "./App.css";
import fsuLogo from "./assets/FSU.png";
import headshot from "./assets/IMG_1124.jpg";

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("GranlundWyatt@outlook.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="fsu">
          <img src={fsuLogo} alt="FSU logo" />
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#fun">Fun</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="home">
        <section className="hero">
          <div className="hero-text">
            <h1>Wyatt Granlund</h1>
            <h2>Master's Student and Graduate Teaching Assistant at Florida State University</h2>

            <p>
              I am a Computer Science student starting my master's program this Fall at Florida State University. 
              My interests lie in software engineering, data analytics, infrastructure, and more. 
            </p>

            <p>
              Explore my work below and feel free to reach out if you'd like to connect or collaborate!
            </p>

            <div className="buttons">
              <a href="#projects">View Projects</a>
              <a href="#contact" className="secondary">Contact Me</a>
            </div>
          </div>

          <div className="hero-image">
            <img src={headshot} alt="Headshot" />
          </div>
        </section>

        <section id="about" className="section two-column">
          <div>
            <h2>About Me</h2>
            <p>
              Write a short introduction here. Mention your major, interests,
              career goals, and what kind of work you enjoy doing.
            </p>
          </div>

          <div className="card">
            <h3>Current Focus</h3>
            <ul>
              <li>React and frontend development</li>
              <li>UI/UX design</li>
              <li>GitHub Pages deployment</li>
              <li>Creative web experiments</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Selected Projects</h2>

          <div className="grid">
            <div className="project-card">
              <span className="tag">React</span>
              <h3>Personal Portfolio</h3>
              <p>
                A responsive portfolio built with Vite, React, and GitHub Pages.
              </p>
            </div>

            <div className="project-card">
              <span className="tag">Web App</span>
              <h3>Project Name</h3>
              <p>
                Describe one of your class, personal, or internship projects here.
              </p>
            </div>

            <div className="project-card">
              <span className="tag">Experiment</span>
              <h3>Interactive Demo</h3>
              <p>
                Add a fun JavaScript or React demo to show your development skills.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section two-column">
          <div>
            <h2>Experience</h2>
            <ul className="timeline">
              <li>
                <strong>Role or Organization</strong>
                <span>2025 — Present</span>
              </li>
              <li>
                <strong>Course Project / Club / Job</strong>
                <span>2024 — 2025</span>
              </li>
              <li>
                <strong>Volunteer / Freelance / Personal Work</strong>
                <span>2023 — 2024</span>
              </li>
            </ul>
          </div>

          <div>
            <h2>Skills</h2>
            <div className="skills">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Git</span>
              <span>GitHub Pages</span>
            </div>
          </div>
        </section>

        <section id="fun" className="section fun-section">
          <h2>Fun Web Dev Corner</h2>
          <p>
            A space for small interactive demos, animations, design experiments,
            mini games, or visual coding projects.
          </p>

          <div className="terminal">
            <p><span>$</span> npm create vite@latest portfolio</p>
            <p><span>$</span> cd portfolio</p>
            <p><span>$</span> npm run dev</p>
            <p className="success">✔ Website successfully launched</p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>

          <div className="contact-grid">
            
            <button
              onClick={copyEmail}
              className="contact-card contact-button"
            >
              <div className="contact-icon">✉</div>

              <div>
                <h3>Email</h3>
                <p>
                  {copied
                    ? "✓ Copied to clipboard!"
                    : "GranlundWyatt@outlook.com Click to copy email"}
                </p>
              </div>
            </button>

            <a
              href="https://www.linkedin.com/in/wyatt-granlund"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">in</div>
              <div>
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/granlu-nd"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">⌘</div>
              <div>
                <h3>GitHub</h3>
                <p>github.com/granlu-nd</p>
              </div>
            </a>

          </div>
        </section>

      </main>
    </>
  );
}

export default App;