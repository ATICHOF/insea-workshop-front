import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Videos',
    path: '/',
    icon: <BsIcons.BsCameraVideo className='icons'/>,
    cName: 'side-text'
  },
  {
    title: 'Audio',
    path: '/Audio',
    icon: <AiIcons.AiFillAudio className='icons' />,
    cName: 'side-text'
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: <IoIcons.IoMdSettings className='icons'/>,
    cName: 'side-text'
  },
  
];