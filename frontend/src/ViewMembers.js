import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/members").then((res) => {
      setMembers(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>All Members</h2>
      <div className="card-list">
        {members.map((m) => (
          <div className="card" key={m._id}>
            <img src={`http://localhost:5000/uploads/${m.image}`} alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
            <button onClick={() => navigate(`/members/${m._id}`)}>View Details</button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default ViewMembers;