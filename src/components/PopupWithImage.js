import React from 'react';

function PopupWithImage(props) {
    const {card, isOpen, onClose} = props;

    return (
        <div className={`modal modal_type_preview ${isOpen ? "modal_open" : ""}`}>
        <div className="modal__container modal__container_preview">
          <button
            className="modal__close-button modal__close-button_preview"
            type="reset"
            name="close"
            onClick={onClose}
          />
          <figure className="modal__image-container">
            <img className="modal__image" alt="Card Image" />
            <figcaption className="modal__image-caption" />
          </figure>
        </div>
      </div>
    )
}

export default PopupWithImage;