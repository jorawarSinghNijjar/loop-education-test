import React from "react";

import Header from "../layout/Header";
import studentImage from '../../images/student.png';
import bookIcon from '../../images/book-icon.png';

const Home = () => {
    const details = {
        page: "home",
        headingText: "International study and Career Experts",
        btnText: "Free Assessment"
    }
    return (
        <React.Fragment>
            <Header details={details}/>
            <main>
                <section className="desc-section">
                    <h2 className="desc-section__heading secondary-heading">
                        Students make the future
                    </h2>
                    <img
                        src={studentImage}
                        alt="university"
                        className="desc-section__photo"
                    />
                    <p className="desc-section__description">
                        Our Qualified Education Counsellors can provide
                        information on studying in Australia and Canada. We also
                        advice you the courses offered by institutions,
                        information on the process of being accepted into a
                        course and entering Australia and Canada as an
                        international student.
                    </p>
                    <div className="hr hr__blue">
                        <img
                            src={bookIcon}
                            alt="scholarship"
                            className="hr__photo"
                        />
                    </div>

                    {/*<div className="hr hr__blue"></div> */}
                </section>

                <section className="highlight-section">
                    <h2 className="highlight-section__heading secondary-heading">
                        Prepare to Study
                    </h2>
                    <h3 className="highlight-section__heading--sub secondary-heading__sub">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Blanditiis officiis, repudiandae
                    </h3>
                    <div className="two-col-container">
                        <div className="two-col-container__left-col">
                            <h4 className="tertiary-heading">Lorem Ipsum</h4>
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Blanditiis officiis,
                                repudiandae ipsam molestias beatae sed esse
                                porro.
                            </p>
                            <a
                                href="#"
                                className="btn btn__outline highlight-section__description-btn"
                            >
                                Continue Reading
                            </a>
                        </div>
                        <div className="two-col-container__right-col">
                            <div className="highlight-section__post-content">
                                <h5 className="highlight-section__post-title">
                                    Recent Stories
                                </h5>
                                <p className="highlight-section__post-description">
                                    <a href="#">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Blanditiis officiis,
                                        repudiandae ipsam molestias
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default Home;
