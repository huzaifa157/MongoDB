// =========================================================
// 🌐 MongoDB + Mongoose Full CRUD File
// Author: Muhammad Huzaifa
// Topic: Mongoose Connection, Schema, CRUD Operations
// =========================================================

// 1️⃣ Import mongoose library
const mongoose = require('mongoose');

// 2️⃣ Connect to MongoDB (local server running on port 27017)
main()
  .then(() => console.log("✅ MongoDB Connection Successful"))
  .catch((err) => console.log("❌ Connection Error:", err));

// Async function to handle database connection
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// =========================================================
// 🧱 Define Schema (Structure of Document)
// =========================================================
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// 3️⃣ Create a Model (acts as a collection in database)
// Model name: "User" → Collection name will be "users"
const User = mongoose.model("User", userSchema);

// =========================================================
// 🧩 CREATE — Insert Documents
// =========================================================

// (A) Create and Save a Single Document
/*
const user1 = new User({
  name: "Ali",
  email: "ali@yahoo.pk",
  age: 24,
});

user1.save(); // Save user to DB
*/

// (B) Create and Save Using .then() Promise Style
/*
const user2 = new User({
  name: "Atta",
  email: "atta@yahoo.pk",
  age: 24,
});

user2.save()
  .then((res) => console.log("User Saved:", res))
  .catch((err) => console.log("Error:", err));
*/

// (C) Insert Many Documents at Once
/*
User.insertMany([
  { name: "Tony", email: "tony@gmail.com", age: 88 },
  { name: "Sameed", email: "sameed@gmail.com", age: 21 },
  { name: "Hamza", email: "hamza@yahoo.agh", age: 30 },
])
  .then((res) => console.log("Inserted:", res))
  .catch((err) => console.log("Error:", err));
*/

// =========================================================
// 🔍 READ — Find Documents
// =========================================================

// (A) Find All Users
/*
User.find({})
  .then((res) => console.log("All Users:", res))
  .catch((err) => console.log("Error:", err));
*/

// (B) Find Users with a Condition (age > 47)
/*
User.find({ age: { $gt: 47 } })
  .then((res) => console.log("Users older than 47:", res))
  .catch((err) => console.log("Error:", err));
*/

// (C) Accessing Specific Data (like name of first user)
/*
User.find({ age: { $gt: 27 } })
  .then((res) => console.log("Name of first matched user:", res[0].name))
  .catch((err) => console.log("Error:", err));
*/

// (D) Find One Document Only
/*
User.findOne({ age: { $gt: 47 } })
  .then((res) => console.log("First matched user:", res));
*/

// (E) Find by ID
/*
User.findById("68ebe00c939685a001885570")
  .then((res) => console.log("User found by ID:", res));
*/

// =========================================================
// ✏️ UPDATE — Modify Existing Documents
// =========================================================

// (A) Update One Document (using _id)
/*
User.updateOne(
  { _id: "68ebe00c939685a001885570" },
  { $set: { name: "Zayan" } }
).then((res) => console.log("Updated:", res));
*/

// (B) Find and Update One Document (returns old document by default)
/*
User.findOneAndUpdate(
  { name: "Zayan" },
  { age: 23 },
  { new: true } // 'new: true' → returns updated document instead of old one
).then((res) => console.log("Updated User:", res));
*/

// (C) Update by ID
/*
User.findByIdAndUpdate(
  "68ebe00c939685a001885570",
  { $set: { name: "Syed Zayan Ali" } },
  { new: true }
).then((res) => console.log("Updated by ID:", res));
*/

// =========================================================
// 🗑️ DELETE — Remove Documents
// =========================================================

// (A) Find One and Delete
/*
User.findOneAndDelete({ age: 23 })
  .then((res) => console.log("Deleted User:", res));
*/

// (B) Delete by ID
/*
User.findByIdAndDelete("68ebe00c939685a001885571")
  .then((res) => console.log("Deleted by ID:", res));
*/

// (C) Delete Many Documents (multiple users)
/*
User.deleteMany({ age: 23 })
  .then((res) => console.log("Deleted Count:", res.deletedCount));
*/

// =========================================================
// 📋 FINAL TEST — Display All Users
// =========================================================
User.find({})
  .then((res) => console.log("All Users in DB:", res))
  .catch((err) => console.log("Error:", err));

