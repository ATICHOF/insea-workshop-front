import React from 'react'
import '../../styles/component.css'
const Input = ({name}) => {
  return (
    <div className='input'>
        <label>{name}</label>
        <input className='txtinput'></input>
    </div>
  )
}

export default Input