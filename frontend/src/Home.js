import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Team 6 (Yash_Sanjana_Jatin)</h1>
      <p>Welcome to our team portal</p>
      <div className="home-box">
        <h3>Manage Team</h3>
        <button onClick={() => navigate("/add")}>Add Member</button>
        <button onClick={() => navigate("/members")}>View Members</button>
      </div>
    </div>
  );
}

export default Home;