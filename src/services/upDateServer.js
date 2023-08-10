import axios from 'axios';

const URL_API = 'https://cine-cupo.onrender.com/movie/';

export const upDateServer = async (id, objeto) => {
    try {
        const newURL= `https://cine-cupo.onrender.com/movie/${id}`
        const response = await axios.put(newURL, objeto); // Hacer la solicitud PUT a la API
        return response.data; // Devolver los datos actualizados de la API
    } catch (error) {
        return error;
    }
};
