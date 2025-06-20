import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          
          <button onClick={() => navigate("/Resources")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
