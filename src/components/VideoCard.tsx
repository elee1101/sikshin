import axios from 'axios';
import { YouTubeVideo } from '../types';

interface VideoProps {
  video: YouTubeVideo;
}

const VideoCard: React.FC<VideoProps> = ({ video }) => {
  const { videoId } = typeof video.id === 'string' ? { videoId: video.id } : video.id;
  const { title, thumbnails } = video.snippet;

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:5000/favorites', {
        id: Date.now(), // unique dummy ID
        title,
        description: 'Saved from YouTube results', // or customize later
      });
      alert('✅ Saved to favorites!');
    } catch (err) {
      console.error('Failed to save favorite:', err);
      alert('❌ Failed to save favorite.');
    }
  };

  return (
    <div className="max-w-md w-full bg-white border rounded-lg shadow-sm overflow-hidden">
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={thumbnails.medium.url} alt={title} className="w-full" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </a>
      <div className="p-4 pt-0">
        <button
          onClick={handleSave}
          className="w-full bg-orange-500 text-white font-medium py-2 rounded hover:bg-orange-600 transition"
        >
          ❤️ Save to Favorites
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
