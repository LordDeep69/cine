import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from '../components/header/Header';
import MovieDetail from '../pages/movieDetail/MovieDetail';
import PaymentMovie from '../pages/paymentMovie/PaymentMovie';
import { LocationDateProvider } from '../context/LocationDateContext';

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
                </Route>
              

            </Routes>
    </LocationDateProvider>

    
    </BrowserRouter>
    
  )
}

export default Router;