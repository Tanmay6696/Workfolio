import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    width: '50%',
    padding: '60px 50px 40px',
    height: '80%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const Editmodel = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [description, setDescription] = useState('');

  const projectInfo = useSelector((state) => state?.userdata?.userdata?.projects?.[0]);
  console.log("projectInfo",projectInfo);
  useState(() => {
    if (projectInfo) {
      console.log("projectInfo.title",projectInfo.title);
      
      setTitle(projectInfo.title);
      setDateFrom(projectInfo.durationFrom || '');
      setDateTo(projectInfo.durationTo || '');
      setDescription(projectInfo.description || '');
    }
  }, [projectInfo]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  console.log("title" ,title ," ");
  

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Project Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Project</h2>
        <button onClick={closeModal}>Close</button>
        <form>
          <input
            type="text"
            id="projectTitle"
            maxLength="100"
            placeholder="Enter project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="dateFrom"
            placeholder="From Date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
          <input
            type="text"
            id="dateTo"
            placeholder="To Date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
          <textarea
            id="description"
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Save Changes</button>
        </form>
      </Modal>
    </div>
  );
};

export default Editmodel;
