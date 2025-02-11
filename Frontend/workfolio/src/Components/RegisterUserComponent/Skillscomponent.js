import React from 'react';
import InputContainer from '../SmallContainer/InputContainer';

const SkillsComponent = ({ formData, setFormData }) => {
  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...formData.skills];
    updatedSkills[index][name] = value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const removeSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, skillIndex) => skillIndex !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { skillName: '', proficiency: '' }]
    });
  };

  return (
    <div>
      <h3>Skills</h3>
      {formData.skills.map((skill, index) => (
        <div key={index} className="skill-section">
          <InputContainer
            label="Skill Name"
            name="skillName"
            value={skill.skillName}
            onChange={(e) => handleSkillChange(index, e)}
          />
          <InputContainer
            label="Proficiency"
            name="proficiency"
            value={skill.proficiency}
            onChange={(e) => handleSkillChange(index, e)}
          />
          {formData.skills.length > 1 && (
            <button type="button" onClick={() => removeSkill(index)}>
              Remove Skill
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addSkill}>
        Add Skill
      </button>
    </div>
  );
};

export default SkillsComponent;
