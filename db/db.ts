import mongoose from "mongoose";
mongoose
  .connect("mongodb+srv://test:test123@cluster1.6lpgf3q.mongodb.net/movie_show")
  .then((res) => {
    console.log("connect success!");
  })
  .catch((e) => {
    console.log("Error: ", e);
  });
