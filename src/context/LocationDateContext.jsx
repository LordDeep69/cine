// LocationDateContext.js
import React, { createContext, useContext, useState } from 'react';

const LocationDateContext = createContext();

export const useLocationDate = () => {
  return useContext(LocationDateContext);
};

export const LocationDateProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [idLocation, setIdLocation] = useState('');
  const [idDate, setIdDate] = useState('');
  const [movieNewID, setMovieNewID] = useState('');
  const [finalJson, setFinalJson] = useState('');
  const [json, setJson] = useState('');
  const [movieNow, setMovieNow ] = useState({});
  const [ticketNow, setTicketNow] = useState({});
  const [idRoom, setIdRoom] = useState(0);
  const [seatNow, setSeatNow] = useState({});
  const [total, setTotal] = useState(0);
  const [boleto, setBoletos] = useState(0);
  const [numberTicketAdult, setNumberTicketAdult] = useState(0);
  const [numberTicketChildren, setNumberTicketChildren] = useState(0);
  const [numberTicketOldman, setNumberTicketOldman] = useState(0);
  const [beforenewSeats, setBeforeNewSeats] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [email, setEmail] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');



  return (
    <LocationDateContext.Provider
      value={{ selectedLocation, setSelectedLocation, selectedDate, setSelectedDate, idLocation, setIdLocation, idDate, setIdDate, movieNow, setMovieNow, ticketNow, setTicketNow, seatNow, setSeatNow, total, setTotal, boleto, setBoletos, numberTicketAdult, setNumberTicketAdult,numberTicketChildren, setNumberTicketChildren, numberTicketOldman, setNumberTicketOldman, idRoom, setIdRoom, beforenewSeats, setBeforeNewSeats, selectedSeats, setSelectedSeats, email, setEmail,cardName, setCardName,  cardNumber, setCardNumber,  expirationDate, setExpirationDate, cvv, setCVV, json, setJson, finalJson, setFinalJson, movieNewID, setMovieNewID}}
    >
      {children}
    </LocationDateContext.Provider>
  );
};




