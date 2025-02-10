import express from "express";
import PostRoute from "./routes/post.route.js";

const app = express();
const PORT = process.env.PORT || 8800;

app.use("/api/posts", PostRoute);

// app.use("/api/test", (req, res) => {
//   res.send("It works!");
// });

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
