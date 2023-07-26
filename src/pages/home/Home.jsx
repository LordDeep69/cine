import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.scss'

const Home = () => {

  const navigate = useNavigate();

  const handleDetail = () => 
  {
    navigate('/Detail');
  }
  const handlePayment = () => 
  {
    navigate('/Payment');
  }


  return (
    <>

        <div >Bienvenido a Home. </div>
        <button onClick = {handleDetail} className = 'btnD'> Detalles</button>
        <button onClick={handlePayment} className = 'btnP'> Pago</button>

        
    
    </>
    
  )
}

export default Home