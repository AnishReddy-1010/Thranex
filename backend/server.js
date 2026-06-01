require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/contact");
const app = express();

app.use(cors());
app.use(express.json());

console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully 🚀");
  })
  .catch((err) => {
    console.error("MongoDB Error:");
    console.error(err);
  });

// Home Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Contact Route
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.json({
      success: true,
      message: "Message saved successfully!",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});