import React from 'react'
import './form.scss'
import { useLocationDate } from '../../context/LocationDateContext';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const {setJson, json, seatNow, setSeatNow, movieNow, ticketNow, selectedLocation, selectedDate, total, boleto, setBoletos, idRoom, numberTicketAdult, numberTicketChildren, numberTicketOldman, beforenewSeats, setBeforeNewSeats, selectedSeats, setSelectedSeats,email, setEmail,cardName, setCardName,  cardNumber, setCardNumber,  expirationDate, setExpirationDate, cvv, setCVV } = useLocationDate();
    const navigate = useNavigate();
    

    const handleNextClick = () => {
        if (email && cardName && cardNumber && expirationDate && cvv) {  // Navega solo si al menos un ticket ha sido seleccionado

          
        
            


            console.log(beforenewSeats);
            navigate('/Succesful')

              
        }
      };
      

      




  return (


    <main className="payment">
            <section className="dataPerson">

                <h2>Información Personal</h2>
                <span>Completa los datos del Formulario para realizar el pago.</span>
 
                <form className="form">
          <div className="form-group">
            <label htmlFor="email">Ingrese Su Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardName">Nombre de la Tarjeta</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Número de la Tarjeta</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expirationDate">Fecha de Caducidad</label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              required
            />
          </div>
        </form>

                
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
                <span>Continuar</span>
            </span>
            </section>
  </main>
  )
}


export default Form