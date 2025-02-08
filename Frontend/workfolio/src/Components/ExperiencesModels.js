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
const EditExperienceModel = ({index}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [DurationFrom, setDurationFrom] = useState('');
  const [DurationTo, setDurationTo] = useState('');
  


  const experienceInfo = useSelector((state) => state?.userdata?.userdata?.experiences?.[index]);
  console.log("experienceInforrrrr  ",experienceInfo);

  useEffect(() => {
    // console.log("educationInforrdadsdadjafgjadjadjsj  ",educationInfo);

    if (experienceInfo) {
      console.log("experienceInfo.title",experienceInfo.companyName);
      
      setCompanyName(experienceInfo.companyName);
    //   console.log("instituteName" ,instituteName ," ");
      setRole(experienceInfo.role);
      setDescription(experienceInfo.description);
      setDurationFrom(experienceInfo.DurationFrom);
      setDurationTo(experienceInfo.DurationTo);
      
      openModal();
    }
  }, [experienceInfo]);

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
    const updateExperience = {
      "experienceId": "669cb78f3066dd02d47e207c", // Replace with the actual project ID you want to update
      "companyName": companyName,
      "role": role,
      "description": description,
      "DurationFrom": DurationFrom,
      "DurationTo": DurationTo
    };
  
    // JWT Token
    const token = localStorage.getItem('accessToken');
  
    try {
      // Make the API request
      const response = await axios.post(
        `${Constant}/api/v1/users/tanmay117@example.com/Experienceupdate`,
        updateExperience,
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
    contentLabel="Edit Experience "
  >
    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Institute</h2>
    <button onClick={closeModal}>Close</button>
    <form onSubmit={savetheChanges}>
      <input
        type="text"
        id="companyName"
        maxLength="100"
        placeholder="Enter Company name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        type="text"
        id="role"
        placeholder="Enter role name"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="text"
        id="description"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        id="DurationFrom"
        placeholder="Enter DurationFrom"
        value={DurationFrom}
        onChange={(e) => setDurationFrom(e.target.value)}
      />
      <input
        type="text"
        id="DurationTo"
        placeholder="Enter DurationTo"
        value={DurationTo}
        onChange={(e) => setDurationTo(e.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
  </Modal>
</div>

  );
};

export default EditExperienceModel;
