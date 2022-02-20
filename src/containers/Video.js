import React from 'react'
import '../styles/home.css'
const Videos = () => {
  return (
    <div>
      <div className='sidebar'>
        <label className='title'>FASTCAST</label>
        <div className='btnframe'>
          <ul>
            <li className='vbtn'><img src={require('../assets/icons/video1.png')} alt="video"/></li>
            <li className='vbtn'><img src={require('../assets/icons/Audio.png')} alt="audio"/></li>
            <li className='vbtn'><img src={require('../assets/icons/statistic.png')} alt="statistics"/></li>
            <li className='vbtn'><img src={require('../assets/icons/setting.png')} alt="settings"/></li>
          </ul>
          <div className='logout'><img src={require('../assets/icons/logout.png')} alt="logout"/></div>
        </div>
      </div>
      <div className='main'>
        <div className='header'>
          <label className='title'>Videos</label>
          <button className='newbtn'>Add video</button>
        </div>
        <div className='listvid'>
                    <ul className='video-card'>
                        
                    </ul>
        </div>
      </div>
    </div>
  )
}

export default Videos