import "./App.css";

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Computer Science Graduate</p>
        <h1>Wyatt Granlund</h1>
        <p className="subtitle">
          I build data-driven software projects using React, SQL, Python, and modern web tools.
        </p>

        <div className="buttons">
          <a href="https://www.linkedin.com/in/wyatt-granlund-22189221b/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/Granlu-nd" target="_blank">
            GitHub
          </a>
          <a href="YOUR_RESUME_LINK_HERE" target="_blank">
            Resume
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">
            <h3>MedStream FHIR Portal</h3>
            <p>
              Healthcare data ingestion and validation project using FastAPI,
              PostgreSQL, React, and FHIR resources.
            </p>
          </div>

          <div className="card">
            <h3>Data Analytics Work</h3>
            <p>
              SQL normalization, Snowflake, and university data infrastructure
              experience through FSU ITS.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;