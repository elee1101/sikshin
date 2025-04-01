// src/pages/Category.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchYouTube } from '../api/youtube';
import { YouTubeVideo } from '../types';
import VideoGrid from '../components/VideoGrid';

export default function Category() {
  const { name } = useParams();
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);

  useEffect(() => {
    if (!name) return;
    const fetchCategory = async () => {
      const query = `korean ${name} recipe`;
      const results = await searchYouTube(query);
      setVideos(results);
    };
    fetchCategory();
  }, [name]);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{name} Recipes</h1>
      <VideoGrid videos={videos} />
    </main>
  );
}
