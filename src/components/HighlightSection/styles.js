import { makeStyles } from "@material-ui/core";
import rightColumnBackground from "../../images/rightColumnBackground.jpg";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "40% 60%",
    gridTemplateRows: "30vw",
    [theme.breakpoints.down('sm')]: {
        height:"90vh",
        gridTemplateColumns: "100%",
        gridTemplateRows: "40% 60%", 
    },
  },
  subHeading: {
    color: theme.palette.text.secondary,
  },
  btn: {
    borderRadius: "0",
    borderWidth: "2px",
    "&:hover": {
      borderWidth: "2px",
      boxShadow: theme.shadows[6],
    },
    fontSize: "1rem",
    width:"60%"
  },
  postLink: {
    color: theme.palette.common.white,
    marginTop: theme.spacing(2),
    textDecoration:"underline"
  },
  leftColumn:{
    backgroundColor:theme.palette.grey[200],
    padding: theme.spacing(3)
  },
  rightColumn: {
    padding:theme.spacing(8),
    color: "white",
    backgroundImage: `linear-gradient( to bottom, rgba(49,69,112, 0.5), rgba(23,105,170, 0.7)),
    url(${rightColumnBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default useStyles;
