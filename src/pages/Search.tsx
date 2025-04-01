import { useEffect, useState } from 'react';
import { searchYouTube } from '../api/youtube';
import { YouTubeVideo } from '../types';
import VideoGrid from '../components/VideoGrid';

export const Search = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const results = await searchYouTube('korean food recipe');
      setVideos(results);
    };
    fetchTrending();
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto px-4 py-8">
        <input
          type="text"
          placeholder="🔍 Search for a recipe..."
          className="w-full p-3 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
  
      {/* Fetched YouTube Videos Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Trending Korean Recipes</h2>
        <VideoGrid videos={videos} />
      </section>
    </main>
  );
};

export default Search;