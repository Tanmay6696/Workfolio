import React from 'react';
import InputContainer from '../SmallContainer/InputContainer';

const ExperienceComponent = ({ formData, setFormData ,errors}) => {
  const removeExperience = (index) => {
    const updatedExperiences = formData.experiences.filter((_, expIndex) => expIndex !== index);
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const addExperience = () => {
    console.log(Object.keys(errors).length)
    let length_of_error=Object.keys(errors).length;
    if(length_of_error==0){
      setFormData({
        ...formData,
        experiences: [
          ...formData.experiences,
          { companyName: '', role: '', description: '', DurationFrom: '', DurationTo: '' },
        ],
      });
    }
    
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][name] = value;
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  return (
    <div>
      <h3>Experiences</h3>
      {formData.experiences.map((experience, index) => (
        <div key={index} className="experience-section">
          <InputContainer
            label="Company Name"
            name="companyName"
            value={experience.companyName}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <InputContainer
            label="Role"
            name="role"
            value={experience.role}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <InputContainer
            label="Description"
            name="description"
            type="textarea"
            value={experience.description}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <InputContainer
            label="Duration From"
            name="DurationFrom"
            type="date"
            value={experience.DurationFrom}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <InputContainer
            label="Duration To"
            name="DurationTo"
            type="date"
            value={experience.DurationTo}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          {formData.experiences.length > 1 && (
            <button type="button" onClick={() => removeExperience(index)}>
              Remove Experience
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addExperience}>Add Experience</button>
    </div>
  );
};

export default ExperienceComponent;
