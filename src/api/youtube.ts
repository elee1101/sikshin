import axios from 'axios';
import { YouTubeVideo } from '../types';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const searchYouTube = async (
  query: string,
  maxResults = 9
): Promise<YouTubeVideo[]> => {
  const res = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      q: query,
      maxResults,
      type: 'video',
      key: API_KEY,
    },
  });

  return res.data.items;
};
