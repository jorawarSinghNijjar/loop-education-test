import React from "react";

const ContactUs = () => {
    return (
        <div className="contact">
            <form className="form contact__form">
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                    />
                    <label for="name" class="form__label">
                        Name
                    </label>
                </div>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="email"
                        placeholder="Email"
                        id="email"
                    />
                    <label for="name" class="form__label">
                        Email
                    </label>
                </div>
                <textarea
                    className="form__input"
                    type="text"
                    placeholder="How can we help you?"
                ></textarea>
                <button
                    type="submit"
                    className="btn btn__blue contact__submit-btn"
                >
                    Submit<i class="fas fa-paper-plane form__submit-icon"></i>
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
