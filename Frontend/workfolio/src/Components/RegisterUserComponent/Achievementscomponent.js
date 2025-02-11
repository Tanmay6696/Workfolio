import React from 'react';
import InputContainer from '../SmallContainer/InputContainer';

const AchievementsComponent = ({ formData, setFormData }) => {
  const addAchievement = () => {
    setFormData({
      ...formData,
      achievements: [
        ...formData.achievements,
        {
          description: '',
          title: '',
          date_awarded: '',
          category: '',
          issuer: '',
          certificate_url: '',
          level: '',
          public_visibility: false,
        },
      ],
    });
  };

  const handleAchievementChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedAchievements = [...formData.achievements];
    updatedAchievements[index][name] = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, achievements: updatedAchievements });
  };

  const removeAchievement = (index) => {
    const updatedAchievements = formData.achievements.filter((_, achIndex) => achIndex !== index);
    setFormData({ ...formData, achievements: updatedAchievements });
  };

  return (
    <div>
      <h3>Achievements</h3>
      {formData.achievements.map((achievement, index) => (
        <div key={index} className="achievement-section">
          <InputContainer
            label="Title"
            type="text"
            name="title"
            value={achievement.title}
            onChange={(e) => handleAchievementChange(index, e)}
          />
          <InputContainer
            label="Description"
            type="textarea"
            name="description"
            value={achievement.description}
            onChange={(e) => handleAchievementChange(index, e)}
          />
          <InputContainer
            label="Date Awarded"
            type="date"
            name="date_awarded"
            value={achievement.date_awarded}
            onChange={(e) => handleAchievementChange(index, e)}
          />
          <InputContainer
            label="Category"
            type="text"
            name="category"
            value={achievement.category}
            onChange={(e) => handleAchievementChange(index, e)}
          />
          <InputContainer
            label="Issuer"
            type="text"
            name="issuer"
            value={achievement.issuer}
            onChange={(e) => handleAchievementChange(index, e)}
          />
          <InputContainer
            label="Certificate URL"
            type="text"
            name="certificate_url"
            value={achievement.certificate_url}
            onChange={(e) => handleAchievementChange(index, e)}
          />
          <InputContainer
            label="Level"
            type="text"
            name="level"
            value={achievement.level}
            onChange={(e) => handleAchievementChange(index, e)}
          />
          <InputContainer
            label="Public Visibility"
            type="checkbox"
            name="public_visibility"
            checked={achievement.public_visibility}
            onChange={(e) => handleAchievementChange(index, e)}
          />

          {formData.achievements.length > 1 && (
            <button type="button" onClick={() => removeAchievement(index)}>
              Remove Achievement
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addAchievement}>
        Add Achievement
      </button>
    </div>
  );
};

export default AchievementsComponent;
