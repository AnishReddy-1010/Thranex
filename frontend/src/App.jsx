import profile from "./assets/profile.png";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch(
    "http://localhost:5000/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    }
  );

  const data = await response.json();

  alert(data.message);

  setName("");
  setEmail("");
  setMessage("");
};
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>Anish Portfolio</h2>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        {/* Left Side */}
        <div className="hero-text">
          <h1>K Anish Reddy</h1>

          <h2>Full Stack Developer</h2>

          <p>
            I build modern web applications using React, Node.js, and MongoDB.
          </p>

          <a href="#projects">
  <button>View Projects</button>
</a>
        </div>

        {/* Right Side */}
        <div className="hero-box">
          <img
            src={profile}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h1>About Me</h1>

        <p>
          I'm a passionate Full Stack Developer who loves building modern and
          responsive web applications. I enjoy learning new technologies and
          creating user-friendly websites using React, Node.js, Express.js,
          and MongoDB.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h1>Skills</h1>

        <div className="skills-container">
          <div className="skill-card">HTML</div>

          <div className="skill-card">CSS</div>

          <div className="skill-card">JavaScript</div>

          <div className="skill-card">React.js</div>

          <div className="skill-card">Node.js</div>

          <div className="skill-card">MongoDB</div>
        </div>
      </section>

      {/* Projects Section */}

<section className="projects" id="projects">

  <h1>Projects</h1>

  <div className="projects-container">

    {/* Project Card 1 */}
    <div className="project-card">

      <h2>Personal Portfolio</h2>

      <p>
        A modern full-stack portfolio website 
        built using React,Node.js, and MongoDB.
      </p>

      <div className="project-buttons">

        <button>Live Demo</button>

        <button>GitHub</button>

      </div>

    </div>

    {/* Project Card 2 */}
    <div className="project-card">

      <h2>Weather App</h2>

      <p>
        A weather forecasting application using API 
        integration and responsive UI design.
      </p>

      <div className="project-buttons">

        <button>Live Demo</button>

        <button>GitHub</button>

      </div>

    </div>

    {/* Project Card 3 */}
    <div className="project-card">

      <h2>Task Manager</h2>

      <p>
        A task management web application with 
        CRUD operations and database connectivity.
      </p>

      <div className="project-buttons">

        <button>Live Demo</button>

        <button>GitHub</button>

      </div>

    </div>

    {/* Contact Section */}

<section className="contact" id="contact">

  <h1>Contact Me</h1>

  <form
  className="contact-form"
  onSubmit={handleSubmit}
>
  <input
    type="text"
    placeholder="Enter your name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <textarea
    placeholder="Enter your message"
    rows="6"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  ></textarea>

  <button type="submit">Send Message</button>
</form>

</section>

{/* Footer */}

<footer className="footer">

  <h2>K Anish Reddy</h2>

  <p>Full Stack Developer</p>

  <div className="footer-links">

    <a href="https://github.com/AnishReddy-1010">GitHub</a>

    <a href="www.linkedin.com/in/anish-reddy-193b79330">LinkedIn</a>

  </div>

  <p className="copyright">
    © 2026 K Anish Reddy. All rights reserved.
  </p>
  <img
            src={profile}
            alt="Profile"
            className="profile-image"></img>

</footer>

  </div>

</section>
    </div>
  );
}

export default App;