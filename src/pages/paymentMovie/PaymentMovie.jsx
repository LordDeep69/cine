import React from 'react'
import './paymentMovie.scss'
import { useLocationDate } from '../../context/LocationDateContext';
const PaymentMovie = () => 
{
  const { idLocation, idDate, movieNow, ticketNow} = useLocationDate();

  return (
    <div>Hora Seleccionada: {ticketNow.time} </div>
  )
}

export default PaymentMovie