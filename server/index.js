import express from "express";
import cors from "cors";
import connectDB from "./db/mongoose.js";
import Favorite from "./models/Favorite.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/favorites", async (req, res) => {
  const favorites = await Favorite.find();
  res.json(favorites);
});

app.post("/favorites", async (req, res) => {
  try {
    const newFavorite = new Favorite(req.body);
    await newFavorite.save();
    res.status(201).json(newFavorite);
  } catch (err) {
    res.status(400).json({ error: "Failed to save favorite", details: err });
  }
});

app.delete("/favorites/:id", async (req, res) => {
  try {
    await Favorite.findByIdAndDelete(req.params.id);
    res.json({ message: "Favorite deleted" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete favorite", details: err });
  }
});

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};

start();
