import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMember() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    registerNumber: "",
    year: "",
    department: "",
    about: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.email) {
      alert("Please fill all required fields");
      return;
    }
    const data = new FormData();
    data.append("name", form.name);
    data.append("role", form.role);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("registerNumber", form.registerNumber);
    data.append("year", form.year);
    data.append("department", form.department);
    data.append("about", form.about);
    if (image) data.append("image", image);

    await axios.post("http://localhost:5000/api/members", data);
    alert("Member added successfully");
    navigate("/members");
  };

  return (
    <div className="container">
      <h2>Add New Member</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="role" placeholder="Role" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="registerNumber" placeholder="Register Number" onChange={handleChange} />
        <input name="year" placeholder="Year" onChange={handleChange} />
        <input name="department" placeholder="Department" onChange={handleChange} />
        <input name="about" placeholder="About Yourself" onChange={handleChange} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Add Member</button>
        <button type="button" onClick={() => navigate("/")}>Back</button>
      </form>
    </div>
  );
}

export default AddMember;