import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Slider from "./Slider";
import FadeInColumns from "./FadeInColumns";

const WhyStudyAbroad = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="flex-start"
        className={classes.header}
      >
        <Grid item>
          <Typography variant="h2" className={classes.heading}>
            Why should I study Abroad?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" className={classes.heading}>

          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" className={classes.heading}>
            Here are the top
            <span className={classes.hightlightText}> ten reasons</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" justify="center">
        <Slider />
      </Grid>
      <Grid container direction="row" alignItems="center" justify="center">
        <FadeInColumns />
      </Grid>
    </>
  );
};

export default WhyStudyAbroad;
