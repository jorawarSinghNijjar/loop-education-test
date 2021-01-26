import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  descriptionHeading: {
    fontSize: "2rem",
    color: theme.palette.primary.main,
  },
  imageContainer:{
    textAlign:"center"
  },
  descriptionImage: {
    width: "60%",
  },
  descriptionContent: {
    fontSize: "1.5rem",
    textAlign: "justify",
  },
  descriptionContainer: {
    width: "60%",
    height: "auto",
    margin: "0 auto",
  },
  bookIcon: {
    height: theme.spacing(4),
    transform: "translateY(-1.5rem)"
  },
  dividerContainer:{
    textAlign:"center",
    width:"100%",
    margin:"1rem auto"
  },
  divider: {
    width: "100%",
    height: "3px",
    backgroundColor: theme.palette.primary.main,
  },
  angle:{
    textAlign:"center",
    fontSize:"3rem",
    color: theme.palette.primary.light,
  },
  leftAngle:{
    transition: "all .3s",
    cursor: "pointer",
      "&:hover":{
        transform:"translateX(-15%)"
    }
  },
  rightAngle:{
    transition: "all .3s",
    cursor: "pointer",
      "&:hover":{
        transform:"translateX(15%)"
    }
  },
  
}));

export default useStyles;
