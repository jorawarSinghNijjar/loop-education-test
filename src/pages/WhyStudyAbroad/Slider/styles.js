import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box:{
    width: "70vw",
    height: "60vh",
    marginBottom: theme.spacing(3),
    borderRadius: "15px",
    position:"relative",
  },
  image:{
    width: "100%",
    height: "100%",
    borderRadius:"15px",
    // animation: "slideIn 1s linear",
    // animationDelay: "5s",
    // animationIterationCount: "infinite"
  },
  contentBox:{
    backgroundColor: 'rgba(253,106,2,0.7)',
    position: "absolute",
    top: "10%",
    right:"-10%",
    zIndex: "2",
    width: "30%",
    height: "100%",
    padding: theme.spacing(3),
    borderRadius: "15px"
  },
}));

export default useStyles;
