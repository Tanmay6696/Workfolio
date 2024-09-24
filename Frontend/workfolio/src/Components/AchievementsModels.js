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
const EditAchievementsModel = ({index}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [date_awarded, setDate_awarded] = useState('');
  const [category, setCategory] = useState('');
  const [issuer, setIssuer] = useState('');
  const [certificate_url, setCertificate_url] = useState('');
  const [level, setLevel] = useState('');
  const [public_visibility, setPublic_visibility] = useState('');


  const achievementInfo = useSelector((state) => state?.userdata?.userdata?.achievements?.[index]);
  console.log("achievementInforrrrr  ",achievementInfo);

  useEffect(() => {
    // console.log("educationInforrdadsdadjafgjadjadjsj  ",educationInfo);

    if (achievementInfo) {
      console.log("achievementInfo.title",achievementInfo.description);
      
      setDescription(achievementInfo.description);
    //   console.log("instituteName" ,instituteName ," ");
      setTitle(achievementInfo.title);
      setDate_awarded(achievementInfo.date_awarded);
      setCategory(achievementInfo.category);
      setIssuer(achievementInfo.issuer);
      setCertificate_url(achievementInfo.certificate_url);
      setLevel(achievementInfo.level);
      setPublic_visibility(achievementInfo.public_visibility);
      
      openModal();
    }
  }, [achievementInfo]);

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
    const updateAchievement = {
      "achievementId": "669cb78f3066dd02d47e2088", // Replace with the actual project ID you want to update
      "description": description,
      "title": title,
      "date_awarded": date_awarded,
      "category": category,
      "issuer": issuer,
      "certificate_url": certificate_url,
      "level": level,
      "public_visibility": public_visibility
    };
  
    // JWT Token
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlM2M2N2ZkZi0xYWYxLTQ0ZWUtYTU2OS1iMGI5MDg3NzNkYmEiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJmdWxsTmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzI3MTcxNzU5LCJleHAiOjE3MjcyNTgxNTl9.y9oB5ghRMDCdOhT6teddhOmmJykojA2jpnigDHMGdsI";
  
    try {
      // Make the API request
      const response = await axios.post(
        'http://localhost:3000/api/v1/users/tanmay117@example.com/achievementsupdate',
        updateAchievement,
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
    contentLabel="Edit Achievement"
  >
    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Achievement</h2>
    <button onClick={closeModal}>Close</button>
    <form onSubmit={savetheChanges}>
      <input
        type="text"
        id="title"
        maxLength="100"
        placeholder="Enter achievement title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        id="description"
        placeholder="Enter achievement description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        id="date_awarded"
        placeholder="Enter date awarded"
        value={date_awarded}
        onChange={(e) => setDate_awarded(e.target.value)}
      />
      <textarea
        id="category"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        id="issuer"
        placeholder="Enter issuer"
        value={issuer}
        onChange={(e) => setIssuer(e.target.value)}
      />
      <input
        type="text"
        id="certificate_url"
        placeholder="Enter certificate URL"
        value={certificate_url}
        onChange={(e) => setCertificate_url(e.target.value)}
      />
      <input
        type="text"
        id="level"
        placeholder="Enter achievement level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />
      <input
        type="text"
        id="public_visibility"
        placeholder="Enter public visibility status"
        value={public_visibility}
        onChange={(e) => setPublic_visibility(e.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
  </Modal>
</div>


  );
};

export default EditAchievementsModel;
