const express = require("express");
const app = express();
const favorites = require("../models/favorites");
const router = express.Router();
app.use(express.json());
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/GOTrip";

main()
  .then(() => {
    console.log("successfully connect data base");
  })
  .catch((error) => console.error(error));

async function main() {
  await mongoose.connect(MONGO_URL);
}

router.get("/favorites", (req, res) => {
  let favorite = favorites.find({});
  res.send(favorite);
  console.log("hello");
});

router.post("/favorites-data", async (req, res) => {
  await favorites.insert(req.body);
  res.status(200).json({
    message: "Favorites saved success",
    data: req.body,
  });
});

module.exports = router;
