import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../images/main-logo-without-background.png";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    // Footer row
    <Grid
      container
      component="footer"
      direction="row"
      alignItems="flex-end"
      justify="space-around"
      className={classes.footer}
    >
      {/* First Column */}
      <Grid item md={3}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-around"
              spacing={2}
              className={classes.iconsContainer}
            >
              <Grid item>
                <a
                  href="https://www.facebook.com/loopeduservices"
                  target="_blank"
                  alt="facebook page"
                  className={classes.fbIcon}
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </Grid>
              <Grid item>
                <a href="#" className={classes.twitterIcon}>
                  <i className="fab fa-twitter"></i>
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://api.whatsapp.com/message/M25ANME7JW4RP1"
                  target="_blank"
                  alt="Chat on whatsapp"
                  className={classes.whatsAppIcon}
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </Grid>
              <Grid item>
                <a href="#" className={classes.googlePlusIcon}>
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="subtitle1" className={classes.phoneNumber}>
              <i className="fas fa-phone-alt"></i> +1 416-450-6320
            </Typography>
            <Typography variant="subtitle1" className={classes.phoneNumber}>
              <i className="fas fa-phone-alt"></i> +61 433-186-302
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Second Column */}
      <Grid item md={4}>
        <Box className={classes.logoContainer}>
          <a href="http://loopeduservices.com/">
            <img src={logo} alt="Logo" className={classes.logo} />
          </a>
        </Box>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <a href="#">
              <Typography variant="subtitle1" className={classes.footerNavLink}>
                About
              </Typography>
            </a>
          </Grid>
          <Grid item>
            <a href="#">
              <Typography variant="subtitle1" className={classes.footerNavLink}>
                Services
              </Typography>
            </a>
          </Grid>
          <Grid item>
            <a href="#">
              <Typography variant="subtitle1" className={classes.footerNavLink}>
                Resources
              </Typography>
            </a>
          </Grid>
          <Grid item>
            <a href="#">
              <Typography variant="subtitle1" className={classes.footerNavLink}>
                Policies
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
      {/* Footer Third column */}
      <Grid item md={3}>
        <Typography variant="subtitle1" className={classes.authorText}>
          Developed by
          <a href="http://jorawarsinghs.com/" target="_blank">
            &nbsp; Jorawar Singh &copy;
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
