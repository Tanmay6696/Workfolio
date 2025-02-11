import React from 'react';
import InputContainer from '../SmallContainer/InputContainer';

const CodingProfileComponent = ({ formData, setFormData }) => {
  const handleCodingProfileChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProfiles = [...formData.codingProfiles];
    updatedProfiles[index][name] = value;
    setFormData({ ...formData, codingProfiles: updatedProfiles });
  };

  const removeCodingProfile = (index) => {
    const updatedProfiles = formData.codingProfiles.filter((_, cpIndex) => cpIndex !== index);
    setFormData({ ...formData, codingProfiles: updatedProfiles });
  };

  const addCodingProfile = () => {
    setFormData({
      ...formData,
      codingProfiles: [
        ...formData.codingProfiles,
        { profileName: '', profileUrl: '' }
      ]
    });
  };

  return (
    <div>
      <h3>Coding Profiles</h3>
      {formData.codingProfiles.map((profile, index) => (
        <div key={index} className="coding-profile-section">
          <InputContainer
            label="Profile Name"
            name="profileName"
            value={profile.profileName}
            onChange={(e) => handleCodingProfileChange(index, e)}
          />
          <InputContainer
            label="Profile URL"
            name="profileUrl"
            value={profile.profileUrl}
            onChange={(e) => handleCodingProfileChange(index, e)}
          />
          {formData.codingProfiles.length > 1 && (
            <button type="button" onClick={() => removeCodingProfile(index)}>
              Remove Coding Profile
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addCodingProfile}>
        Add Coding Profile
      </button>
    </div>
  );
};

export default CodingProfileComponent;
