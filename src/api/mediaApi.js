import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;


export async function fetchPhoto(query, page = 1, per_page = 20) {
  const photoApi = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: { query, page, per_page },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    }
  );

  return photoApi.data;
}
export async function fetchVideo(query, page = 1, per_page = 20)
 {
  const VideoApi = await axios.get(
    "https://api.pexels.com/videos/search",
    {
      params: { query, page, per_page },
      headers: {
        Authorization:PEXELS_KEY,
      },
    }
  );

  return VideoApi.data;
}