import React, { useState ,useEffect} from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Constant from '../Constant.js';

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
const Editeducationmodel = ({index}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [instituteName, setInstituteName] = useState('');
  const [course, setCourse] = useState('');
  const [education, setEducation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [gradingSystem, setGradingSystem] = useState('');


  const educationInfo = useSelector((state) => state?.userdata?.userdata?.educations?.[index]);
  console.log("educationInforr  ",educationInfo);

  useEffect(() => {
    // console.log("educationInforrdadsdadjafgjadjadjsj  ",educationInfo);

    if (educationInfo) {
      console.log("educationInfo.title",educationInfo.instituteName);
      
      setInstituteName(educationInfo.instituteName);
    //   console.log("instituteName" ,instituteName ," ");
      setEducation(educationInfo.education);
      setCourse(educationInfo.course);
      setSpecialization(educationInfo.specialization);
      setCourseDuration(educationInfo.courseDuration);
      setGradingSystem(educationInfo.gradingSystem);
      
      openModal();
    }
  }, [educationInfo]);

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
    const updateEducation = {
      "educationId": "669cb78f3066dd02d47e2084", // Replace with the actual project ID you want to update
      "instituteName": instituteName,
      "course": course,
      "education": education,
      "specialization": specialization,
      "courseDuration": courseDuration,
      "gradingSystem": gradingSystem
    };
  
    // JWT Token
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlM2M2N2ZkZi0xYWYxLTQ0ZWUtYTU2OS1iMGI5MDg3NzNkYmEiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJmdWxsTmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzI3MDI4ODEwLCJleHAiOjE3MjcxMTUyMTB9.D-TFJbw8FQokUz9shLl6VQY3VRWmcnrrmzA3R61WJmk";
  
    try {
      // Make the API request
      const response = await axios.post(
        `${Constant}/api/v1/users/tanmay117@example.com/educationupdate`,
        updateEducation,
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
    contentLabel="Edit Education "
  >
    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Institute</h2>
    <button onClick={closeModal}>Close</button>
    <form onSubmit={savetheChanges}>
      <input
        type="text"
        id="instituteName"
        maxLength="100"
        placeholder="Enter institute name"
        value={instituteName}
        onChange={(e) => setInstituteName(e.target.value)}
      />
      <input
        type="text"
        id="course"
        placeholder="Enter course name"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <input
        type="text"
        id="education"
        placeholder="Enter education level"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <textarea
        id="specialization"
        placeholder="Enter specialization"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      />
      <input
        type="text"
        id="courseDuration"
        placeholder="Enter course duration"
        value={courseDuration}
        onChange={(e) => setCourseDuration(e.target.value)}
      />
      <input
        type="text"
        id="gradingSystem"
        placeholder="Enter grading system"
        value={gradingSystem}
        onChange={(e) => setGradingSystem(e.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
  </Modal>
</div>

  );
};

export default Editeducationmodel;
