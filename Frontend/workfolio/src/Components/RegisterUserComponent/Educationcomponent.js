import React from 'react';
import InputContainer from '../SmallContainer/InputContainer';

const EducationComponent = ({ formData, setFormData }) => {
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.educations];
    updatedEducation[index][name] = value;
    setFormData({ ...formData, educations: updatedEducation });
  };

  const removeEducation = (index) => {
    const updatedEducation = formData.educations.filter((_, eduIndex) => eduIndex !== index);
    setFormData({ ...formData, educations: updatedEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      educations: [
        ...formData.educations,
        { instituteName: '', education: '', course: '', specialization: '', courseDuration: '', gradingSystem: '' }
      ]
    });
  };

  return (
    <div>
      <h3>Education</h3>
      {formData.educations.map((edu, index) => (
        <div key={index} className="education-section">
          <InputContainer
            label="Institute Name"
            name="instituteName"
            value={edu.instituteName}
            onChange={(e) => handleEducationChange(index, e)}
          />
          <InputContainer
            label="Education"
            name="education"
            value={edu.education}
            onChange={(e) => handleEducationChange(index, e)}
          />
          <InputContainer
            label="Course"
            name="course"
            value={edu.course}
            onChange={(e) => handleEducationChange(index, e)}
          />
          <InputContainer
            label="Specialization"
            name="specialization"
            value={edu.specialization}
            onChange={(e) => handleEducationChange(index, e)}
          />
          <InputContainer
            label="Course Duration"
            name="courseDuration"
            value={edu.courseDuration}
            onChange={(e) => handleEducationChange(index, e)}
          />
          <InputContainer
            label="Grading System"
            name="gradingSystem"
            value={edu.gradingSystem}
            onChange={(e) => handleEducationChange(index, e)}
          />
          {formData.educations.length > 1 && (
            <button type="button" onClick={() => removeEducation(index)}>
              Remove Education
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
};

export default EducationComponent;