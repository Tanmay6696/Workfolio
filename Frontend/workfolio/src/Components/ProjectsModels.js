import React, { useState ,useEffect} from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Constant from '../Constant';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    width: '50%',
    padding: '60px 50px 40px',
    height: '80%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Editmodel = ({index}) => {
  console.log("index inside the Editmodel",index);
  let subtitle;
  const [ProjectId, setProjectId] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [ID, setID] = useState('');
  const [email, setEmail] = useState('');

  const ProjectInfo = useSelector((state) => state?.userdata?.userdata);
  console.log("projectInforr  ",ProjectInfo);
  useEffect(() => {
    console.log("ProjectInfo",ProjectInfo);
    if (ProjectInfo.length) {
      console.log("ProjectInfo inside",ProjectInfo);
      setEmail(ProjectInfo.email);
      const projectInfo=ProjectInfo?.projects[index]
      if(projectInfo){
        console.log("projectInfo",projectInfo.index,ProjectInfo);
        console.log("projectInfo.title",projectInfo.title);
        setProjectId(projectInfo._id);
        setTitle(projectInfo.title);
        setDateFrom(projectInfo.durationFrom);
        setDateTo(projectInfo.durationTo);
        setDescription(projectInfo.description);
        setUrl(projectInfo.url);
        openModal();
      }
      
    }
  }, [ProjectInfo,index]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';}

  function closeModal() {
    setIsOpen(false);
  }
  const savetheChanges = async (e) => {
    e.preventDefault();
    const updateProject = {
      "projectId": ProjectId, // Replace with the actual project ID you want to update
      "title": title,
      "description": description,
      "url": url,
      "durationFrom": dateFrom,
      "durationTo": dateTo
    };
  
    // JWT Token
    const token = localStorage.getItem('accessToken');

  
    try {
      // Make the API request
      const response = await axios.post(
        `${Constant}/api/v1/users/tanmay117@example.com/projectsupdate`,
        updateProject,
        {
          headers: {
            'Authorization': `${token}`, // Added 'Bearer' to the token for proper authorization
            'Content-Type': 'application/json' // Ensures the content type is set correctly
          }
        }
      );
      if (response.status === 200) {
        alert("true",response.data); 
        closeModal();       
      } else {
        alert("false",response.data);        
      }
    } catch (error) {
      // Handle errors
      console.error('Error during API call:', error.response ? error.response.data : error.message);
    }
  };
  
  
  

  return (
    <div>
      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Project Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Project</h2>
        <button onClick={closeModal}>Close</button>
        <form onSubmit={savetheChanges}>
          <input
            type="text"
            id="projectTitle"
            maxLength="100"
            placeholder="Enter project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="dateFrom"
            placeholder="From Date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
          <input
            type="text"
            id="dateTo"
            placeholder="To Date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
          <textarea
            id="description"
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button 
            type="submit" 
            
            >Save Changes</button>
        </form>
      </Modal>
    </div>
  );
};

export default Editmodel;
