import { Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Header = (props) => {
  const { page, headingText, btnText } = props.details;
  const classes = useStyles(props.details);
  return (
    // <header className={`header header__${page}`}>
    //     <div className="header__heading-container">
    //         <h1 className="primary-heading">
    //             {headingText}
    //         </h1>
    // <a href="#" className="btn btn__light-blue header__btn">
    //     {btnText}{" "}
    //     <i className="fas fa-arrow-circle-right"></i>
    // </a>
    //     </div>
    // </header>

    <Grid
      container
      direction="column"
      justify="flex-end"
      alignItems="start"
      className={classes.home}
    >
      <Grid Item>
        <Typography variant="h1" component="h1" className={classes.headingText}>
          {headingText}
        </Typography>
      </Grid>
      <Grid Item>
        <Button href="#" variant="contained" color="secondary" size="large" className={classes.btn}>
          {btnText} <i className="fas fa-arrow-circle-right"></i>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
