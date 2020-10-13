import React from "react";

const Header = props => {
    const {page, headingText, btnText } = props.details;
    return (
        <header className={`header header__${page}`}>
            <div className="header__heading-container">
                <h1 className="primary-heading">
                    {headingText}
                </h1>
                <a href="#" className="btn btn__light-blue header__btn">
                    {btnText}{" "}
                    <i className="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </header>
    );
};

export default Header;
