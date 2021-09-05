import React from "react";

function Card(props) {
  function handleCLick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <button className="element__delete-button" type="button" />
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCLick}
      />
      <div className="element__info">
        <h2 className="element__text">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__button" type="button" />
          <p className="element__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
