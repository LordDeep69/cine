import React from 'react'
import './seatsSlect.scss'
import { useLocationDate } from '../../context/LocationDateContext';
import { useNavigate } from 'react-router-dom';
import Seat from '../../components/seat/Seat';
const SeatsSlect = () => {

    const { seatNow, movieNow, ticketNow, selectedLocation, selectedDate, total } = useLocationDate();
    const navigate = useNavigate();
    const handleNextClick = () => {
        if (total > 0) {  // Navega solo si al menos un ticket ha sido seleccionado
        
              navigate('/Seat');
              console.log(seatNow);
        }
      };




  return (


    <main className="payment">
            <section className="selectSeats">
                <div className='selectSeats__info'> 
                    <span className='seatsTitle'>Selecciona tus Asientos</span>
                    <p className='seatsInfo'>Para cambiar tu lugar asignado da click en el asiento deseado. </p>

                    <span className='options'>
                        <div className='option'>

                            <span className="material-symbols-outlined yellow">    chair</span>
                            <p>Elección</p>

                        </div>
                        <div className='option'>

                            <span className="material-symbols-outlined red">    chair</span>
                            <p>Ocupado</p>

                        </div>
                        <div className='option'>

                                <span className="material-symbols-outlined blue">    chair</span>
                                <p>Disponible</p>
                        </div>

  

  

                        
                    </span>

                </div>

                <div className='selectSeats__select'> 
                        <Seat number={14} color={'blue'} />
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
  )
}

export default SeatsSlect;