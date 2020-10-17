import React from "react";
import Header from "../layout/Header";
import Features from "../components/Features";
import Grid from '../components/Grid';
const About = () => {
    const details = {
        page: "about",
        headingText: "Get to know us",
        btnText: "Have a look"
    };

    return (
        <div className="about">
            <Header details={details} />
            <div className="container--90">
                <div className="row">
                    <div className="col-1-of-3">
                        <h3 className="secondary-heading about__secondary-heading">
                            Loop Education Services
                        </h3>
                    </div>
                    <div className="col-1-of-3">
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque finibus mauris nec fringilla
                            tincidunt. Pellentesque ut elit dolor. Suspendisse
                            sollicitudin nunc non posuere interdum. Nam eget
                            tempus mauris.
                        </p>
                    </div>
                    <div className="col-1-of-3">
                        <p className="description">
                            Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia curae; Curabitur non
                            tincidunt odio. Nunc mattis nunc non purus finibus
                            hendrerit. Fusce at sodales eros. Nullam imperdiet
                            tellus ut massa vestibulum
                        </p>
                    </div>
                </div>
            </div>
            <Features />
            <Grid>
            </Grid>    
        </div>
    );
};

export default About;
