import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginUserProfile = () => {
  const [userdata, setUserdata] = useState([]); // Initialize as an empty array
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5MTcwNmMxNC02NWI5LTQ0ZDYtOThjYy04ZWYyZWVlOTRjOTYiLCJlbWFpbCI6ImphbmVkb2VAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImphbmVkb2UiLCJmdWxsTmFtZSI6IkphbmUgRG9lIiwiaWF0IjoxNzIzOTAyNTM4LCJleHAiOjE3MjM5ODg5Mzh9.32JgS3IeI4A9IoQL14D_2NnR1WdOd9jQl8lR3qSE0XM";

  const getdata = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/johndoe@example.com/Userdetails', {}, {
        headers: {
          'Authorization': `${token}`
        }
      });

      // Update the userdata array with the fetched data
      setUserdata(prevData => [...prevData, response.data]); 
      console.log("response from getUserdata: ", response.data);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  // Use useEffect to call getdata on component mount
  useEffect(() => {
    getdata();
  }, []); // Empty dependency array to run only on mount

  return (
    <div>
      {userdata.length === 0 ? (
        <div>Loading...</div>
      ) : (
        userdata.map((user, index) => (
          <div key={index}>
            <h1>{user.fullName}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Summary:</strong> {user.summary}</p>
            <img src={user.profilePicture} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
            <div>
              <h2>Skills</h2>
              <ul>
                {user.skills.map(skillId => (
                  <li key={skillId}>{skillId}</li> // Replace with actual skill name if available
                ))}
              </ul>
            </div>
            <div>
              <h2>Projects</h2>
              <ul>
                {user.projects.map(projectId => (
                  <li key={projectId}>{projectId}</li> // Replace with actual project name if available
                ))}
              </ul>
            </div>
            <div>
              <h2>Ratings</h2>
              <ul>
                {user.ratings.map(rating => (
                  <li key={rating._id}>Score: {rating.score}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Comments</h2>
              <ul>
                {user.comments.map(comment => (
                  <li key={comment._id}>{comment.content}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default LoginUserProfile;
