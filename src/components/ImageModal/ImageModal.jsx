import Modal from "react-modal";
import { useEffect } from "react";
Modal.setAppElement("#root");
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    const handleKeyDownClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDownClose);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDownClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css["overlay"]}
      shouldCloseOnOverlayClick={true}
      className={css["modal"]}
    >
      <div onClick={handleOverlayClick} className={css["inf-container"]}>
        <img
          className={css["modal-img"]}
          src={image ? image.modalImg : {}}
          alt={image ? image.altDescr : {}}
        />
        <p style={{ textAlign: "center" }}>{image ? image.altDescr : ""}</p>
      </div>
    </Modal>
  );
};
export default ImageModal;
