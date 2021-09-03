import React, { useEffect, useState } from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import EditAvatarPopup from "./EditAvatarPopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import PopupWithImage from "./PopupWithImage.js";

import api from "../utils/api.js";

function App() {
  const [editAvatarOpen, setEditAvatarOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [addPlaceOpen, setAddPlaceOpen] = useState(false);
  // const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [cards, setCards] = useState([])

  React.useEffect(() => {
    api.getInitialCards()
    .then((res) => {
        setCards(res)
    })
    .catch(err => console.log(err));
})



  function handleEditAvatarClick() {
    setEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceOpen(true);
  }

  // handleCardClick(card) {
  //   setImagePopupOpen(true);
  // }

  function closePopups() {
    setEditAvatarOpen(false);
    setEditProfileOpen(false);
    setAddPlaceOpen(false);
  }

  function handleClosePopups(e) {
    if (e.target !== e.currentTarget) return;
    closePopups();
  }

  

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        cards={cards}
      />
      <Footer />
      <EditAvatarPopup isOpen={editAvatarOpen} onClose={handleClosePopups} />
      <EditProfilePopup isOpen={editProfileOpen} onClose={handleClosePopups} />
      <AddPlacePopup isOpen={addPlaceOpen} onClose={handleClosePopups} />

      <PopupWithImage />

      
      <div className="modal modal_type_delete-card">
        <div className="modal__container">
          <button
            className="modal__close-button modal__close-button_delete-card"
            type="reset"
          />
          <form
            className="modal__profile modal__profile_delete-card"
            noValidate
          >
            <h3 className="modal__title modal__title_delete-card">
              Are you sure?
            </h3>
            <button className="modal__form-submit" type="submit">
              Yes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
