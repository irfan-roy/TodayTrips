const mongoose = require("mongoose");
const initBlog = require("./blogData.js");
const blog = require("../models/blogs.js");
const MONGO_Blog_URL = "mongodb://127.0.0.1:27017/GOTrip";

main()
  .then(() => {
    console.log("connected DB");
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  await mongoose.connect(MONGO_Blog_URL);
}

const initDB = async () => {
  await blog.deleteMany({});

  await blog.insertMany(initBlog.data);

  console.log(initBlog.data);
  console.log("Data was initialized");
};

initDB();
