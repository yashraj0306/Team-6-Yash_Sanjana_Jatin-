const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect("mongodb://127.0.0.1:27017/teamdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

const memberSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  phone: String,
  registerNumber: String,
  year: String,
  department: String,
  about: String,
  image: String,
});

const Member = mongoose.model("Member", memberSchema);

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/api/members", upload.single("image"), async (req, res) => {
  const member = new Member({
    name: req.body.name,
    role: req.body.role,
    email: req.body.email,
    phone: req.body.phone,
    registerNumber: req.body.registerNumber,
    year: req.body.year,
    department: req.body.department,
    about: req.body.about,
    image: req.file ? req.file.filename : "",
  });
  await member.save();
  res.json({ message: "Member added" });
});

app.get("/api/members", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

app.get("/api/members/:id", async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
