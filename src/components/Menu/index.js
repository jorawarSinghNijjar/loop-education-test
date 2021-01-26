import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Divider } from "@material-ui/core";
import useStyles from "./styles";

const Menu = (props) => {
  const classes = useStyles(props);
  return (
    <Grid item>
      <Grid
        container
        direction={props.direction}
        justify={props.justify}
        alignItems={props.alignItems}
        // spacing={6}
        className={classes.navContainer}
      >
        <Grid item>
          <Link to="/about">
            <Button variant="contained" className={classes.navLink}>
              About
            </Button>
            <Divider className={classes.divider}/>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/contact-us">
            <Button variant="contained" className={classes.navLink}>
              Contact Us
            </Button>
            <Divider className={classes.divider}/>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/ielts-online">
            <Button variant="contained" className={classes.navLink}>
              Ielts Online
            </Button>
            <Divider className={classes.divider}/>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/study-in">
            <Button variant="contained" className={classes.navLink}>
              Study in
            </Button>
            <Divider className={classes.divider}/>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/why-study-abroad">
            <Button variant="contained" className={classes.navLink}>
              Why Study Abroad ?
            </Button>
            <Divider className={classes.divider}/>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Menu;
