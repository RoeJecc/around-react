import React, { useEffect, useState } from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import EditAvatarPopup from "./EditAvatarPopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ImagePopup from "./ImagePopup.js";

import api from "../utils/api.js";
import PopupWithForm from "./PopupWithForm.js";

function App() {
  const [editAvatarOpen, setEditAvatarOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [addPlaceOpen, setAddPlaceOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState("");

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  });

  function handleEditAvatarClick() {
    setEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarOpen(false);
    setEditProfileOpen(false);
    setAddPlaceOpen(false);
    setImagePopupOpen(false);
  }

  function handlecloseAllPopups(e) {
    if (e.target !== e.currentTarget) return;
    closeAllPopups();
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        cards={cards}
        onCardClick={handleCardClick}
      />
      <Footer />
      <EditAvatarPopup isOpen={editAvatarOpen} onClose={handlecloseAllPopups} />
      <EditProfilePopup
        isOpen={editProfileOpen}
        onClose={handlecloseAllPopups}
      />
      <AddPlacePopup isOpen={addPlaceOpen} onClose={handlecloseAllPopups} />

      <ImagePopup
        card={selectedCard}
        isOpen={imagePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="delete-card"
        title="Are you sure?"
        buttonText="Yes"
      />
    </div>
  );
}

export default App;
