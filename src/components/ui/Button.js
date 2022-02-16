import React from 'react';
import '../../styles/component.css'

const Button = ({textbtn}) => {
  return (
    <div >
        <button className='btn'>{textbtn}</button>
    </div>
  )
}

export default Button