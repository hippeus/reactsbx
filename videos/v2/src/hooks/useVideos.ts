import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

// Custom hooks are entities build on top of existing react hooks, as more
// developer friendly functionality. By convention custom hooks have a name
// referencing to primitive react hooks they are build upon.

const YoutubePubKey = "AIzaSyDASbbfgFghYuKEIgA4oY2ekB_bKJ-gDQ8";

const useVideos = (
  searchPhrase: string = ""
): { videos: Array<any>; search: (term: string) => Promise<any> } => {
  const [videos, setVideos] = useState<Array<any>>([]);

  useEffect(() => {
    search(searchPhrase);
  }, [searchPhrase]);

  const search = async (term: string): Promise<void> => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: YoutubePubKey,
      },
    });
    setVideos(data.items);
  };

  return { videos, search };
};

export default useVideos;
