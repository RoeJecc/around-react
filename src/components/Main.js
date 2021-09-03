import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card.js";

function Main(props) {
  const {
    onEditAvatarClick,
    onEditProfileClick,
    onAddPlaceClick,
    onCardClick,
    cards,
  } = props;

  const [currentUser, setCurrentUser] = useState("");

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Cousteau Image"
            id="cousteau-image"
          />
          <div className="profile__overlay">
            <button
              onClick={onEditAvatarClick}
              className="profile__avatar-button"
              type="button"
              name="avatar"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            onClick={onEditProfileClick}
            className="profile__edit-button"
            type="button"
            name="edit"
          />
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlaceClick}
          className="profile__add-button"
          type="button"
          name="add"
        />
      </section>
      <section className="elements">
        <>
        {cards.map((card) => (
            <Card 
            key={card._id}
            card={card}
            
            />

        )
        )}   
        </>
      </section>
    </main>
  );
}

export default Main;
