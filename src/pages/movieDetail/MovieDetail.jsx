import React, { useEffect, useState } from 'react';
import './movieDetail.scss';
import { getInfoTheater } from '../../services/infoTheater';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocationDate } from '../../context/LocationDateContext';
import { getVideoMovie } from '../../services/getVideoMovie';

const MovieDetail = () => {
  const {setMovieNewID, json, setJson, idLocation, idDate, movieNow, selectedDate, selectedLocation, setTicketNow, setMovieNow, setSeatNow, setIdRoom, idRoom} = useLocationDate();
  const { idMovie } = useParams();
  const [desiredRoomTimes, setDesiredRoomTimes] = useState([]);
  const [videoMovie, setVideoMovie] = useState("");
  const [selectedHour, setSelectedHour] = useState(null);


  

  useEffect(() => {
    const getData = async () => {
      const data = await getInfoTheater();
      setMovieNewID(idMovie);

      const desiredMovie = data.find((movie) => movie.id == idMovie);
      console.log('++++++++++++++++++++++++++++++');
      console.log('++++++++++++++++++++++++++++++');

      setJson(desiredMovie);
      if (desiredMovie) {
        const desiredDate = desiredMovie.dates.find((date) => date.id === idDate);

        if (desiredDate) {
          const desiredTheater = desiredDate.theaters.find((theater) => theater.id === idLocation);

          if (desiredTheater) {
            const desiredRoom = desiredTheater.rooms.find((room) => room.id === 1);

            if (desiredRoom) {
              setDesiredRoomTimes(desiredRoom.times);
              console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
              console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
              console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
              console.log(desiredRoom.times[0].seats);

              setIdRoom(desiredRoom.id);
              console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
              console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
              console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');

            } else {
              console.log('Sala no encontrada');
            }
          } else {
            console.log('Teatro no encontrado');
          }
        } else {
          console.log('Fecha no encontrada');
        }
      } else {
        console.log('Película no encontrada');
      }
    };

    const getVideo = async () => 
    {
        const video = await getVideoMovie(idMovie);
        setVideoMovie(video);

    }

    getData();




    getVideo();


    
  
  }, [idMovie, idDate, idLocation]);

  const handleClickHour = (hour, id) => {
    if (selectedHour === hour) {
      setSelectedHour(null); // Desactiva el hour si se hace clic en él nuevamente
    } else {
      setSelectedHour(hour); // Establece el hour seleccionado
      setTicketNow({time: id, name:hour})
    }
  };

  const navigate = useNavigate();

  const handleClickPaymet = () => 
  {
    console.log(json);

   console.log(json.dates[idDate-1].theaters[idLocation-1].rooms[0].times[idRoom].seats);

    setSeatNow(json.dates[idDate-1].theaters[idLocation-1].rooms[0].times[idRoom].seats);


    navigate('/Payment');
  }
  return (
    <section className='detail'>
      {desiredRoomTimes.length > 0 && (
      
        <section className='container'>

            <section className='container__left'>

              <div className='up'>
              <figure className='figure'>
                  <img src={movieNow.image} alt="Detalle de MOVIE" />
                </figure>

                
                <article className='articleMovie'>
                    <span className='title'>{movieNow.title}</span>
                    <p className='titleDate'>{movieNow.titleEnglish} (EUA, 2021)</p>
                    <span className='dateMovie'>
                        <span className='button '>B</span>
                        <span className='Time'>{movieNow.time} min</span>
                        <span className='genres'>{movieNow.genre}</span>


                    </span>
                </article>
              </div>

              <section className='Trailer'>
                <h3>Trailer</h3>
                <iframe
                  className='video'
                  src={`https://www.youtube.com/embed/${videoMovie}`}
                  title={movieNow.title}
                  frameBorder="0"
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </section>

              <span className='description'> 
                  <span className='Synopsis'>Sinopsis</span>
                  <p className='descriptionText'>{movieNow.description}</p>
              </span>
                
              
            </section>

            <section className='container__right'>

             <span className='date'> Horarios Disponibles {selectedDate}</span>
             <p className='choose'>Elige el Horario que Prefieras.</p>
             <span className='Theater'>{selectedLocation}</span>
             <div className='hours'>


             <div className={`hour ${selectedHour === desiredRoomTimes[0].hour ? 'selected' : ''}`} onClick={() => handleClickHour(desiredRoomTimes[0].hour, 1)}>{desiredRoomTimes[0].hour}</div>

             <div className={`hour ${selectedHour === desiredRoomTimes[1].hour ? 'selected' : ''}`} onClick={() => handleClickHour(desiredRoomTimes[1].hour, 2)}>{desiredRoomTimes[1].hour}</div>

             <div className={`hour ${selectedHour === desiredRoomTimes[2].hour ? 'selected' : ''}`} onClick={() => handleClickHour(desiredRoomTimes[2].hour, 3)}>{desiredRoomTimes[2].hour}</div>
              

             </div>

             <span className={`select ${selectedHour ? 'active' : ''}`} onClick={() => selectedHour && handleClickPaymet()}><p className='text'>Seleccionar Boletos</p></span>



            </section>
          
        </section>  

      )}
    </section>
  );
};

export default MovieDetail;
