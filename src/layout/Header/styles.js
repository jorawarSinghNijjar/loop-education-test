import { makeStyles } from "@material-ui/core";
import headerHome from "../../images/header-home.jpg";
import headerWhyStudyAbroad from "../../images/header-why-study-abroad.jpg";
import headerAbout from "../../images/header-about.jpg";

const setBackground = (page) => {
  console.log(page)
  let image;
  switch (page) {
    case "home":
      image = headerHome;
      break;
    case "why-study-abroad":
      image = headerWhyStudyAbroad;
      break;
    case "about":
      image = headerAbout;
      break;
    default:
      image = headerHome;
  }
  return `linear-gradient(to top, rgba(7, 38, 82,.7), rgba(224, 152, 115,.5)),url(${image})`;
};

const useStyles = makeStyles((theme) => ({
  home: (props) => ({
    position: "relative",
    top: "-100px",
    zIndex: "1",
    backgroundImage: setBackground(props.page),
    width: "100%",
    height: "85vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(2),
  }),
  headingText: {
    fontSize: "2.5rem",
    fontWeight: 300,
    color: theme.palette.primary.dark,
    display: "block",
    letterSpacing: "-.1rem",
    textTransform: "uppercase",
  },
  btn: {
    fontWeight: "500",
    fontSize: "1rem",
  },
}));

export default useStyles;
