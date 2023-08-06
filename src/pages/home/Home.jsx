import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.scss'

const Home = () => {

  const navigate = useNavigate();

  const handleNavigate = (route) => 
  {
    navigate(route);
  }



  return (
    <>

        <div >Bienvenido a Home. </div>
        <button onClick = {()=>handleNavigate('/Detail')} className = 'btnD'> Detalles</button>
        <button onClick={()=>handleNavigate('/Payment')} className = 'btnP'> Pago</button>

        
    
    </>
    
  )
}

export default Home