import { YouTubeVideo } from '../types';

interface VideoProps {
  video: YouTubeVideo;
}

const VideoCard: React.FC<VideoProps> = ({ video }) => {
  const { videoId } = typeof video.id === 'string' ? { videoId: video.id } : video.id;
  const { title, thumbnails } = video.snippet;

  return (
    <div className="max-w-md w-full bg-white border rounded-lg shadow-sm overflow-hidden text-left">
      <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
        <img src={thumbnails.medium.url} alt={title} className="w-full" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;

