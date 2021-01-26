import { Grid, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import Fade from "react-reveal/Fade";
import useStyles from "./styles";

const StudyIn = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      spacing={0}
      className={classes.container}
    >
      <Grid item>
        <Fade left duration={2000}>
          <Link to="/study-in-canada" className={classes.link}>
            <div className={clsx(classes.btnContainer, classes.btn1)}>
              <Typography variant="h3" className={classes.btn}>
                Canada
              </Typography>
            </div>
          </Link>
        </Fade>
      </Grid>
      <Grid item>
        <Fade right duration={2000}>
          <Link to="/study-in-autralia" className={classes.link}>
            <div className={clsx(classes.btnContainer, classes.btn2)}>
              <Typography variant="h3" className={classes.btn}>
                Australia
              </Typography>
            </div>
          </Link>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default StudyIn;
