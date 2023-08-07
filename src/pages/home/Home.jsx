import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './home.scss';
import Movie from '../../components/movie/Movie';
import { getMovies, getMovie } from '../../services/movies';
import { movieFilter } from '../../services/filterIdMovie';

const Home = () => {
  const {idCategorie} = useParams();
  const navigate = useNavigate();
  const [movieInfo, setMovieInfo] = useState([]);

  const getAllMovie = async () => {
    try {
      let data = [];

      if (idCategorie)
      {
        let id = Number(idCategorie);
        data = await movieFilter(id);
      }
      else
      {
        data = await getMovies();
      }

      const movieDetails = await Promise.all(
        data.map(async (movie) => {
          const movieDetail = await getMovie(movie.id);
          return {
                  id: movie.id,
                  image: movie.poster_path,
                  title: movie.title,
                  titleEnglish: movie.original_title,
                  estreno: movie.release_date,
                  time: movieDetail.runtime,
                  genres: movieDetail.genres,
          };
        })
      );

      setMovieInfo(movieDetails);
      console.log(movieInfo);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    getAllMovie();
    console.log(movieInfo);
  }, [idCategorie]);

  console.log(movieInfo);

  return (
    <section className='carteleraMovies'>
      {idCategorie==28 ? (<h1>EN CARTELERA: ACCIÓN</h1>):(idCategorie==27 ? <h1>EN CARTELERA: TERROR</h1>: (idCategorie==878 ? <h1>EN CARTELERA: FICCIÓN</h1>: (idCategorie==35 ? <h1>EN CARTELERA: COMEDIA</h1>: <h1>EN CARTELERA</h1> )) )} 


      <section className='containerMovie'>

        {movieInfo.map((movie, index) => (
          <Movie
            key={index}
            image={movie.image}
            title={movie.title}
            titleEnglish={movie.titleEnglish}
            estreno={movie.estreno}
            time={movie.time}
            genre={movie.genres}
            id = {movie.id}
          />
        ))}

      </section>
    </section>
  );
};

export default Home;
