import React, { useEffect } from 'react'
import './movieDetail.scss'
import { getMovie } from '../../services/movies'
const MovieDetail = () => {

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
    
        <div>DETALLES</div>
        

    </>
  )
}

export default MovieDetail