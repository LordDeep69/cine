import React, { useState } from 'react'
import './seatsSlect.scss'
import { useLocationDate } from '../../context/LocationDateContext';
import { useNavigate } from 'react-router-dom';
import Seat from '../../components/seat/Seat';
const SeatsSlect = () => {

    const { seatNow, setSeatNow, movieNow, ticketNow, selectedLocation, selectedDate, total, boleto, setBoletos, idRoom, numberTicketAdult, numberTicketChildren, numberTicketOldman, beforenewSeats, setBeforeNewSeats, selectedSeats, setSelectedSeats } = useLocationDate();
    const navigate = useNavigate();
    const [seatColors, setSeatColors] = useState({});
    const [numberSeat, setNumberSeat] = useState(0);
    const [newSeats, setNewSeats] = useState(seatNow);

    


    

    console.log(seatNow)
    const handleNextClick = () => {
        if (boleto == 0) {  // Navega solo si al menos un ticket ha sido seleccionado
        
              setBeforeNewSeats(newSeats);
              
              navigate('/Form')

              
        }
      };
      const handleSeatClick = (row, number) => {
        const originalColor = seatNow[row].includes(number) ? 'red' : 'blue';
      


            if (originalColor === 'blue') {
                console.log(`Has dado click sobre el asiento ${number} de la fila ${row}`);
            
                setSeatColors(prevSeatColors => {
                  const currentColor = prevSeatColors[row] && prevSeatColors[row][number];
                  let newColor;

                  
            
                  if (currentColor === 'orange') 
                  {
                    newColor = undefined;
                    setBoletos(boleto+1);
                    setNewSeats(prevSeatSelected => {
                        const updatedRow = prevSeatSelected[row].filter(seatNumber => seatNumber !== number);
                        return {
                          ...prevSeatSelected,
                          [row]: updatedRow
                        };
                      });


                      setSelectedSeats(prevSelectedSeats =>
                        prevSelectedSeats.filter(seat => seat.row !== row || seat.number !== number)
                      );
                      console.log('KKKKKKKKKKKKKKKKKKKKKKKKK');
                      console.log('KKKKKKKKKKKKKKKKKKKKKKKKK');
                      console.log(newSeats)
                      console.log('KKKKKKKKKKKKKKKKKKKKKKKKK');
                      console.log('KKKKKKKKKKKKKKKKKKKKKKKKK');
                      
                  } 
                  else 
                  {
                    if(boleto)
                    {
                        newColor = 'orange';
                        setBoletos(boleto-1);
                        setNewSeats(prevSeatSelected => ({
                            ...prevSeatSelected,
                            [row]: [...prevSeatSelected[row], number]
                          }));

                          setSelectedSeats(prevSelectedSeats => [...prevSelectedSeats, { row, number }]);

                    }
                  }
            
                  return {
                    ...prevSeatColors,
                    [row]: {
                      ...prevSeatColors[row],
                      [number]: newColor
                    }
                  };
                });
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
                    {Object.keys(seatNow).map((fila) => {
                        const asientosOcupados = seatNow[fila];

                        return (
                        <div key={fila} className={`Fila ${fila}`}>
                            {fila.localeCompare('F') == 0 && (<div className='filaF'> F </div>)}
                            {Array.from({ length: 14 }, (_, index) => {
                            const asientoNumero = index + 1;
                            const color = seatColors[fila] && seatColors[fila][asientoNumero] ? seatColors[fila][asientoNumero] : (asientosOcupados.includes(asientoNumero) ? 'red' : 'blue');
                            const number = asientosOcupados.includes(asientoNumero)
                                ? asientoNumero
                                : asientoNumero;

                            if (number<=7) 
                            {
                                
            
                                    if (fila.localeCompare('F') !== 0) 
                                    {
                                        if (number!=1 ) 
                                        
                                        {
                                            return (<div onClick={() => handleSeatClick (fila, number)} className={number==7 ? 'grupo1 last':'grupo1'}><span className='Name'><Seat key={asientoNumero} number={number} color={color} /> </span></div>); 

                                        } 
                                        else 
                                        {
                                            return (<div onClick={() => handleSeatClick (fila, number)}  className={number==7 ? 'grupo1 last':'grupo1'}><span className='Name'>{fila}<Seat key={asientoNumero} number={number} color={color} /> </span></div>); 

                                        }
                                    } 
                                    else 
                                    {
                                        
                                        if (number==1) 
                                        {
                                            return (<div onClick={() => handleSeatClick (fila, number)}  className='grupoF first'> <Seat key={asientoNumero} number={number} color={color} /></div>); 
   
                                        } 
                                        else 
                                        {
                                            return (<div onClick={() => handleSeatClick (fila, number)}  className='grupoF'> <span className='Name'><Seat key={asientoNumero} number={number} color={color} /> </span> </div>); 
                                        }
                                   
                                    }
                                    

                            } else 
                            {

                                 
                                    if (fila.localeCompare('F') !== 0) 
                                    {
                                        return (<div onClick={() => handleSeatClick (fila, number)}  className='grupo2'> <Seat key={asientoNumero} number={number} color={color} /> </div>);                                    
                                    } 
                                    else 
                                    {
                                        
                                    }

                            }

                            })}
                        </div>
                        );
                    })}
                </div>
                
            </section>
            <section className="resumen">
            <h4 className="resumen__title seta">Resumen de Compra</h4>
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
            <p className="resumen__p seta">Se realizará un cargo por servicio por cada boleto dentro de la orden.</p>
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