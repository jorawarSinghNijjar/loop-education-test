import React from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  GridListTileBar,
  Divider,
} from "@material-ui/core";
import Header from "../../layout/Header";
import HighlightSection from "../../components/HighlightSection";
import studentImage from "../../images/student.png";
import bookIcon from "../../images/book-icon.png";
import useStyles from "./styles";

const Home = () => {
  const details = {
    page: "home",
    headingText: "International study and Career Experts",
    btnText: "Free Assessment",
  };

  const highlightSectionDetails= {
    
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Header details={details} />
      <main>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              component="section"
              justify="space-around"
              spacing={8}
              className={classes.descriptionContainer}
            >
              <Grid item>
                <Typography
                  variant="h2"
                  component="h2"
                  className={classes.descriptionHeading}
                >
                  Students make the future
                </Typography>
              </Grid>
              <Grid item className={classes.imageContainer}>
                <img
                  src={studentImage}
                  alt="university"
                  className={classes.descriptionImage}
                />
              </Grid>
              <Grid item>
                <p className={classes.descriptionContent}>
                  Our Qualified Education Counsellors can provide information on
                  studying in Australia and Canada. We also advice you the
                  courses offered by institutions, information on the process of
                  being accepted into a course and entering Australia and Canada
                  as an international student.
                </p>
              </Grid>
              <Grid Item className={classes.dividerContainer}>
                <Box className={classes.divider} />
                <img
                  src={bookIcon}
                  alt="scholarship"
                  className={classes.bookIcon}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4" color="primary">
              Recent Stories
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="primary">
              Keep up to with the trends in education and immigration sectors
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center" justify="space-around">
              <Grid item sm={1} className={classes.angle}>
                <i className={`fas fa-angle-double-left ${classes.leftAngle}`}></i>
              </Grid>
              <Grid item sm={10}>
                <HighlightSection />
              </Grid>
              <Grid item sm={1} className={classes.angle}>
                <i className={`fas fa-angle-double-right ${classes.rightAngle}`}></i>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default Home;
