import React from 'react'
import "../styles/upload.css"
const Updatevid = () => {
  return (
    <div className='updatevid'>
      <a className='close' color='#FFF' href='#'><img src={require('../assets/icons/Close.png')} alt="close"/></a>
      <h1 className='head'>Upload New Video</h1>
      <div className='Drop'>
        <img src={require('../assets/icons/Video.png')} alt="video" className='video' />
        <h1 className='p1'>Drag and drop video files to upload</h1>
        <p>Choose a PNG, JPG, or GIF file from your device</p>
        <button className='selectbtn'>Select a file</button>
      </div>
    </div>
  )
}

export default Updatevid