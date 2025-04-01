export interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export interface FavoriteRecipe {
  id: number;
  title: string;
  description: string;
}
