import React from 'react';
import InputContainer from '../SmallContainer/InputContainer';

const ProjectsComponent = ({ formData, setFormData }) => {
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index][name] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const removeProject = (index) => {
    const updatedProjects = formData.projects.filter((_, projIndex) => projIndex !== index);
    setFormData({ ...formData, projects: updatedProjects });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        { title: '', description: '', url: '', durationFrom: '', durationTo: '' },
      ],
    });
  };

  return (
    <div>
      <h3>Projects</h3>
      {formData.projects.map((project, index) => (
        <div key={index} className="project-section">
          <InputContainer
            label="Title"
            name="title"
            value={project.title}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <InputContainer
            label="Description"
            name="description"
            type="textarea"
            value={project.description}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <InputContainer
            label="Project URL"
            name="url"
            value={project.url}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <InputContainer
            label="Duration From"
            name="durationFrom"
            type="date"
            value={project.durationFrom}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <InputContainer
            label="Duration To"
            name="durationTo"
            type="date"
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
  );
};

export default ProjectsComponent;
