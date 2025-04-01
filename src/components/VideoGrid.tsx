import VideoCard from './VideoCard';
import { YouTubeVideo } from '../types';

const VideoGrid = ({ videos }: { videos: YouTubeVideo[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {videos.map(video => (
      <VideoCard key={video.id.videoId} video={video} />
    ))}
  </div>
);

export default VideoGrid;