import React from 'react'
import '../styles/delete.css'
const Dblcok = () => {
  return (
    <div className='delete'>
    <h1>Are you sure you want to delete this video ?</h1>
    <div className='btn'>
    <button className='nobtn'>Cancel</button>
    <button className='delbtn'>Yes, Delete it</button>
    </div>
    </div>
  )
}

export default Dblcok