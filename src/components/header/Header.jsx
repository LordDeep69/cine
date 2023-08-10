import React from 'react'
import Navbar from '../navbar/Navbar'
import Carousel from '../carousel/Carousel'
import './header.scss'
import { useLocationDate } from '../../context/LocationDateContext'

const Header = () => {

  const {isLoggedIn} = useLocationDate();

  return (
            <div className='header'>

              <div className='header__nav'> <Navbar/>  </div>

              {
                !isLoggedIn && (<div className='header__car'>   <Carousel/>   </div>)
              }
              
            </div>
  )
}

export default Header