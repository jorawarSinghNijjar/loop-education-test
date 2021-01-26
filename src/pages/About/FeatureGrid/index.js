import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import img1 from "../../../images/feature-grid-img-1.jpg";
import img2 from "../../../images/feature-grid-img-2.jpg";
import img3 from "../../../images/feature-grid-img-3.jpg";

const FeatureGrid = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      className={classes.container}
    >
      {/* ---------Row 1 ----------- */}
      <Grid item sm={6}>
        <Box className={classes.imageContainer}>
          <img src={img1} alt="grid-image-1" className={classes.image} />
        </Box>
      </Grid>
      <Grid item sm={6} className={classes.content}>
        <Typography variant="h3" className={classes.icon}>
          <i className="far fa-eye"></i>
        </Typography>
        <Typography variant="h4" className={classes.heading}>
          Our Vision
        </Typography>
        <Typography variant="body1" align="left" className={classes.description}>
          Pellentesque volutpat lorem at porta bibendum. Nam faucibus, velit ut
          bibendum consectetur, felis ipsum pharetra tellus, commodo sodales
          ipsum leo a ligula.
        </Typography>
      </Grid>

      {/* ---------Row 2 ----------- */}
      <Grid item sm={6}>
        <Box className={classes.imageContainer}>
          <img src={img2} alt="grid-image-2" className={classes.image} />
        </Box>
      </Grid>
      <Grid item sm={6} className={classes.content}>
        <Typography variant="h3" className={classes.icon}>
          <i className="fas fa-id-card-alt"></i>
        </Typography>
        <Typography variant="h4" className={classes.heading}>Our Faculty</Typography>
        <Typography variant="body1" align="left" className={classes.description}>
          Pellentesque volutpat lorem at porta bibendum. Nam faucibus, velit ut
          bibendum consectetur, felis ipsum pharetra tellus, commodo sodales
          ipsum leo a ligula.
        </Typography>
      </Grid>

      {/* ---------Row 3 ----------- */}
      <Grid item sm={6}>
        <Box className={classes.imageContainer}>
          <img src={img3} alt="grid-image-3" className={classes.image} />
        </Box>
      </Grid>
      <Grid item sm={6} className={classes.content}>
        <Typography variant="h3" className={classes.icon}>
          <i class="fas fa-check-circle"></i>
        </Typography>
        <Typography variant="h4" className={classes.heading}>Our Success</Typography>
        <Typography variant="body1" align="left" className={classes.description}>
          Pellentesque volutpat lorem at porta bibendum. Nam faucibus, velit ut
          bibendum consectetur, felis ipsum pharetra tellus, commodo sodales
          ipsum leo a ligula.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FeatureGrid;
