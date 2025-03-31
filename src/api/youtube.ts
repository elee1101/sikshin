import axios from 'axios';

export const searchYouTube = async (query: string) => {
  const key = import.meta.env.VITE_YOUTUBE_API_KEY;
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query,
      type: 'video',
      key: key,
      maxResults: 10
    }
  });
  return response.data.items;
};
