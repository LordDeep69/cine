import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';



function Carousel() {
  return (
    <div className="container">

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
          <img src='https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg' alt="slide_image" />
          <h2 className='titleSpain'>La Noche Del Demonio: La Prueba Roja</h2>
          <span className='Title'>Título en inglés: Insidious: The Red Door</span>
          <h5 className='estreno'>Estreno: 06 Jul 2023 <br /> Género: Terror </h5>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg' alt="slide_image" />
          <h2 className='titleSpain'>La Noche Del Demonio: La Prueba Roja</h2>
          <span className='Title'>Título en inglés: Insidious: The Red Door</span>
          <h5 className='estreno'>Estreno: 06 Jul 2023 <br /> Género: Terror </h5>        </SwiperSlide>
        <SwiperSlide>
        <img src='https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg' alt="slide_image" />
          <h2 className='titleSpain'>La Noche Del Demonio: La Prueba Roja</h2>
          <span className='Title'>Título en inglés: Insidious: The Red Door</span>
          <h5 className='estreno'>Estreno: 06 Jul 2023 <br /> Género: Terror </h5>        </SwiperSlide>
        <SwiperSlide>
        <img src='https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg' alt="slide_image" />
          <h2 className='titleSpain'>La Noche Del Demonio: La Prueba Roja</h2>
          <span className='Title'>Título en inglés: Insidious: The Red Door</span>
          <h5 className='estreno'>Estreno: 06 Jul 2023 <br /> Género: Terror </h5>        </SwiperSlide>
        <SwiperSlide>
        <img src='https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg' alt="slide_image" />
          <h2 className='titleSpain'>La Noche Del Demonio: La Prueba Roja</h2>
          <span className='Title'>Título en inglés: Insidious: The Red Door</span>
          <h5 className='estreno'>Estreno: 06 Jul 2023 <br /> Género: Terror </h5>        </SwiperSlide>
        <SwiperSlide>
        <img src='https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg' alt="slide_image" />
          <h2 className='titleSpain'>La Noche Del Demonio: La Prueba Roja</h2>
          <span className='Title'>Título en inglés: Insidious: The Red Door</span>
          <h5 className='estreno'>Estreno: 06 Jul 2023 <br /> Género: Terror </h5>        </SwiperSlide>
        <SwiperSlide>
        <img src='https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg' alt="slide_image" />
          <h2 className='titleSpain'>La Noche Del Demonio: La Prueba Roja</h2>
          <span className='Title'>Título en inglés: Insidious: The Red Door</span>
          <h5 className='estreno'>Estreno: 06 Jul 2023 <br /> Género: Terror </h5>        </SwiperSlide>


      </Swiper>
    </div>
  );
}

export default Carousel;