import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose } = props;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      name="add-card"
      title="New Place"
      buttonText="Create"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="newCardTitle"
        name="newCardTitle"
        type="text"
        className="modal__text-input modal__text-input_type_name"
        required
        placeholder="Title"
        minLength={1}
        maxLength={30}
      />
      <span id="newCardTitle-error" className="modal__error" />
      <input
        id="newCardURL"
        name="newCardURL"
        type="url"
        placeholder="Image link"
        required
        className="modal__text-input modal__text-input_type_url"
      />
      <span id="newCardURL-error" className="modal__error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;