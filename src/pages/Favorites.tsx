import { useEffect, useState } from 'react';
import axios from 'axios';

interface Favorite {
  id: number;
  title: string;
  description: string;
  videoId: string;
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const res = await axios.get('http://localhost:5000/favorites');
      setFavorites(res.data);
    } catch (err) {
      console.error('Error fetching favorites:', err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/favorites/${id}`);
      setFavorites(prev => prev.filter(fav => fav.id !== id));
    } catch (err) {
      console.error('Error deleting favorite:', err);
    }
  };

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Your Favorite Recipes ❤️</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map(fav => (
            <div key={fav.id} className="border rounded-xl overflow-hidden shadow-sm bg-white">
              <iframe
                src={getYouTubeEmbedUrl(fav.videoId)}
                title={fav.title}
                className="w-full h-60"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{fav.title}</h3>
                <p className="text-sm text-zinc-500 mb-3">{fav.description}</p>
                <button
                  onClick={() => handleDelete(fav.id)}
                  className="text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-100 transition"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
