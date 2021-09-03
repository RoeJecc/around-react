import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const { isOpen, onClose } = props;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Change Profile Picture"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="newAvatarURL"
        name="newAvatarURL"
        type="url"
        required
        placeholder="Image link"
        className="modal__text-input modal__text-input_type_url"
      />
      <span id="newAvatarURL-error" className="modal__error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
