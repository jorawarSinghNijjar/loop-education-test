import { makeStyles } from "@material-ui/core";
import contactUsHeaderImage from '../../images/contact-us-header-img.jpg';

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "60vh",
    marginBottom: "5rem",
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `linear-gradient( to bottom, rgba(49,69,112, 0.5), rgba(23,105,170, 0.7)),
    url(${contactUsHeaderImage})`,
    backgroundPosition:"right center",
    backgroundSize:"cover",
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
    color: "white",
    display: "flex",
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
      transform: "translateY(-100px)"
  },
  form: {
    textAlign: "center",
  },
  submitBtn: {
    width: "70%",
  },
}));

export default useStyles;
