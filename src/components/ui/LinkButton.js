import React from 'react'
import '../../styles/component.css'
const LinkButton = ({text,link}) => {
  return (
    <label className='linktext'><a href={link}>{text}</a></label>
  )
}

export default LinkButton