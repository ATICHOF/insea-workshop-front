import React from 'react'
import '../styles/delete.css'
const Dblcok = () => {
  return (
    <div className='delete'>
    <label className='delh'>Are you sure you want to delete this video ?</label>
    <div className='btnd'>
    <button className='nobtn'>Cancel</button>
    <button className='delbtn'>Yes, Delete it</button>
    </div>
    </div>
  )
}

export default Dblcok