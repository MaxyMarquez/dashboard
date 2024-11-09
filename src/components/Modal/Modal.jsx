import Button from "@components/Button/Button";
import "./Modal.css";

const Modal = ({ open, close, children }) => {
  return (
    <>
      <div className={`modal__overlay ${open ? "open" : ""}`} onClick={close}>
        <div
          className={`modal__container ${open ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Button className="modal__btn-close" onClick={close}>
            X
          </Button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
