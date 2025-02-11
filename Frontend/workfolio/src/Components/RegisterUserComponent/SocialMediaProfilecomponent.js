import React from 'react';
import InputContainer from '../SmallContainer/InputContainer';

const SocialMediaProfileComponent = ({ formData, setFormData }) => {
  const handleSocialMediaChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSocialMedia = [...formData.socialMedia];
    updatedSocialMedia[index][name] = value;
    setFormData({ ...formData, socialMedia: updatedSocialMedia });
  };

  const removeSocialMedia = (index) => {
    const updatedSocialMedia = formData.socialMedia.filter((_, smIndex) => smIndex !== index);
    setFormData({ ...formData, socialMedia: updatedSocialMedia });
  };

  const addSocialMedia = () => {
    setFormData({
      ...formData,
      socialMedia: [...formData.socialMedia, { profileName: '', profileUrl: '' }]
    });
  };

  return (
    <div>
      <h3>Social Media Profiles</h3>
      {formData.socialMedia.map((sm, index) => (
        <div key={index} className="social-media-section">
          <InputContainer
            label="Profile Name"
            name="profileName"
            value={sm.profileName}
            onChange={(e) => handleSocialMediaChange(index, e)}
          />
          <InputContainer
            label="Profile URL"
            name="profileUrl"
            value={sm.profileUrl}
            onChange={(e) => handleSocialMediaChange(index, e)}
          />
          {formData.socialMedia.length > 1 && (
            <button type="button" onClick={() => removeSocialMedia(index)}>
              Remove Social Media
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addSocialMedia}>
        Add Social Media
      </button>
    </div>
  );
};

export default SocialMediaProfileComponent;
