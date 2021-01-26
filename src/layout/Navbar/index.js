import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import logo from "../../images/main-logo-without-background.png";
import menuIcon from "../../images/menu-icon.png";
import {
  Avatar,
  Drawer,
  Box,
  Grid,
  Button,
  Hidden,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import avatarImg from "../../images/avatar.png";

const Navbar = () => {
  // const [displayMenu, setDisplayMenu] = useState(true);
  const [direction, setDirection] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const displayMenu = useMediaQuery(theme.breakpoints.up("lg"));

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const classes = useStyles();
  return (
    <>
      <Drawer anchor="left" open={openMenu} onClose={toggleMenu}>
        <Box className={classes.drawer}>
          <Menu
            direction="column"
            alignItems="center"
            justify="flex-start"
            divider
          />
        </Box>
      </Drawer>
      <Box className={classes.navbar}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>
          </Grid>
          {displayMenu ? (
            <Menu
              direction="row"
              alignItems="center"
              justify="space-evenly"
              backgroundColor="transparent"
            />
          ) : null}

          <Hidden lgUp>
            <Grid item>
              <Box textAlign="center">
                <Button onClick={toggleMenu}>
                  <img src={menuIcon} className={classes.menuIcon}></img>
                </Button>
              </Box>
            </Grid>
          </Hidden>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Avatar
                  alt="Remy Sharp"
                  src={avatarImg}
                  className={classes.avatar}
                ></Avatar>
              </Grid>
              <Hidden mdDown>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.logoutBtn}
                  >
                    Logout
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Navbar;
