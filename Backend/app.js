const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const favorites = require("./models/favorites");
const Blogs = require("./models/blogs");
const cors = require("cors");

const userRoutes = require("./routes/user.js");
const favoritesRouter = require("./routes/favorites.js");
const bodyParser = require("body-parser");

const MONGO_URL = "mongodb://127.0.0.1:27017/GOTrip";
const port = 8080;
// middleware
app.use(express.json());
app.use(cors());

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.error(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/listing", async (req, res) => {
  const listing = await Listing.find({});
  res.send(listing);
});

app.get("/listing/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    console.log(listing);
    res.send(listing);
    if (!listing) return res.status(404).json({ error: "Listing not found" });
  } catch (err) {
    res.status(500).json({ error: "Error fetching listing" });
  }
});

//blogs
app.get("/blogs", async (req, res) => {
  const blog = await Blogs.find({});
  res.send(blog);
});

app.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: "Listing not found" });
    }
    console.log(blog);
    res.send(blog);
  } catch (error) {
    res.status(500).json({ error: "Error fetching blogs" });
  }
});

app.get("/today-trips/favorites", async (req, res) => {
  try {
    const favorite = await favorites.find({});
    res.status(200).json(favorite);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorites" });
  }
});

app.post("/today-trips/favorites-data", async (req, res) => {
  try {
    const favorite = req.body;

    if (!favorite || Object.keys(favorite).length === 0) {
      return res.status(400).json({
        message: "No data provided",
      });
    }

    // Checked duplicate
    const exist = favorites.findById(favorite._id);

    if (exist) {
      console.log("data is exist");

      return res.status(409).json({
        message: "Favorite already exits",
        existingData: exist,
      });
    }

    // create new
    const newFavorite = favorites.create(favorite);

    res.status(201).json({
      message: "Favorites saved successfully ",
      data: newFavorite,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving favorites",
      error: error.message,
    });
  }
});

// use user router

app.use("/today-trips", userRoutes);

// favorites
// app.use("/today-trips", favoritesRouter);

app.listen(port, () => {
  console.log(`app was listen in ${port}`);
});
