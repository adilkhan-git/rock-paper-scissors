import React from "react";
import ReactDOM from "react-dom";
import close from "../../images/icon-close.svg";
import rules from "../../images/image-rules.svg";

type IProps = {
  toggle: () => void;
};

const modalRoot = document.getElementById("modal");

const Modal = (props: IProps) => {
  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={props.toggle}>
            <img src={close} alt="Close" srcSet="" />
          </button>
        </div>
        <img src={rules} alt="Rules" srcSet="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
