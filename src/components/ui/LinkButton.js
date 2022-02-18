import React from 'react'
import '../../styles/component.css'
const LinkButton = ({text}) => {
  return (
    <span className='linktext'><a href='#'>{text}</a></span>
  )
}

export default LinkButton