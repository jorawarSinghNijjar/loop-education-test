import React from "react";
import Header from "../layout/Header";

const WhyStudyAbroad = () => {
    const details = {
        page: "why-study-abroad",
        headingText: "Why should you study Abroad ?",
        btnText: "Learn More"
    };

    return (
        <>
            <Header details={details}></Header>
            <main className="wsa">
                <div className="container--90">
                    The truth is, studying overseas has many fantastic benefits,
                    from helping you find a good job to improving your social
                    life. Still not sure? Then here are the top 8 reasons why
                    you should study abroad.
                </div>
            </main>
        </>
    );
};

export default WhyStudyAbroad;
