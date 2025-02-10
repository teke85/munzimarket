import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  console.log("router works man!");
  res.send("router works man!");
});

router.post("/test", (req, res) => {
  console.log("router works man!");
  res.send("router works man!");
});

router.put("/test", (req, res) => {
  console.log("router works man!");
  res.send("router works man!");
});

router.delete("/test", (req, res) => {
  console.log("router works man!");
  res.send("router works man!");
});

export default router;
