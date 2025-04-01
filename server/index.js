import express from "express";
import cors from "cors";
import { readFavorites, writeFavorites } from "./db.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/favorites", async (req, res) => {
  const favorites = await readFavorites();
  res.json(favorites);
});

app.post("/favorites", async (req, res) => {
  const favorites = await readFavorites();
  const newFavorite = req.body;
  const updated = [...favorites, newFavorite];
  await writeFavorites(updated);
  res.status(201).json(newFavorite);
});

app.delete("/favorites/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const favorites = await readFavorites();
  const updated = favorites.filter((fav) => fav.id !== id);
  await writeFavorites(updated);
  res.json({ message: "Favorite deleted" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
