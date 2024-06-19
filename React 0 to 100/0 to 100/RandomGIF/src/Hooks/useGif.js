import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/Tag?api_key=${API_KEY}`;
const useGif = () => {
    const [gif, setGif] = useState("");
    const [loader, setLoader] = useState(false);
    async function fetchData(tag) {
      setLoader(true); // Show spinner
      try {
        const { data } = await axios.get( tag? `${url}\&tag=${tag}`:`${url}` );
        const gifUrl = data.data.images.downsized_large.url;
        setGif(gifUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false); // Hide spinner
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []);
    return {gif, loader, fetchData}
}

export default useGif
