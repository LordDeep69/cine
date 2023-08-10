import React from 'react';
import './movie.scss';
import { useNavigate } from 'react-router-dom';
import { useLocationDate } from '../../context/LocationDateContext';

const Movie = ({ image, title, titleEnglish, estreno, time, genre, id, description }) => {
  const genreNames = genre.map((item) => item.name).join(' ');
  const genreNamesData = genre.map((item) => item.name).join('  ');
  const imageComplete = `https://image.tmdb.org/t/p/original/${image}`;
  const {idLocation, idDate, setMovieNow, isLoggedIn, setIsLoggedIn } = useLocationDate(); // Usa el hook del contexto



  


  const navigate = useNavigate();

  const handleClickDetailMovie = (id, idFilm) => 
    {        
        if (idLocation && idDate )
        {
            
            navigate(id);

            setMovieNow({

                image: imageComplete,title:title, titleEnglish:titleEnglish, estreno:estreno, time:time, genre: genreNamesData , id:id, description:description

            });

            



        }
        if (isLoggedIn) 
        {
          navigate('/MovieEdit');

          setMovieNow({

             idFilm: idFilm , image: imageComplete,title:title, titleEnglish:titleEnglish, estreno:estreno, time:time, genre: genreNamesData , id:id, description:description

          })
        }

        

    } 


  return (
    <article  onClick={() => handleClickDetailMovie(`/Movie/${id}`, id)}  className='infoMovie'>
      <figure>
        <img className='infoMovie__img' src={imageComplete} alt="movieImage"  />
      </figure>
      <span className='infoMovie__description'>{title}. <br /></span>
      <span className='infoMovie__title'>
        Título en Inglés: {titleEnglish} <br />
        Estreno: {estreno} <br />
        Género: {genreNames} <br />
      </span>

      <span className='infoMovie__data'>
        <span className='infoMovie__detail'>
          <span className='restriction'>Exclusiva Para mayores de 15 años </span>
        </span>

        <span className='infoMovie__time'>
          <span className='time'>{time} min</span>
        </span>
      </span>
    </article>
  );
};

export default Movie;
