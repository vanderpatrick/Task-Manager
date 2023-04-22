import ReactModal from "react-modal";
import { useState } from "react";

const ModalForm = ({ createTask }) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const HandleOpenModal = () => {
    setmodalOpen(true);
  };
  const handleCloseModal = () => {
    setmodalOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const HandleCreateTask = (e) => {
    createTask(formData);
  };
  return (
    <>
      <button onClick={HandleOpenModal}>Create taks</button>
      <ReactModal isOpen={modalOpen} contentLabel="minimal shit">
        <button onClick={handleCloseModal}>Close modal</button>
        <form onSubmit={HandleCreateTask}>
          <label htmlFor="title">Task Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="content">Task content</label>
          <input
            type="text"
            id="body"
            name="body"
            value={formData.content}
            onChange={handleChange}
          />
          <button type="submit">Create the task</button>
        </form>
      </ReactModal>
    </>
  );
};

export default ModalForm;
