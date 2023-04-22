import ReactModal from "react-modal";
import { useState } from "react";

const ModalFormEdit = ({ EditTask }) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const HandleOpenModal = () => {
    setmodalOpen(true);
  };
  const handleCloseModal= () => {
    setmodalOpen(false)
  }
  return (
    <>
      <button onClick={HandleOpenModal}>Edit taks</button>
      <ReactModal isOpen={modalOpen} contentLabel="minimal shit">
        <button onClick={handleCloseModal}>Close</button>

      </ReactModal>
    </>
  );
};

export default ModalFormEdit;
