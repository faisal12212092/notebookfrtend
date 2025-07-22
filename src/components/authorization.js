import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "login" : "signin";
    const body = isLogin
      ? { email: credentials.email, password: credentials.password }
      : credentials;

    const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.name);
      navigate("/home");
    } else {
      alert(data.error || "Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 bg-dark text-light">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px", backgroundColor: "#1e1e2f", border: "none", borderRadius: "1rem" }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-info">{isLogin ? "Login to iNotebook" : "Create Your Account"}</h3>
          <p className="text-secondary small">{isLogin ? "Enter your credentials to continue" : "Fill in details to register"}</p>
        </div>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label text-light">Full Name</label>
              <input type="text" className="form-control bg-dark text-white border-secondary" name="name" value={credentials.name} onChange={handleChange} required />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label text-light">Email address</label>
            <input type="email" className="form-control bg-dark text-white border-secondary" name="email" value={credentials.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input type="password" className="form-control bg-dark text-white border-secondary" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-info w-100 fw-semibold">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-3">
          <button
            className="btn btn-link text-decoration-none text-info"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
