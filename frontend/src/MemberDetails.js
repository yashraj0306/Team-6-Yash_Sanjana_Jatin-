import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`).then((res) => {
      setMember(res.data);
    });
  }, [id]);

  if (!member) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Member Details</h2>
      <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
      <p><b>Name:</b> {member.name}</p>
      <p><b>Role:</b> {member.role}</p>
      <p><b>Email:</b> {member.email}</p>
      <p><b>Phone:</b> {member.phone}</p>
      <p><b>Register Number:</b> {member.registerNumber}</p>
      <p><b>Year:</b> {member.year}</p>
      <p><b>Department:</b> {member.department}</p>
      <p><b>About:</b> {member.about}</p>
      <button onClick={() => navigate("/members")}>Back</button>
    </div>
  );
}

export default MemberDetails;