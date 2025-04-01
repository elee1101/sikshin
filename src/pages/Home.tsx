import { useEffect, useState } from 'react';
import { searchYouTube } from '../api/youtube';
import { YouTubeVideo } from '../types';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard'; 

export default function Home() {
  const [video, setVideo] = useState<YouTubeVideo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrending = async () => {
      const results = await searchYouTube('korean food recipe');
      setVideo(results[0]); 
    };
    fetchTrending();
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Banner */}
      <section className="bg-zinc-800 rounded-xl py-8 px-6 text-center mb-10">
        <h1 className="text-4xl text-white font-bold mb-2">TODAY'S Pick</h1>
        {video && (
        <section className="mt-10 text-center">
          <div className="flex justify-center">
            <VideoCard video={video} />
          </div>
        </section>
      )}
      </section>

      {/* Tray */}  
      <section className="mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
          {[
            { icon: "🍚", label: "rice" },
            { icon: "🍲", label: "soup" },
            { icon: "🍗", label: "main" },
            { icon: "🥗", label: "side" },
            { icon: "🍰", label: "dessert" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border rounded-xl shadow-sm bg-white cursor-pointer hover:bg-zinc-100"
              onClick={() => navigate(`/category/${item.label}`)}
            >
              <div className="py-6">
                <div className="text-3xl">{item.icon}</div>
                <p className="mt-2 font-semibold capitalize">{item.label}</p>
              </div>
            </div>
          ))}
        </div> 
      </section>

      {/* Recommended Recipes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recommended Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Kimchi Jjigae", desc: "Spicy fermented stew" },
            { title: "Bibimbap", desc: "Mixed rice bowl" },
            { title: "Tteokbokki", desc: "Spicy rice cakes" },
          ].map((recipe, idx) => (
            <div key={idx} className="border rounded-lg shadow-sm bg-white p-4">
              <h3 className="text-lg font-bold mb-1">{recipe.title}</h3>
              <p className="text-sm text-zinc-600">{recipe.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="bg-zinc-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-zinc-700 transition">
            More Recipes
          </button>
        </div>
      </section>
    </main>
  );
}
