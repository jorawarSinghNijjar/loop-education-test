import React from "react";

const Grid = () => {
    return (
        <div className="grid">
            <div className="row">
                <div className="col-1-of-2">
                    <div className="about-grid__content">
                        <i className="far fa-eye about-grid__icon"></i>
                        <h3 className="tertiary-heading about-grid__heading">Our Vision</h3>
                        <p className="about-grid__description description">
                            Pellentesque volutpat lorem at porta bibendum. Nam
                            faucibus, velit ut bibendum consectetur, felis ipsum
                            pharetra tellus, commodo sodales ipsum leo a ligula.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="about-grid__image about-grid__image--1"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="about-grid__image  about-grid__image--2"></div>
                </div>
                <div className="col-1-of-2">
                    <div className="about-grid__content">
                        <i className="fas fa-id-card-alt about-grid__icon"></i>
                        <h3 className="tertiary-heading about-grid__heading">Our Faculty</h3>
                        <p className="about-grid__description  description">
                            Ut scelerisque bibendum lectus ac luctus. In quis
                            orci ipsum. Aenean leo mauris, luctus ac lectus non,
                            porta pretium lectus. Maecenas vel magna nec ex
                            pulvinar cursus in nec dolor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grid;
