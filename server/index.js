import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); // allow frontend to connect
app.use(express.json()); // for parsing JSON bodies

// In-memory favorites (you can later connect this to a real DB)
let favorites = [
  { id: 1, title: "Bibimbap", description: "Mixed rice bowl" },
  { id: 2, title: "Tteokbokki", description: "Spicy rice cakes" },
];

// GET /favorites
app.get("/favorites", (req, res) => {
  res.json(favorites);
});

// POST /favorites
app.post("/favorites", (req, res) => {
  const newFavorite = req.body;
  favorites.push(newFavorite);
  res.status(201).json(newFavorite);
});

// DELETE /favorites/:id
app.delete("/favorites/:id", (req, res) => {
  const id = parseInt(req.params.id);
  favorites = favorites.filter((fav) => fav.id !== id);
  res.status(200).json({ message: "Favorite deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
