import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoId: { type: String, required: true },
  description: { type: String, required: true },
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);
export default Favorite;
