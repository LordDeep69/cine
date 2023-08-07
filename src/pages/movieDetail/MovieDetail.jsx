import React, { useEffect } from 'react'
import './movieDetail.scss'
import { getMovie } from '../../services/movies'
import { useLocationDate } from '../../context/LocationDateContext';


const MovieDetail = () => {


  const { selectedLocation, selectedDate, idLocation, idDate } = useLocationDate(); // Usa el hook del contexto


  const getData = async () => {

    const data = await getMovie(298618);


    console.log(data);
    console.log('......................');
    console.log(data);
    console.log('......................');

  }

      useEffect(()=>{

        getData();

    }, []);

  return (
    <>
    
        <div>DETALLES DE LA PELÍCULA: <br /> Teatro:  {selectedLocation} y su ID es: {idLocation} <br /> Fecha: {selectedDate} y su ID es: {idDate}</div>
        

    </>
  )
}

export default MovieDetail