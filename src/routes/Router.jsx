import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from '../components/header/Header';
import MovieDetail from '../pages/movieDetail/MovieDetail';
import PaymentMovie from '../pages/paymentMovie/PaymentMovie';
import { LocationDateProvider } from '../context/LocationDateContext';
import SeatsSlect from '../pages/seatsSelect/SeatsSlect';
import Form from '../pages/form/Form';
import Succesful from '../pages/succesful/Succesful';
import QR from '../pages/pageQR/QR';
import Admin from '../pages/admin/Admin';
import HomeAdmin from '../pages/homeAdmin/HomeAdmin';
import MovieEdit from '../pages/movieEdit/MovieEdit';

const Router = () => {
  return (
    
    <BrowserRouter>

    <LocationDateProvider>
            <Header/>
            <Routes>
                
                <Route path='/'>
                  <Route path='/' element={<Home/>}/>
                  <Route path='Detail' element={<MovieDetail/>}/>
                  <Route path='Payment' element={<PaymentMovie/>}/>
                  <Route path='Category/:idCategorie' element={<Home/>}/>
                  <Route path='Movie/:idMovie' element={<MovieDetail/>}/>
                  <Route path='Seat' element={<SeatsSlect/>}/>
                  <Route path='Form' element={<Form/>}/>
                  <Route path='Succesful' element={<Succesful/>}/>
                  <Route path='QR' element={<QR/>}/>
                  <Route path='Admin' element={<Admin/>}/>
                  <Route path='HomeAdmin' element={<HomeAdmin/>}/>
                  <Route path='MovieEdit' element={<MovieEdit/>}/>







   
                      
                </Route>
              

            </Routes>
    </LocationDateProvider>

    
    </BrowserRouter>
    
  )
}

export default Router;