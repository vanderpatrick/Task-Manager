import ReactModal from "react-modal";
import { useState } from "react";

const ModalForm = () => {
    const [modalOpen, setmodalOpen] = useState(false);
    const HandleOpenModal = () => {
      setmodalOpen(true);
    };
    const handleCloseModal = () => {
      setmodalOpen(false);
    };
    return (
      <>
        <button onClick={HandleOpenModal}>Create taks</button>
        <ReactModal isOpen={modalOpen} contentLabel="minimal shit">
          <button onClick={handleCloseModal}>Close modal</button>
        </ReactModal>
      </>
    );
  };
  

export default ModalForm;
