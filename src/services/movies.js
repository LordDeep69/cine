import axios from "axios";

const URL_API = 'https://api.themoviedb.org/3/movie/346698?api_key=d7e7a57c6c25cae599fb83a92cf43e95&language=es-ES`'
const URL_API_ALL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d7e7a57c6c25cae599fb83a92cf43e95&language=es-ES`' 
export const getMovie = async (idMovie) => {

    try 
    {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=d7e7a57c6c25cae599fb83a92cf43e95&language=es-ES`);
        
        return data;    
    } 
    catch (error) 
    {
        return error;
    }


}

export const getMovies = async () => {

    try 
    {
        const {data} = await axios.get(URL_API_ALL);
        
        return data;    
    } 
    catch (error) 
    {
        return error;
    }


}