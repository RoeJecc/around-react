import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  



  return (
    <div className="page">
      <Header />
      <Main
      
       />
      <Footer />
      <div className="modal modal_type_profile">
        <div className="modal__container">
          <button
            className="modal__close-button modal__close-button_profile"
            type="reset"
            name="close"
          />
          <form name="profile" className="modal__profile">
            <h3 className="modal__title">Edit Profile</h3>
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
            <button className="modal__form-submit" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="modal modal_type_add-card">
        <div className="modal__container">
          <form name="card" className="modal__profile modal__profile_add">
            <h3 className="modal__title">New place</h3>
            <input
              id="newCardTitle"
              name="newCardTitle"
              type="text"
              className="modal__text-input modal__text-input_type_name"
              required
              placeholder="Title"
              minLength={1}
              maxLength={30}
            />
            <span id="newCardTitle-error" className="modal__error" />
            <input
              id="newCardURL"
              name="newCardURL"
              type="url"
              placeholder="Image link"
              required
              className="modal__text-input modal__text-input_type_url"
            />
            <span id="newCardURL-error" className="modal__error" />
            <button className="modal__form-submit" type="submit">
              Create
            </button>
            <button
              className="modal__close-button modal__close-button_add-card"
              type="reset"
              name="close"
            />
          </form>
        </div>
      </div>
      <div className="modal modal_type_preview">
        <div className="modal__container modal__container_preview">
          <button
            className="modal__close-button modal__close-button_preview"
            type="reset"
            name="close"
          />
          <figure className="modal__image-container">
            <img className="modal__image" alt="Card Image" />
            <figcaption className="modal__image-caption" />
          </figure>
        </div>
      </div>
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
      <div className="modal modal_type_avatar">
        <div className="modal__container">
          <button
            className="modal__close-button modal__close-button_avatar"
            type="reset"
            name="close"
          />
          <form className="modal__profile modal__profile_avatar">
            <h3 className="modal__title">Change profile picture</h3>
            <input
              id="newAvatarURL"
              name="newAvatarURL"
              type="url"
              required
              placeholder="Image link"
              className="modal__text-input modal__text-input_type_url"
            />
            <span id="newAvatarURL-error" className="modal__error" />
            <button className="modal__form-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
