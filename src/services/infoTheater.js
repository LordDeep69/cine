import axios from "axios";

const URL_API = 'https://cine-cupo.onrender.com/movie'
export const getInfoTheater = async () => {

    try 
    {
        const {data} = await axios.get(URL_API);
        
        return data;    
    } 
    catch (error) 
    {
        return error;
    }


}
