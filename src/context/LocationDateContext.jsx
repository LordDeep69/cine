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
  const [movieNow, setMovieNow ] = useState({});
  const [ticketNow, setTicketNow] = useState({});
  const [idRoom, setIdRoom] = useState(0);
  const [seatNow, setSeatNow] = useState({});
  const [total, setTotal] = useState(0);
  const [boleto, setBoletos] = useState(0);
  const [numberTicketAdult, setNumberTicketAdult] = useState(0);
  const [numberTicketChildren, setNumberTicketChildren] = useState(0);
  const [numberTicketOldman, setNumberTicketOldman] = useState(0);



  return (
    <LocationDateContext.Provider
      value={{ selectedLocation, setSelectedLocation, selectedDate, setSelectedDate, idLocation, setIdLocation, idDate, setIdDate, movieNow, setMovieNow, ticketNow, setTicketNow, seatNow, setSeatNow, total, setTotal, boleto, setBoletos, numberTicketAdult, setNumberTicketAdult,numberTicketChildren, setNumberTicketChildren, numberTicketOldman, setNumberTicketOldman, idRoom, setIdRoom }}
    >
      {children}
    </LocationDateContext.Provider>
  );
};
