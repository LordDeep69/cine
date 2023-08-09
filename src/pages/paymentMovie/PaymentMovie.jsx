import React, { useState, useEffect } from 'react';
import './paymentMovie.scss';
import { useLocationDate } from '../../context/LocationDateContext';
import { useNavigate } from 'react-router-dom';

const PaymentMovie = () => {
  const { idLocation, idDate, movieNow, ticketNow, selectedLocation, selectedDate, total, setTotal, boleto, setBoletos, numberTicketAdult, setNumberTicketAdult,numberTicketChildren, setNumberTicketChildren, numberTicketOldman, setNumberTicketOldman } = useLocationDate();


  const adultTicketPrice = 71;
  const childrenTicketPrice = 56;
  const oldmanTicketPrice = 56;



  const handleTicketIncrement = (type) => {
    if (type === 'adult') {
      setNumberTicketAdult(numberTicketAdult + 1);
      setBoletos(boleto+1);
    } else if (type === 'children') {
      setNumberTicketChildren(numberTicketChildren + 1);
      setBoletos(boleto+1);
    } else if (type === 'oldman') {
      setNumberTicketOldman(numberTicketOldman + 1);
      setBoletos(boleto+1);
    }
  };

  const handleTicketDecrement = (type) => {

    if (type === 'adult' && numberTicketAdult > 0) {
      setNumberTicketAdult(numberTicketAdult - 1);
      setBoletos(boleto-1);
    } else if (type === 'children' && numberTicketChildren > 0) {
      setNumberTicketChildren(numberTicketChildren - 1);
      setBoletos(boleto-1);
    } else if (type === 'oldman' && numberTicketOldman > 0) {
      setNumberTicketOldman(numberTicketOldman - 1);
      setBoletos(boleto-1);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    const newTotal = numberTicketAdult * adultTicketPrice + numberTicketChildren * childrenTicketPrice + numberTicketOldman * oldmanTicketPrice;
    setTotal(newTotal);
  }, [numberTicketAdult, numberTicketChildren, numberTicketOldman]);

  const handleNextClick = () => {
    if (total > 0) {  // Navega solo si al menos un ticket ha sido seleccionado
    
          navigate('/Seat')
    }
  };

  return (
    <main className="payment">
      <section className="selectTicket">
        <span className="selectTicket__description">Selecciona Tus Boletos</span>
        <p className="selectTicket__detail">Puedes comprar 10 boletos máximo por transacción.</p>
        <div className="selectTicket__choose">
          <span className="ticket">
            <span className="ticket__adult">ADULTO</span>
            <div className="ticket__quantity">
              <span className="value">${adultTicketPrice}</span>
              <div className="buy">
                <span className="buy__lest" onClick={() => handleTicketDecrement('adult')}>-</span>
                <span className="buy__number">{numberTicketAdult}</span>
                <span className="buy__more" onClick={() => handleTicketIncrement('adult')}>+</span>
              </div>
            </div>
          </span>
          <span className="ticket">
            <span className="ticket__adult">NIÑOS</span>
            <div className="ticket__quantity">
              <span className="value">${childrenTicketPrice}</span>
              <div className="buy">
                <span className="buy__lest" onClick={() => handleTicketDecrement('children')}>-</span>
                <span className="buy__number">{numberTicketChildren}</span>
                <span className="buy__more" onClick={() => handleTicketIncrement('children')}>+</span>
              </div>
            </div>
          </span>
          <span className="ticket">
            <span className="ticket__adult">3 ERA EDAD</span>
            <div className="ticket__quantity">
              <span className="value">${oldmanTicketPrice}</span>
              <div className="buy">
                <span className="buy__lest" onClick={() => handleTicketDecrement('oldman')}>-</span>
                <span className="buy__number">{numberTicketOldman}</span>
                <span className="buy__more" onClick={() => handleTicketIncrement('oldman')}>+</span>
              </div>
            </div>
          </span>
        </div>
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
  );
};

export default PaymentMovie;
