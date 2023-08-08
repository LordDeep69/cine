import React from 'react'
import Navbar from '../navbar/Navbar'
import Carousel from '../carousel/Carousel'
import './header.scss'

const Header = () => {
  return (
            <div className='header'>

              <div className='header__nav'> <Navbar/>  </div>
              <div className='header__car'>   <Carousel/>   </div>
            </div>
  )
}

export default Header