import React, { useState, useEffect } from 'react';
import './admin.scss';
import getAdmin from '../../services/getAdmin';


const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState(null);

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

  const handleLogin = () => {
    if (adminData && adminData.correo === email && adminData.password === password) {
      console.log('Sí es administrador');
      setIsLoggedIn(true);
    } else {
      console.log('No es administrador');
      setIsLoggedIn(false);
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
