import React from 'react'
import '../../styles/component.css'
const LinkButton = ({text}) => {
  return (
    <div><label className='linktext'><a href='#'>{text}</a></label></div>
  )
}

export default LinkButton