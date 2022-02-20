import React, { useState } from 'react'
import "../styles/upload.css"
import { FileUploader } from "react-drag-drop-files";
const Updatevid = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState(null);
  const handleChange = (file) => { setFile(file);};
  
  return (
    <div className='updatevid'>
      <a className='closet' color='#FFF' href='/home'><img src={require('../assets/icons/Close.png')} alt="close"/></a>
      <h1 className='head'>Upload New Video</h1>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
      <div className='Drop'>
        <img src={require('../assets/icons/Video.png')} alt="video" className='videoicon' />
        <label className='Dnd'>Drag and drop video files to upload</label>
        <p>Choose a PNG, JPG, or GIF file from your device</p>
        <button className='selectbtn'>Select a file</button>
      </div>
      </FileUploader>
    </div>
  )
}
export default Updatevid