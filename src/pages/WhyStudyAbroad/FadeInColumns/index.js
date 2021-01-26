import { Grid, makeStyles, Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import exploreIcon from '../../../images/explore-icon.png';
import enjoyIcon from '../../../images/enjoy-icon.png';
import bookIcon from '../../../images/book-icon-2.png';
const FadeInColumns = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      width: "90%",
      marginTop: theme.spacing(6),
    },
    box: {
      padding: theme.spacing(5),
      width: "100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      border: "5px solid black"
    },
    title: {
      marginBottom: theme.spacing(2),
      textAlign:"center"
    },
    text: {
      color: theme.palette.primary.main,
    },
    icon:{
    margin:"0 auto",
     width: "4rem"
    }
  }));
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={10}
      className={classes.container}
    >
      <Grid item sm={12}>
        <Fade bottom delay={1000} duration={2000} collapse>
          <Box className={classes.box}>
          <img src={exploreIcon} className={classes.icon}/>
            <Typography variant="h4" className={classes.title}>
               Explore
            </Typography>
            <Typography variant="h6" className={classes.text}>
              Why study abroad? For most students, this time may be the only
              opportunity they ever get to travel abroad for a long period of
              time. Eventually you will find a job and career, and the
              opportunity to study abroad may turn out to be a once in a life
              time opportunity. Take this opportunity to travel the world with
              no commitments but to study and learn about new cultures. Studying
              abroad is an experience unlike any other.
            </Typography>
          </Box>
        </Fade>
      </Grid>
      <Grid item sm={12}>
        <Fade bottom delay={3000} duration={2000} collapse>
          <Box className={classes.box}>
          <img src={enjoyIcon} className={classes.icon}/>
            <Typography variant="h4" className={classes.title}>
              Enjoy
            </Typography>
            <Typography variant="h6" className={classes.text}>
              One of the biggest benefits of studying abroad is the chance to
              become immersed in a new culture. You’ll get to see new
              perspectives and cultures and really embrace another country. From
              new foods and traditions to traditional music and games, they’ll
              be a lot to learn and explore.
            </Typography>
          </Box>
        </Fade>
      </Grid>
      <Grid item sm={12}>
        <Fade bottom delay={5000} duration={2000} collapse>
          <Box className={classes.box}>
          <img src={bookIcon} className={classes.icon}/>
            <Typography variant="h4" className={classes.title}>
              Learn
            </Typography>
            <Typography variant="h6" className={classes.text}>
              Another major advantage of studying abroad is the opportunity to
              learn a new language, or two. Learning a new language can be a
              challenge, but there’s no better place to learn than somewhere
              where the language is spoken every day in all aspects of life.
              From ordering a coffee to writing an essay, you will quickly
              develop your language skills. And, if you study somewhere like
              Holland (where the everyday language is both English and Dutch),
              you could study in English and then learn Dutch in your own time -
              being able to speak several languages can make you highly
              desirable to potential employers
            </Typography>
          </Box>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default FadeInColumns;
