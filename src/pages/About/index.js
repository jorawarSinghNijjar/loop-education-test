import React from "react";
import Header from "../../layout/Header";
import Features from "./Features";
import FeatureGrid from './FeatureGrid'
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

const About = () => {
  const details = {
    page: "about",
    headingText: "Get to know us",
    btnText: "Have a look",
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Header details={details} />
      <Grid container direction="column" alignItems="center" component="main">
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
          >
            <Grid item md={4} className={classes.column}>
              <Typography variant="h4" className={classes.columnHeading}>
                Loop Education Services
              </Typography>
            </Grid>
            <Grid item md={4} className={classes.column}>
              <Typography variant="body1" align="justify">
                Lorem ipsum dolor sit amet, c onsectetur adipiscing elit.
                Quisque finibus mauris nec fringilla tincidunt. Pellentesque ut
                elit dolor. Suspendisse sollicitudin nunc non posuere interdum.
                Nam eget tempus mauris.
              </Typography>
            </Grid>
            <Grid item md={4} className={classes.column}>
              <Typography variant="body1" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                finibus mauris nec fringilla tincidunt. Pellentesque ut elit
                dolor. Suspendisse sollicitudin nunc non posuere interdum. Nam
                eget tempus mauris.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Features />
        </Grid>
        <Grid item>
            <FeatureGrid />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;
