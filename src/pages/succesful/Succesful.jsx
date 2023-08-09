import React from 'react'
import './succesful.scss'
import { useNavigate } from 'react-router-dom';
import { useLocationDate } from '../../context/LocationDateContext';


const Succesful = () => {


        
    const { seatNow, setSeatNow, movieNow, ticketNow, selectedLocation, selectedDate, total, boleto, setBoletos, idRoom, numberTicketAdult, numberTicketChildren, numberTicketOldman, beforenewSeats, setBeforeNewSeats, selectedSeats, setSelectedSeats,email, setEmail,cardName, setCardName,  cardNumber, setCardNumber,  expirationDate, setExpirationDate, cvv, setCVV } = useLocationDate();
    const navigate = useNavigate();


    const handleNextClick = () => {
        

        navigate('/QR')

      };




  return (
    
    <main className="payment">

<section className='Final'>

<section>
    <h2>¿TRANSACCIÓN EXITOSA!</h2>
</section>

<section className='InfoCom'>
    <h4>Información de Compra</h4>
    <span>Facturación</span>    
</section> 

<section className='DataCompra'>
    <span>
        <h5>
            Código 
        </h5>
        <h6>
            #61669666
        </h6>
    </span>

    <span>
        <h5>
            Fecha 
        </h5>
        <h6>
            Agosto 20 del 2023
        </h6>
    </span>
    <span>
        <h5>
            Total 
        </h5>
        <h6>
            ${total}
        </h6>
    </span>
    <span>
        <h5>
            Modo de Pago 
        </h5>
        <h6>
            Tarjeta: {cvv}
        </h6>
    </span>
</section>

<section className="resumen">
    <h4 className="resumen__title">Resumen de Compra</h4>
    <div className="resumen__data">
        <figure className="figure">
        <img className="image" src={movieNow.image} alt="POSTER MOVIE" />
        </figure>
        <div className="data">
        <span><b>Película</b>: {movieNow.title}</span>
        <span><b>Complejo</b>: {selectedLocation}</span>
        <span><b>Fecha</b>: {selectedDate}</span>
        <span><b>Función</b>: {ticketNow.name}</span>
        <span><b>Boletos</b>: {numberTicketAdult>0 && (<span> {numberTicketAdult} Adultos </span>)}  {numberTicketChildren>0 && (<span> {numberTicketChildren} Niños </span>)}  {numberTicketOldman>0 && (<span> {numberTicketOldman} Edad Avanzada </span>)} </span>                
        
        <span><b>Número de la Sala</b>: {idRoom}</span>


        <span>Asientos: {selectedSeats.map(seat => `${seat.row}${seat.number}`).join(', ')}</span>

        </div>
    </div>
    <p className="resumen__p">Se realizará un cargo por servicio por cada boleto dentro de la orden.</p>
    <div className="total">
        <span className="resumen__total">Total(IVA INCLUIDO):</span>
        <b>${total}</b>
    </div>
    <span className={`next ${total > 0 ? 'active' : ''}`} onClick={handleNextClick}>
        <span>Descargar Boletos</span>
    </span>
    </section>







</section>


</main>
  )
}

export default Succesful;