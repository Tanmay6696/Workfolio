import React from 'react'
import InputContainer from '../SmallContainer/InputContainer';

const Awardscomponent = ({formData,setFormData}) => {
  const handleAwardChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAwards = [...formData.Awards];
    updatedAwards[index][name] = value;
    setFormData({ ...formData, Awards: updatedAwards });
  };
  const removeAward = (index) => {
    const updatedAwards = formData.Awards.filter((_, awIndex) => awIndex !== index);
    setFormData({ ...formData, Awards: updatedAwards });
  };
  const addAward = () => {
    
    setFormData({
      ...formData,
      Awards: [
        ...formData.Awards,
        { awardName: "", issuingOrganization: "", issueDate: "", description: "" }
      ]
    });
  };
  return (
      <div>
        <h3>Awards</h3>
        {formData.Awards.length > 0 && formData.Awards.map((award, index) => (
          <div key={index} className="award-section">
            <InputContainer 
            label ="Award Name" 
            type="text"
              name="awardName"
              value={award.awardName}
              onChange={(e) => handleAwardChange(index, e)}
            />
            <InputContainer label ="Issuing Organization" 
              type="text"
              name="issuingOrganization"
              value={award.issuingOrganization}
              onChange={(e) => handleAwardChange(index, e)}
            />
            
            <InputContainer label ="Issue Date" 
              type="date"
              name="issueDate"
              value={award.issueDate}
              onChange={(e) => handleAwardChange(index, e)}
            />
            
            <InputContainer label ="Description" 
              type="text"
              name="description"
              value={award.description}
              onChange={(e) => handleAwardChange(index, e)}
            />
            

            {formData.Awards.length > 1 && (
              <button type="button" onClick={() => removeAward(index)}>
                Remove Award
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addAward}>
          Add Award
        </button>
      </div>
  )
}

export default Awardscomponent