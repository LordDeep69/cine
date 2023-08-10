import React, { useEffect, useState } from 'react'
import './movieEdit.scss'
import { useLocationDate } from '../../context/LocationDateContext';
import { getVideoMovie } from '../../services/getVideoMovie';
import { getInfoTheater } from '../../services/infoTheater';
import { upDateServer } from '../../services/upDateServer';

const MovieEdit = () => {


    const {movieNow,setMovieNow, selectedDate, idDate, idLocation,  selectedLocation} = useLocationDate(); 
    const [videoMovie, setVideoMovie] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [newTheater, setNewTheater] = useState(''); // Agrega esta línea
    const {setMovieNewID, json, setJson, setTicketNow, setSeatNow, setIdRoom, idRoom} = useLocationDate();
    const [locationEdit, setLocationEdit ] = useState({});



    const getVideo = async () => 
    {
        const video = await getVideoMovie(movieNow.idFilm);
        setVideoMovie(video);

    }

    const getData = async () => 
    {
        const data = await getInfoTheater();
        const desiredMovie = data.find((movie) => movie.id == movieNow.idFilm);
        setJson(desiredMovie);
        setLocationEdit(desiredMovie.dates[idDate-1]);
        console.log(desiredMovie.dates[idDate-1]);
        console.log(locationEdit);
    }

    const toggleForm = () => {
        setShowForm(!showForm);
        setNewTheater(''); // Restablecer el valor del nuevo teatro al mostrar el formulario
    };
    
    const handleNewTheaterSubmit = async () => {
        if (newTheater.trim() !== '') {
            const newTheaterObject = {
                id: locationEdit.theaters.length + 1,
                name: newTheater,
                rooms: [
                    {
                        id: 1,
                        times: [
                            {
                                id: 1,
                                hour: '18:00',
                                seats: { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [], J: [] }
                            },
                            {
                                id: 2,
                                hour: '20:00',
                                seats: { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [], J: [] }
                            },
                            {
                                id: 3,
                                hour: '22:00',
                                seats: { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [], J: [] }
                            }
                        ]
                    }
                ]
            };

            setLocationEdit(prevState => ({
                ...prevState,
                theaters: [...prevState.theaters, newTheaterObject]
            }));

            setShowForm(false);
            setNewTheater('');

            try {
                const updatedJson = {
                    ...json,
                    dates: json.dates.map((date, index) =>
                        index === idDate - 1
                            ? { ...date, theaters: [...date.theaters, newTheaterObject] }
                            : date
                    )
                };

                await upDateServer(movieNow.idFilm, updatedJson);
                setJson(updatedJson);

                console.log('Datos actualizados en el servidor:', updatedJson);
            } catch (error) {
                console.error('Error al actualizar en el servidor:', error);
            }
        }
    };
      

    useEffect(() => {
        if (locationEdit.length > 0) {
          console.log('locationEdit:', locationEdit);
        }
      }, [locationEdit]);
    useEffect (()=> 
    {

        getVideo();
        getData();

    }, [])

    useEffect(() => {
        if (locationEdit.length > 0) {
          console.log('locationEdit:', locationEdit);

            //     // Llama a la función para actualizar el servidor
            //     upDateServer(movieNow.idFilm, json).then(updatedData => {
            //         nsole.log('Datos actualizados en el servidor:', updatedData);
            //   }).catch(error => {
            //       console.error('Error al actualizar en el servidor:', error);
            //  });
        }
      }, [locationEdit]);


    const handleTeatroClick = (theaterIndex) => {
        const selectedTheater = locationEdit.theaters[theaterIndex];
        console.log('Teatro seleccionado:', selectedTheater);
        // console.log(movieNow.idFilm);


        // setJson(prevJson => {
        //     const newJson = { ...prevJson };
        //     const dateIndex = idDate - 1;
        //     newJson.dates[dateIndex] = {
        //         ...newJson.dates[dateIndex],
        //         theaters: [...locationEdit.theaters]
        //     };
        //     return newJson;
        // });

        // console.log(json);
        // console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        // console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        // upDateServer(movieNow.idFilm, json);
        // console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        // console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');



        
    };
      


  return (
    
    <main className='mainEdit'>

        <section className='upEdit'>

            <figure className='figureEdit'>
                <img className='imgEdit' src= {movieNow.image} alt="Pefil" />
            </figure>

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

        </section>

        <section className='downEdit'>

            <section className='leftEdit'>

                <span>
                    <h6>Título Original</h6>
                    {movieNow.description}
                </span>

                <span>
                    <h6>Título Original: </h6>
                  {movieNow.titleEnglish}  
                </span>

            </section>

            <section className='rightEdit'>

                <span className='infoEdit'>
                    <h5>FUNCIONES POR LordDeepCINEMA</h5>

                </span>


                <section className='teatros'>
                                {locationEdit && locationEdit.theaters && locationEdit.theaters.map((theater, index) => (
                        <h3 className={`teatro`} key={index} onClick={() => handleTeatroClick(index)} >{theater.name}</h3>
                    ))}                 
                </section>

                <section className='newTeatro'>
                <h4 className='addTeatro' onClick={toggleForm}>Agregar Teatro</h4>

                                    {showForm && (
                        <div className='theater-form'>
                            <input
                                type='text'
                                placeholder='Nombre del Teatro'
                                value={newTheater}
                                onChange={(e) => setNewTheater(e.target.value)}
                            />
                            <button onClick={handleNewTheaterSubmit}>Agregar</button>
                        </div>
                    )}
                </section>



            </section>

        </section>
    </main>
  )
}

export default MovieEdit