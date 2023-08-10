import React, { useState, useEffect } from 'react';
import './admin.scss';
import getAdmin from '../../services/getAdmin';
import { useNavigate } from 'react-router-dom';
import { useLocationDate } from '../../context/LocationDateContext';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn } = useLocationDate();

  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const data = await getAdmin();
        setAdminData(data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchAdminData();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      console.log('+++++');
      console.log(isLoggedIn);
      navigate('/HomeAdmin')
      console.log('+++++');

    }
  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    if (adminData && adminData[0].correo === email && adminData[0].password === password) {
      console.log('Sí es administrador');
      setIsLoggedIn(true);


    } else {
      console.log('No es administrador');
    }
  };

  return (
    <div className="admin-container">
      <h1>Inicio de Sesión de Administrador</h1>
      <div className="admin-form">
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
      {isLoggedIn && <p className="success-message">Sí es administrador</p>}
    </div>
  );
};

export default Admin;
