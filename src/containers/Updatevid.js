import React from 'react'
import "../styles/upload.css"
const Updatevid = () => {
  return (
    <div className='updatevid'>
      <button ><img src={require('../assets/icons/Close.png')} alt="Close" className='close'/></button>
      <h1 className='head'>Upload New Video</h1>
      <div className='Drop'></div>
    </div>
  )
}

export default Updatevid