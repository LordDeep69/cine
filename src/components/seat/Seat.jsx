import React from 'react'
import './seat.scss'
const Seat = ({number, color}) => {
  return (
    
    <div className='typeSeats'>

        <span class={`material-symbols-outlined ${color}`} >    chair</span>
        <span className='number'>{number}</span>
    
    </div>
  )
}

export default Seat;