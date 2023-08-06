import React from 'react';
import './movie.scss';

const Movie = ({ image, title, titleEnglish, estreno, time, genre }) => {
  const genreNames = genre.map((item) => item.name).join(' ');
  const imageComplete = `https://image.tmdb.org/t/p/original/${image}`;


  return (
    <article className='infoMovie'>
      <figure>
        <img className='infoMovie__img' src={imageComplete} alt="movieImage" style={{ objectFit: 'cover', width: '100%', height: '100%' }}  />
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
