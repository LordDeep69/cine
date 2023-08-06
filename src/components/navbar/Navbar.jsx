import React, { useState } from 'react';
import './navbar.scss';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [selectedLocation, setSelectedLocation] = useState(''); // Estado para almacenar la ubicación seleccionada
  const [isLocationOptionsOpen, setLocationOptionsOpen] = useState(false); // Agrega esta línea

  const [selectedDate, setSelectedDate] = useState(''); // Estado para almacenar la fecha seleccionada
  const [isDateOptionsOpen, setDateOptionsOpen] = useState(false); // Estado para controlar si el menú de fechas está abierto



  const handleLocationChange = (location) => 
  
  {
      setSelectedLocation(location);
      setLocationOptionsOpen(false); // Cerrar el menú después de seleccionar una ubicación

  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDateOptionsOpen(false);
  };

  const toggleLocationOptions = () => {
    setLocationOptionsOpen(!isLocationOptionsOpen);
    setDateOptionsOpen(false); // Cerrar el menú de fechas si está abierto
  };

  const toggleDateOptions = () => {
    setDateOptionsOpen(!isDateOptionsOpen);
    setLocationOptionsOpen(false); // Cerrar el menú de ubicación si está abierto
  };

  const navigate = useNavigate();
  const handleClickCategory = (route) => 
  {
    navigate(route);
  };



  return (
    <div className="navbar">
      <div className="logo">
        {/* Elemento 1: Logo y Nombre */}
        <img src="https://i.ibb.co/m9LsLwL/logo-Cine-Colombia.png" alt="Logo" className="logo__image" />
        <span className="logo__name">Cine Colombia</span>
      </div>
      <div className="categories">
        {/* Elemento 2: Categorías */}
        <div onClick={() => handleClickCategory ('Category/28')}  className="container Action">
          <span className="text">Acción</span>
        </div>
        <div onClick={() => handleClickCategory ('Category/27')}  className="container Terror">
          <span className="text">Terror</span>
        </div>
        <div onClick={() => handleClickCategory ('Category/878')}   className="container Fiction">
          <span className="text">Ciencia Ficción</span>
        </div>
        <div  onClick={() => handleClickCategory ('Category/35')}  className="container Comedia">
          <span   className="text">Comedia</span>
        </div>
        {/* Repite este bloque para cada categoría */}
      </div>
      <div className="location-filter">
        {/* Elemento 3: Filtrado por Ubicación */}
        <div className="textbox"                      onClick={toggleLocationOptions}>
          <input
            type="text"
            placeholder="Cines Cercanos"
            value={selectedLocation}
            readOnly

          />
          <svg>...</svg>


          <div className={`location-options ${isLocationOptionsOpen ? 'open' : ''}`} style={{ display: isLocationOptionsOpen ? 'block' : 'none' }}>

              {/* Opciones del selector */}
              <div
                className={`location-option ${selectedLocation === 'Cine Macroplaza' ? 'selected' : ''}`}
                onClick={() => handleLocationChange('Cine Macroplaza')}
              >
                Cine Macroplaza
              </div>
              <div
                className={`location-option ${selectedLocation === 'Cine Macroplaza' ? 'selected' : ''}`}
                onClick={() => handleLocationChange('Cine Boomer')}
              >
                Cine Boomer
              </div>
              <div
                className={`location-option ${selectedLocation === 'Cine Macroplaza' ? 'selected' : ''}`}
                onClick={() => handleLocationChange('Cine Cartel')}
              >
                Cine Cartel
              </div>
              {/* Repite para otras opciones */}
          </div>

        </div>
      </div>
      <div className="date-filter">
        {/* Elemento 4: Filtrado por Fecha */}
        <div className="textbox" onClick={toggleDateOptions}>
          <input
            type="text"
            placeholder="Fecha Arriba"
            value={selectedDate}
            readOnly
          />
          <svg>...</svg>
          <div className={`location-options ${isDateOptionsOpen ? 'open' : ''}`} style={{ display: isDateOptionsOpen ? 'block' : 'none' }}>
            {/* Opciones de fecha */}
            <div className={`location-option ${selectedDate === '20 de agosto' ? 'selected' : ''}`} onClick={() => handleDateChange('20 de agosto')}>20 de agosto</div>
            <div className={`location-option ${selectedDate === '21 de agosto' ? 'selected' : ''}`} onClick={() => handleDateChange('21 de agosto')}>21 de agosto</div>
            <div className={`location-option ${selectedDate === '23 de agosto' ? 'selected' : ''}`} onClick={() => handleDateChange('23 de agosto')}>23 de agosto</div>
            <div className={`location-option ${selectedDate === '24 de agosto' ? 'selected' : ''}`} onClick={() => handleDateChange('24 de agosto')}>24 de agosto</div>
          </div>
        </div>
      </div>

      <div>
        <figure className='figureUser'>
          <img className = 'imgUser' src='https://www.pngkit.com/png/full/88-885453_login-white-on-clear-user-icon.png' alt="user" />
        </figure>
      </div>
    </div>
  );
}

export default Navbar;
