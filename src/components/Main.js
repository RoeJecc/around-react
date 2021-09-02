import React, {useState, useEffect} from 'react';

function Main() {

    

    function handleEditAvatarClick() {
        const avatarModal = document.querySelector('.modal_type_avatar');
        avatarModal.classList.add('modal_open');
    }

    function handleEditProfileClick() {
        const editProfileModal = document.querySelector('.modal_type_profile');
        editProfileModal.classList.add('modal_open');
    }

    function handleAddPlaceClick() {
        const addPlaceModal = document.querySelector('.modal_type_add-card');
        addPlaceModal.classList.add('modal_open');
    }

    


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                  <img className="profile__avatar" alt="Cousteau Image" id="cousteau-image" />
                  <div className="profile__overlay">
                    <button onClick={handleEditAvatarClick} className="profile__avatar-button"  type="button" name="avatar" />
                  </div>
                </div>
                <div className="profile__info">
                  <h1 className="profile__name" />
                  <button onClick={handleEditProfileClick} className="profile__edit-button" type="button" name="edit" />
                  <p className="profile__occupation" />
                </div>
                <button onClick={handleAddPlaceClick} className="profile__add-button" type="button" name="add" />
            </section>
            <section className="elements" />
        </main>
    )
}

export default Main;