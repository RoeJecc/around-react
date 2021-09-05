import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const { isOpen, onClose } = props;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      name="profile"
      title="Edit Profile"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name"
        name="name"
        type="text"
        className="modal__text-input modal__text-input_type_name"
        required
        placeholder="Name"
        minLength={2}
        maxLength={40}
      />
      <span id="name-error" className="modal__error" />
      <input
        id="occupation"
        name="occupation"
        type="text"
        placeholder="About Me"
        required
        className="modal__text-input modal__text-input_type_occupation"
        minLength={2}
        maxLength={200}
      />
      <span id="occupation-error" className="modal__error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
