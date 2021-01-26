import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const HighlightSection = () => {
  const classes = useStyles();
  return (
    // <>
    //   <Grid
    //     container
    //     direction="column"
    //     alignItems="center"
    //     // justify="space-around"
    //     component="section"
    //   >
    //     <Grid item>
          <div className={classes.grid}>
            <Grid
              container
              direction="column"
              alignItems="left"
              justify="space-around"
              className={classes.leftColumn}
            >
              <Typography variant="h5">
                Canadian immigration policy ranked among top five in the world
              </Typography>
              <Typography variant="subtitle1" className={classes.subHeading}>
                Canada got the fourth highest score in a recent survey that
                ranks the policy performance of 52 countries. The Migration
                Integration Policy Index (MIPEX) is a comprehensive
                international benchmark for integration policies. These
                government policies affect how easily newcomers can find jobs
              </Typography>
              <Button
                href="#"
                variant="outlined"
                color="secondary"
                size="medium"
                className={classes.btn}
              >
                <Typography variant="subtitle1">Continue Reading</Typography>
              </Button>
            </Grid>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.rightColumn}
            >
              <Typography variant="h5">Latest News</Typography>
              <Link to="/posts">
                <Typography variant="subtitle1" className={classes.postLink}>
                  Canada came in fourth place overall thanks to improvements in
                  access to healthcare and citizenship.
                </Typography>
              </Link>
            </Grid>
          </div>
    //     </Grid>
    //   </Grid>
    // </>
  );
};

export default HighlightSection;
