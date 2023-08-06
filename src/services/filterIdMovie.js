import { getMovies } from "./movies";

export const movieFilter = async (genreId) => {
    const responseData = await getMovies();
    const filteredMovies = responseData.filter(movie => movie.genre_ids.includes(genreId));
    return filteredMovies;
  };
  

  