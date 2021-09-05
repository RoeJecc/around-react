import React, { useState, useEffect } from "react";
import Card from "./Card.js";

function Main(props) {
  const { cards } = props;

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={props.currentUser ? props.currentUser.avatar : ""}
            alt="Cousteau Image"
            id="cousteau-image"
          />
          <div className="profile__overlay">
            <button
              onClick={props.onEditAvatarClick}
              className="profile__avatar-button"
              type="button"
              name="avatar"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">
            {props.currentUser ? props.currentUser.name : ""}
          </h1>
          <button
            onClick={props.onEditProfileClick}
            className="profile__edit-button"
            type="button"
            name="edit"
          />
          <p className="profile__occupation">
            {props.currentUser ? props.currentUser.about : ""}
          </p>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          className="profile__add-button"
          type="button"
          name="add"
        />
      </section>
      <section className="elements">
        <>
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </>
      </section>
    </main>
  );
}

export default Main;
