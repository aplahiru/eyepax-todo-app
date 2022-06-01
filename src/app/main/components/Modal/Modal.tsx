import React from "react";
import "../../../styles/Modal.css";
import close from "../../../assets/close.png";

export interface postProps {
  toggleModal: any;
  itemDetails: any;
}
const Modal: React.FunctionComponent<postProps> = ({
  toggleModal,
  itemDetails,
}) => {
  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className="title-row-style">
          <h2>Todo Details</h2>
          <button className="close-modal" onClick={toggleModal}>
            <img
              style={{ width: "32px", height: "32px" }}
              src={close}
              alt="close"
            />
          </button>
        </div>
        <div className="paragraph-row-style">
          <p className="paragraph-header-style">Title: </p>
          <p>{itemDetails.title}</p>
        </div>
        <div className="paragraph-row-style">
          <p className="paragraph-header-style">UserId:</p>
          <p>{itemDetails.userId}</p>
        </div>
        <div className="paragraph-row-style">
          {" "}
          <p className="paragraph-header-style">Id:</p>
          <p>{itemDetails.id}</p>
        </div>
        <div className="paragraph-row-style">
          <p className="paragraph-header-style">Completed:</p>
          <p>
            {itemDetails.completed ? (
              <div className="completed-style">Completed</div>
            ) : (
              <div className="not-completed-style">Not Completed</div>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
