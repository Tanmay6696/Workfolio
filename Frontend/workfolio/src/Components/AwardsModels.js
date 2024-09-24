import React, { useState ,useEffect} from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import axios from 'axios';

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
const EditAwardsModel = ({index}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [awardName, setAwardName] = useState('');
  const [issuingOrganization, setIssuingOrganization] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [description, setDescription] = useState('');
  


  const awardsInfo = useSelector((state) => state?.userdata?.userdata?.awards?.[index]);
  console.log("awardsInforrrrrrrrrrr  ",awardsInfo);

  useEffect(() => {

    if (awardsInfo) {
      console.log("achievementInfo.title",awardsInfo.awardName);
      
      setAwardName(awardsInfo.awardName);
    //   console.log("instituteName" ,instituteName ," ");
    setIssuingOrganization(awardsInfo.issuingOrganization);
    setIssueDate(awardsInfo.issueDate);
    setDescription(awardsInfo.description);
    
      
      openModal();
    }
  }, [awardsInfo]);

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
    const updateAward = {
      "awardId": "669cb78f3066dd02d47e2088", // Replace with the actual project ID you want to update
      "awardName": awardName,
      "issuingOrganization": issuingOrganization,
      "issueDate": issueDate,
      "description": description
    };
  
    // JWT Token
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlM2M2N2ZkZi0xYWYxLTQ0ZWUtYTU2OS1iMGI5MDg3NzNkYmEiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJmdWxsTmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzI3MDI4ODEwLCJleHAiOjE3MjcxMTUyMTB9.D-TFJbw8FQokUz9shLl6VQY3VRWmcnrrmzA3R61WJmk";
  
    try {
      // Make the API request
      const response = await axios.post(
        'http://localhost:3000/api/v1/users/tanmay117@example.com//awardsupdate',
        updateAward,
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
    contentLabel="Edit Award"
  >
    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Award</h2>
    <button onClick={closeModal}>Close</button>
    <form onSubmit={savetheChanges}>
  <input
    type="text"
    id="awardName"
    maxLength="100"
    placeholder="Enter award name"
    value={awardName}
    onChange={(e) => setAwardName(e.target.value)}
  />
  <input
    type="text"
    id="issuingOrganization"
    placeholder="Enter issuing organization"
    value={issuingOrganization}
    onChange={(e) => setIssuingOrganization(e.target.value)}
  />
  <input
    type="date"
    id="issueDate"
    placeholder="Enter issue date"
    value={issueDate}
    onChange={(e) => setIssueDate(e.target.value)}
  />
  <textarea
    id="description"
    placeholder="Enter award description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
  <button type="submit">Save Changes</button>
</form>

  </Modal>
</div>


  );
};

export default EditAwardsModel;
