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

  return (
    <LocationDateContext.Provider
      value={{ selectedLocation, setSelectedLocation, selectedDate, setSelectedDate, idLocation, setIdLocation, idDate, setIdDate }}
    >
      {children}
    </LocationDateContext.Provider>
  );
};
