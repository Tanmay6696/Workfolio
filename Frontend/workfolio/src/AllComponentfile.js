import React, { useEffect, useState } from 'react'
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
  const [loading,setLoading]=useState(0);
  const [Page,setPage]=useState(1);
  const userstatus=useSelector((state)=>state.userdata.status);
  useEffect(()=>{
    console.log('Attaching scroll listener 1');
    const fetchdata=async()=>{
      if(!loading){
        
        setLoading((loading)=>!loading);
        dispatch(fetchusersdata(Page));
        setLoading((loading)=>!loading);
      }
    }
    
    fetchdata();
  },[Page]);
  
  // const infiniteScroll = () => {
  //   if (loading) return;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const clientHeight = window.innerHeight;

  //   if (scrollHeight - 200 < scrollTop + clientHeight && !loading) {
      
  //     console.log("inside infinitescroll");
      
  //     setPage(Page=>Page + 1); // Load the next page
      
      
  //   }
  // };
  useEffect(() => {
    console.log("Attaching scroll listener");
    function infiniteScrolls() {
        if (loading) return;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollHeight - 200 < scrollTop + clientHeight && !loading) {
        
        console.log("inside infinitescroll");
        
        setLoading((loading)=>!loading);
        setPage((Page)=>Page + 1);
          setLoading((loading)=>!loading);
        
        
      }
      
    }
    window.addEventListener('scroll', infiniteScrolls);

    return () => {
      window.removeEventListener('scroll', infiniteScrolls);
    };
  }, []);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   function handleMove(e) {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   }
  //   console.log("attach");
    
  //   window.addEventListener('pointermove', handleMove);
  //   return () => {
  //     console.log("deattach");
  //     window.removeEventListener('pointermove', handleMove);
  //   };
  // }, []);
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