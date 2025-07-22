import React from "react";
import Notes from "./Notes";
import "./Home.css";

const Home = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="home-wrapper dark-bg d-flex justify-content-center align-items-start py-5 px-4">
      <div className="container-sm home-container-dark shadow-lg p-4 rounded animate-fade">
        <h2 className="fw-bold text-gradient-dark mb-1">Welcome, {username || "User"}!</h2>
        <p className="text-light mb-3">You are successfully logged in.</p>
        <hr className="mb-4 border-secondary" />
        <Notes />
      </div>
    </div>
  );
};

export default Home;
