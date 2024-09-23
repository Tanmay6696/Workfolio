import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    summary: "",
    password: "",
    profilePicture: "",
    introVideo: "",
    resume: "",
    experiences: [
      {
        companyName: "",
        role: "",
        description: "",
        DurationFrom: "",
        DurationTo: "",
      }
    ],
    achievements: [
      {
        description: "",
        title: "",
        date_awarded: "",
        category: "",
        issuer: "",
        certificate_url: "",
        level: "",
        public_visibility: "",
      }
    ],
    awards: [
      {
        awardName: "",
        issuingOrganization: "",
        issueDate: "",
        description: ""
      }
    ],
    codingProfiles: [
      {
        profileName: "",
        profileUrl: ""
      }
    ],
    education: [
        {
          instituteName: "",
          education: "",
          course: "",
          specialization: "",
          courseDuration: "",
          gradingSystem: ""
        }
      ],
      skills: [
        {
          skillName: "",
          proficiency: ""
        }
      ],
      socialMedia: [
        {
          profileName: "",
          profileUrl: ""
        }
      ],
      projects: [
        {
          title: "",
          description: "",
          url: "",
          durationFrom: "",
          durationTo: ""
        }
      ]
    });

  // Functions to handle changes
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][name] = value;
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const handleAchievementChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAchievement = [...formData.achievements];
    updatedAchievement[index][name] = value;
    setFormData({ ...formData, achievements: updatedAchievement });
  };

  const handleAwardChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAwards = [...formData.awards];
    updatedAwards[index][name] = value;
    setFormData({ ...formData, awards: updatedAwards });
  };

  const handleCodingProfileChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProfiles = [...formData.codingProfiles];
    updatedProfiles[index][name] = value;
    setFormData({ ...formData, codingProfiles: updatedProfiles });
  };

  // Change handlers for new sections
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...formData.skills];
    updatedSkills[index][name] = value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSocialMediaChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSocialMedia = [...formData.socialMedia];
    updatedSocialMedia[index][name] = value;
    setFormData({ ...formData, socialMedia: updatedSocialMedia });
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index][name] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  // Functions to add new fields
  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { companyName: "", role: "", description: "", DurationFrom: "", DurationTo: "" }
      ]
    });
  };

  const addAchievement = () => {
    setFormData({
      ...formData,
      achievements: [
        ...formData.achievements,
        {
          description: "",
          title: "",
          date_awarded: "",
          category: "",
          issuer: "",
          certificate_url: "",
          level: "",
          public_visibility: ""
        }
      ]
    });
  };

  const addAward = () => {
    setFormData({
      ...formData,
      awards: [
        ...formData.awards,
        { awardName: "", issuingOrganization: "", issueDate: "", description: "" }
      ]
    });
  };

  const addCodingProfile = () => {
    setFormData({
      ...formData,
      codingProfiles: [
        ...formData.codingProfiles,
        { profileName: "", profileUrl: "" }
      ]
    });
  };

  // Functions to add new fields for new sections
  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { instituteName: "", education: "", course: "", specialization: "", courseDuration: "", gradingSystem: "" }
      ]
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [
        ...formData.skills,
        { skillName: "", proficiency: "" }
      ]
    });
  };

  const addSocialMedia = () => {
    setFormData({
      ...formData,
      socialMedia: [
        ...formData.socialMedia,
        { profileName: "", profileUrl: "" }
      ]
    });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        { title: "", description: "", url: "", durationFrom: "", durationTo: "" }
      ]
    });
  };


  // Functions to remove fields
  const removeExperience = (index) => {
    const updatedExperiences = formData.experiences.filter((_, expIndex) => expIndex !== index);
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const removeAchievement = (index) => {
    const updatedAchievements = formData.achievements.filter((_, achIndex) => achIndex !== index);
    setFormData({ ...formData, achievements: updatedAchievements });
  };

  const removeAward = (index) => {
    const updatedAwards = formData.awards.filter((_, awIndex) => awIndex !== index);
    setFormData({ ...formData, awards: updatedAwards });
  };

  const removeCodingProfile = (index) => {
    const updatedProfiles = formData.codingProfiles.filter((_, cpIndex) => cpIndex !== index);
    setFormData({ ...formData, codingProfiles: updatedProfiles });
  };

  // Functions to remove fields for new sections
  const removeEducation = (index) => {
    const updatedEducation = formData.education.filter((_, eduIndex) => eduIndex !== index);
    setFormData({ ...formData, education: updatedEducation });
  };

  const removeSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, skillIndex) => skillIndex !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const removeSocialMedia = (index) => {
    const updatedSocialMedia = formData.socialMedia.filter((_, smIndex) => smIndex !== index);
    setFormData({ ...formData, socialMedia: updatedSocialMedia });
  };

  const removeProject = (index) => {
    const updatedProjects = formData.projects.filter((_, projIndex) => projIndex !== index);
    setFormData({ ...formData, projects: updatedProjects });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    // Add your API call logic here to submit the form
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Other user details fields */}
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
      </div>

      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label>Summary:</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
        />
      </div>

      {/* Experience section */}
      <div>
        <h3>Experiences</h3>
        {formData.experiences.map((experience, index) => (
          <div key={index} className="experience-section">
            <label>Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={experience.companyName}
              onChange={(e) => handleExperienceChange(index, e)}
            />

            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={experience.role}
              onChange={(e) => handleExperienceChange(index, e)}
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={experience.description}
              onChange={(e) => handleExperienceChange(index, e)}
            />

            <label>Duration From:</label>
            <input
              type="date"
              name="DurationFrom"
              value={experience.DurationFrom}
              onChange={(e) => handleExperienceChange(index, e)}
            />

            <label>Duration To:</label>
            <input
              type="date"
              name="DurationTo"
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
        <button type="button" onClick={addExperience}>
          Add Experience
        </button>
      </div>

      {/* Achievements section */}
      <div>
        <h3>Achievements</h3>
        {formData.achievements.map((achievement, index) => (
          <div key={index} className="achievement-section">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={achievement.title}
              onChange={(e) => handleAchievementChange(index, e)}
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={achievement.description}
              onChange={(e) => handleAchievementChange(index, e)}
            />

            <label>Date Awarded:</label>
            <input
              type="date"
              name="date_awarded"
              value={achievement.date_awarded}
              onChange={(e) => handleAchievementChange(index, e)}
            />

            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={achievement.category}
              onChange={(e) => handleAchievementChange(index, e)}
            />

            <label>Issuer:</label>
            <input
              type="text"
              name="issuer"
              value={achievement.issuer}
              onChange={(e) => handleAchievementChange(index, e)}
            />

            <label>Certificate URL:</label>
            <input
              type="text"
              name="certificate_url"
              value={achievement.certificate_url}
              onChange={(e) => handleAchievementChange(index, e)}
            />

            <label>Level:</label>
            <input
              type="text"
              name="level"
              value={achievement.level}
              onChange={(e) => handleAchievementChange(index, e)}
            />

            <label>Public Visibility:</label>
            <input
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

      {/* Awards section */}
      <div>
        <h3>Awards</h3>
        {formData.awards.map((award, index) => (
          <div key={index} className="award-section">
            <label>Award Name:</label>
            <input
              type="text"
              name="awardName"
              value={award.awardName}
              onChange={(e) => handleAwardChange(index, e)}
            />

            <label>Issuing Organization:</label>
            <input
              type="text"
              name="issuingOrganization"
              value={award.issuingOrganization}
              onChange={(e) => handleAwardChange(index, e)}
            />

            <label>Issue Date:</label>
            <input
              type="date"
              name="issueDate"
              value={award.issueDate}
              onChange={(e) => handleAwardChange(index, e)}
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={award.description}
              onChange={(e) => handleAwardChange(index, e)}
            />

            {formData.awards.length > 1 && (
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

      {/* Coding Profiles section */}
      <div>
        <h3>Coding Profiles</h3>
        {formData.codingProfiles.map((profile, index) => (
          <div key={index} className="coding-profile-section">
            <label>Profile Name:</label>
            <input
              type="text"
              name="profileName"
              value={profile.profileName}
              onChange={(e) => handleCodingProfileChange(index, e)}
            />

            <label>Profile URL:</label>
            <input
              type="text"
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

      {/* Education section */}
      <div>
        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index} className="education-section">
            <label>Institute Name:</label>
            <input
              type="text"
              name="instituteName"
              value={edu.instituteName}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label>Education:</label>
            <input
              type="text"
              name="education"
              value={edu.education}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={edu.course}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label>Specialization:</label>
            <input
              type="text"
              name="specialization"
              value={edu.specialization}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label>Course Duration:</label>
            <input
              type="text"
              name="courseDuration"
              value={edu.courseDuration}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label>Grading System:</label>
            <input
              type="text"
              name="gradingSystem"
              value={edu.gradingSystem}
              onChange={(e) => handleEducationChange(index, e)}
            />

            {formData.education.length > 1 && (
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

      {/* Skills section */}
      <div>
        <h3>Skills</h3>
        {formData.skills.map((skill, index) => (
          <div key={index} className="skill-section">
            <label>Skill Name:</label>
            <input
              type="text"
              name="skillName"
              value={skill.skillName}
              onChange={(e) => handleSkillChange(index, e)}
            />

            <label>Proficiency:</label>
            <input
              type="text"
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

      {/* Social Media section */}
      <div>
        <h3>Social Media Profiles</h3>
        {formData.socialMedia.map((sm, index) => (
          <div key={index} className="social-media-section">
            <label>Profile Name:</label>
            <input
              type="text"
              name="profileName"
              value={sm.profileName}
              onChange={(e) => handleSocialMediaChange(index, e)}
            />

            <label>Profile URL:</label>
            <input
              type="text"
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

      {/* Projects section */}
      <div>
        <h3>Projects</h3>
        {formData.projects.map((project, index) => (
          <div key={index} className="project-section">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={(e) => handleProjectChange(index, e)}
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, e)}
            />

            <label>Project URL:</label>
            <input
              type="text"
              name="url"
              value={project.url}
              onChange={(e) => handleProjectChange(index, e)}
            />

            <label>Duration From:</label>
            <input
              type="date"
              name="durationFrom"
              value={project.durationFrom}
              onChange={(e) => handleProjectChange(index, e)}
            />

            <label>Duration To:</label>
            <input
              type="date"
              name="durationTo"
              value={project.durationTo}
              onChange={(e) => handleProjectChange(index, e)}
            />

            {formData.projects.length > 1 && (
              <button type="button" onClick={() => removeProject(index)}>
                Remove Project
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addProject}>
          Add Project
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;