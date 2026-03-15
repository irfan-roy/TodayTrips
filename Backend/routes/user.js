const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mySql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const { pg, Client } = require("pg");

const router = express.Router();
let db;
// async function InitDB() {
//   try {
//     db = await mySql.createConnection({
//       host: "127.0.0.1",
//       user: "irfan", // dedicated user
//       password: "irfan123", // password you set in SQL
//       database: "loginDB",
//     });
//     console.log("MySQL connected");
//   } catch (err) {
//     console.log("DB connection failed:", err);
//     process.exit(1);
//   }
// }

async function InitDB(params) {
  try {
    db = new Client({
      host: "localhost",
      user: "postgres",
      password: "new25",
      port: 5432,
    });

    await db.connect();

    console.log("PostgreSQL connected");
  } catch (err) {
    console.log("DB connection failed:", err);
    process.exit(1);
  }
}

// call the function immediately
InitDB();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(404).json({ massage: "Email and password required" });
  }

  try {
    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Insert into database
    await db.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashPassword],
    );

    res.json({ message: "User registered successfully" });
  } catch (err) {
    if (err.code == "ER_DUP_ENTRY") {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ message: "Email and password required" });
    }

    // fetch user from db

    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    const user = rows[0];

    if (!user) {
      return res.status(400).json({ message: "Invalid email of passwords" });
    } else {
      console.log("Correct");

      res.json({ massage: "Correct", email: email });
    }

    console.log("isMatch", password);
    console.log(typeof password); // prints "string"

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("isMatch", isMatch);

    if (!isMatch) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    return res.json({ message: "Login successful", email: user.email });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT id, username, email, password FROM users",
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  res.send("Hello world");
});

module.exports = router;
