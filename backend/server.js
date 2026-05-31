require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully 🚀");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);
// Home Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Contact Route
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.json({
      success: true,
      message: "Message saved to MongoDB successfully!",
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