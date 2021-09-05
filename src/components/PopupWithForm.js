import React from "react";

function PopupWithForm(props) {
  const { name, isOpen, title, onClose, buttonText, children } = props;

  return (
    <div
      className={`modal modal_type_${props.name} ${isOpen ? "modal_open" : ""}`}
      onClick={onClose}
    >
      <div className="modal__container">
        <form name="profile" className={`modal__profile modal__${props.name}`}>
          <h3 className="modal__title">{title}</h3>
          {children}
          <button className="modal__form-submit" type="submit">
            {buttonText}
          </button>
          <button
            className="modal__close-button modal__close-button_profile"
            type="reset"
            name="close"
            onClick={onClose}
          />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
