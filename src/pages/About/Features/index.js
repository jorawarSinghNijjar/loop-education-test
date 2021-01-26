import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Features = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-around"
      className={classes.container}
    >
      <Grid item md={4} className={classes.column}>
        <Typography variant="h4" className={classes.icon}>
          <i className="fas fa-university"></i>
        </Typography>
        <Typography variant="h5" className={classes.heading} gutterBottom>
          Application Processing
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          className={classes.description}
        >
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Curabitur non tincidunt odio. Nunc mattis nunc
          non purus finibus hendrerit. Fusce at sodales eros. Nullam imperdiet
          tellus ut massa vestibulum
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.column}>
        <Typography variant="h4" className={classes.icon}>
          <i className="fas fa-award"></i>
        </Typography>
        <Typography variant="h5" className={classes.heading} gutterBottom>
          Eligibility Assessment
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          className={classes.description}
        >
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Curabitur non tincidunt odio. Nunc mattis nunc
          non purus finibus hendrerit. Fusce at sodales eros. Nullam imperdiet
          tellus ut massa vestibulum
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.column}>
        <Typography variant="h4" className={classes.icon}>
          <i className="fas fa-graduation-cap"></i>
        </Typography>
        <Typography variant="h5" className={classes.heading} gutterBottom>
          Career Counselling
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          className={classes.description}
        >
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Curabitur non tincidunt odio. Nunc mattis nunc
          non purus finibus hendrerit. Fusce at sodales eros. Nullam imperdiet
          tellus ut massa vestibulum
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Features;
