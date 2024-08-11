import React from 'react'
import Navbar from './Components/Navbar';
import Video from './Components/Video';
import Profilesection from './Components/Profilesection';
import './Allcomponentfile.css';

const AllComponentfile = () => {
  return (
    <div className='Allcomponent'>
        <Navbar/>
        <div className='main'>
            <Video/>
            <Profilesection/>
        </div>

    </div>
  )
}

export default AllComponentfile