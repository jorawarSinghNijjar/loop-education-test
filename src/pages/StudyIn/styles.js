import {makeStyles} from '@material-ui/core';
import image1 from "../../images/canada-1.jpg";
import image2 from "../../images/australia.jpg";
const useStyles = makeStyles((theme) => ({
    container: {
      height: "100vh",
      width: "100vw",
    },
    btn: {
      padding: "1rem 2rem",
      borderRadius: 0,
      border: "4px solid white",
      color: "white",
      transition: "all .4s linear",
      textAlign: "center",
      "&:hover": {
        borderRadius: 0,
        border: "4px solid black",
        color: "black",
      },
    },
    link: {
      color: theme.palette.primary.contrastText,
      textDecoration: "none",
    },
    btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50vw",
      height: theme.spacing(80),
      overflow: "hidden",
      transition: "all 300ms",
      "&:hover": {
        borderRadius: 0,
        border: "4px black white",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
    },
    btn1: {
      background: `radial-gradient(rgba(0,0,0,.3), rgba(255,255,255,.5)),url(${image1})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      "&:hover": {
        background: `radial-gradient(rgba(150,150,150,.5), rgba(0,0,0,.7)),url(${image1})`,
        borderRadius: 0,
        border: "4px black white",
        backgroundPosition: "center",
        backgroundSize: "cover",
        cursor: "pointer",
      },
    },
    btn2: {
      background: `radial-gradient(rgba(0,0,0,.3), rgba(255,255,255,.5)),url(${image2})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      "&:hover": {
        background: `radial-gradient(rgba(150,150,150,.5), rgba(0,0,0,.7)),url(${image2})`,
        borderRadius: 0,
        border: "4px black white",
        backgroundPosition: "center",
        backgroundSize: "cover",
        cursor: "pointer",
      },
    },
  }));

  export default useStyles;