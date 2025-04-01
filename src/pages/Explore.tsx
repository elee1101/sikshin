// src/pages/Explore.tsx
import { useEffect, useState } from 'react';
import { searchYouTube } from '../api/youtube';
import { YouTubeVideo } from '../types';
import VideoGrid from '../components/VideoGrid';

export default function Explore() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);

  useEffect(() => {
    const fetchExplore = async () => {
      const results = await searchYouTube('korean street food');
      setVideos(results);
    };
    fetchExplore();
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Korean Food</h1>
      <VideoGrid videos={videos} />
    </main>
  );
}
