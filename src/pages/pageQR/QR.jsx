import React from 'react'
import './qr.scss'
import { useNavigate } from 'react-router-dom';
import { useLocationDate } from '../../context/LocationDateContext';
const QR = () => 

        

{

    const { seatNow, setSeatNow, movieNow, ticketNow, selectedLocation, selectedDate, total, boleto, setBoletos, idRoom, numberTicketAdult, numberTicketChildren, numberTicketOldman, beforenewSeats, setBeforeNewSeats, selectedSeats, setSelectedSeats,email, setEmail,cardName, setCardName,  cardNumber, setCardNumber,  expirationDate, setExpirationDate, cvv, setCVV } = useLocationDate();
    const navigate = useNavigate();


    const handleNextClick = () => {
        

        navigate('/QR')

      };
  return (


    <main className="payment">
    
    <section className="resumen">
        <h4 className="resumen__title">Boletos                                              {selectedDate}</h4>
        <div className="resumen__data">
            <figure className="figure">
            <img className="image" src={movieNow.image} alt="POSTER MOVIE" />
            </figure>
            <div className="data">
            <span><b>Película</b>: {movieNow.title}</span>
            <span><b>Complejo</b>: {selectedLocation}</span>
            <span><b>Sala</b>: {idRoom}</span>
    
    
            <span>Asientos: {selectedSeats.map(seat => `${seat.row}${seat.number}`).join(', ')}</span>
    
            </div>
        </div>


        <figure className='QR'>
            <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC" alt="QR" />
        </figure>
        </section>
    
    
    
    
    
    
    

    
    </main>    


    
  )
}

export default QR