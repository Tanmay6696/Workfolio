import React, { useEffect } from 'react'
import Navbar from './Components/Navbar';
import Video from './Components/Video';
import { useDispatch, useSelector } from 'react-redux';

import Profilesection from './Components/Profilesection';
import './Allcomponentfile.css';
import { fetchusersdata } from './Store/UserDataSlice';

const AllComponentfile = () => {
  const dispatch=useDispatch();
  const allusersdata=useSelector(
    (state)=>state.userdata.allusersdata);
  const userstatus=useSelector((state)=>state.userdata.status);
  console.log("allusersdata ",allusersdata);
  console.log("userstatus ",userstatus);
  
  useEffect(()=>{
    if(userstatus=='idle'){
      console.log("hi0");
      dispatch(fetchusersdata());
      console.log("userstatus ",allusersdata);
      
    }
  },[userstatus,dispatch]);
  let content;
  if (userstatus === 'succeeded') {
    content = allusersdata.map((user, index) => (
      <div  key={index}>
        <div className='main'>
          <Video user={user} />
          <Profilesection user={user} />
        </div>
        
      </div>
      
    ));
  } else if (userstatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (userstatus === 'failed') {
    content = <div>Error loading users</div>;
  }
  
   
  return (
    
    <div className='Allcomponent'>
        <Navbar/>
        {content}

    </div>
  )
}

export default AllComponentfile