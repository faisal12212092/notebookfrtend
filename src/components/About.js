import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 mb-4">
          <img
            src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?s=612x612&w=0&k=20&c=Oc2HZUPVJRXFsjTwKVgWY_ddWrKeQUG0KCyKUGef-ig="
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6">
          <h2 className="fw-bold mb-3">About Our Project</h2>
          <p className="text-muted mb-3">
            Welcome! This is a secure and efficient full-stack app built using the MERN stack.
            Designed with responsiveness and clean UI, our mission is to offer smooth user
            experience with real-time data handling and strong authentication.
          </p>

          <ul className="list-unstyled text-muted mb-4">
            <li className="mb-2">
              <i className="bi bi-check2-circle text-success me-2"></i> Built with React & Bootstrap
            </li>
            <li className="mb-2">
              <i className="bi bi-check2-circle text-success me-2"></i> JWT-based secure auth
            </li>
            <li className="mb-2">
              <i className="bi bi-check2-circle text-success me-2"></i> MongoDB & Express backend
            </li>
          </ul>

          <a href="/" className="btn btn-outline-primary px-4">
            Go to Home
          </a>
        </div>
      </div>

      {/* Optional Footer Line */}
      <div className="text-center mt-5 text-muted">
        <small>Crafted with ❤️ by the Dev Team • 2025</small>
      </div>
    </div>
  );
};

export default About;
