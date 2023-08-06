import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { getMovie, getMovies } from '../../services/movies';



function Carousel() 

  {
    const [movieInfo, setMovieInfo] = useState([]);


    const getAllMovie = async () => {
      try {
        const data = await getMovies();
  

  
        const movieDetails = await Promise.all(
          data.map(async (movie) => {
            const movieDetail = await getMovie(movie.id);
            return {
              image: movie.backdrop_path,
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
    }, []);




    


    
  return (
    <div className="container">

      {
        movieInfo.length > 0 && (


          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieInfo[0].image}`}
                alt="slide_image"
              />
              <div className="image-overlay"></div> {/* Capa semi-transparente */}
            </div>

            <div className="text-overlay">
            <h2 className='titleSpain'>{movieInfo[0].title}</h2>
              <span className='Title'>Título en inglés: {movieInfo[0].titleEnglish}</span>
              <h5 className='estreno'>Estreno: {movieInfo[0].estreno} <br /> Género: {movieInfo[0].genres[0].name} </h5>
            </div>

            </SwiperSlide>

            <SwiperSlide>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieInfo[1].image}`}
                alt="slide_image"
              />
              <div className="image-overlay"></div> {/* Capa semi-transparente */}
            </div>

            <div className="text-overlay">

              <h2 className='titleSpain'>{movieInfo[1].title}</h2>
              <span className='Title'>Título en inglés: {movieInfo[1].titleEnglish}</span>
              <h5 className='estreno'>Estreno: {movieInfo[1].estreno} <br /> Género:{movieInfo[1].genres[0].name} </h5>
             </div> 
            </SwiperSlide>

            <SwiperSlide>
              
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieInfo[2].image}`}
                alt="slide_image"
              />
              <div className="image-overlay"></div> {/* Capa semi-transparente */}
            </div>
            <div className="text-overlay">

              <h2 className='titleSpain'>{movieInfo[2].title}</h2>
              <span className='Title'>Título en inglés: {movieInfo[2].titleEnglish}</span>
              <h5 className='estreno'>Estreno: {movieInfo[2].estreno} <br /> Género:{movieInfo[2].genres[0].name} </h5>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieInfo[3].image}`}
                alt="slide_image"
              />
              <div className="image-overlay"></div> {/* Capa semi-transparente */}
            </div>

            <div className="text-overlay">

              <h2 className='titleSpain'>{movieInfo[3].title}</h2>
              <span className='Title'>Título en inglés: {movieInfo[3].titleEnglish}</span>
              <h5 className='estreno'>Estreno: {movieInfo[3].estreno} <br /> Género:{movieInfo[3].genres[0].name} </h5>
             </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieInfo[4].image}`}
                alt="slide_image"
              />
              <div className="image-overlay"></div> {/* Capa semi-transparente */}
            </div>

            <div className="text-overlay">

              <h2 className='titleSpain'>{movieInfo[4].title}</h2>
              <span className='Title'>Título en inglés: {movieInfo[4].titleEnglish}</span>
              <h5 className='estreno'>Estreno: {movieInfo[4].estreno} <br /> Género:{movieInfo[4].genres[0].name}</h5>
             </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieInfo[6].image}`}
                alt="slide_image"
              />
              <div className="image-overlay"></div> {/* Capa semi-transparente */}
            </div>

            <div className="text-overlay">
              <h2 className='titleSpain'>{movieInfo[6].title}</h2>
              <span className='Title'>Título en inglés: {movieInfo[6].titleEnglish}</span>
              <h5 className='estreno'>Estreno: {movieInfo[6].estreno} <br /> Género: {movieInfo[6].genres[0].name} </h5>

             </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieInfo[5].image}`}
                alt="slide_image"
              />
              <div className="image-overlay"></div> {/* Capa semi-transparente */}
            </div>

            <div className="text-overlay">

              <h2 className='titleSpain'>{movieInfo[5].title}</h2>
              <span className='Title'>Título en inglés: {movieInfo[5].titleEnglish}</span>
              <h5 className='estreno'>Estreno: {movieInfo[5].estreno} <br /> Género: {movieInfo[5].genres[0].name} </h5>
             </div>
            </SwiperSlide>

            

           

          </Swiper>
        )
      }
    </div>
  );
}

export default Carousel;