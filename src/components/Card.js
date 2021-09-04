import React from 'react';

function Card(props) {
    const {card, onCardClick} = props;

    return (
        <div className="element">
          <button className="element__delete-button" type="button" />
          <img className="element__image" alt="place image" onClick={() => onCardClick(card)} src={card && card.link}/>
          <div className="element__info">
            <h2 className="element__text">{card.name}</h2>
            <div className="element__like-container">
              <button className="element__button" type="button" />
              <p className="element__likes">{card.likes.length}</p>
            </div>
          </div>
        </div>
    )
}

export default Card;