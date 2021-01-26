import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "3rem 7rem",
    color: theme.palette.secondary.dark,
  },
  heading: {
    fontWeight: "bold",
  },
  hightlightText:{
      fontWeight: "bold",
      color: theme.palette.primary.light
  }
}));

export default useStyles;
