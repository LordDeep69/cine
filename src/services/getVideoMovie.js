import axios from "axios";

export const getVideoMovie = async (idMovie) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=d7e7a57c6c25cae599fb83a92cf43e95&language=es-ES`;
        
        const { data } = await axios.get(url);
        const video = data.results.find((item) =>
          item.type.toLowerCase().includes("trailer")
        );
        return video.key;
        
    } catch (error) {
        console.log(error);
        return null;
    }
    
}