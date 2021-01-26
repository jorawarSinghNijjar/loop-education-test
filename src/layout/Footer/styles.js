import { makeStyles } from "@material-ui/core";
import footerBackground from "../../images/footerBackground.jpg";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#ffffff",
    backgroundImage: `linear-gradient(to top, ${theme.palette.secondary.light} 0%, #ffffff 80%)`,
    padding: "6rem 1rem",
  },
  logoContainer: {
    width: "20%",
    margin: "1rem auto",
  },
  logo: {
    width: "100%",
  },
  iconsContainer: {
    fontSize: "1.5rem",
  },
  fbIcon: {
    color: "#4867AA",
  },
  twitterIcon: {
    color: "#50ABF1",
  },
  whatsAppIcon: {
    color: "#00E676",
  },
  googlePlusIcon: {
    color: "#CC483C",
  },
  phoneNumber:{
    fontWeight:"bold"
  },
  footerNavLink:{
      fontWeight:"bold"
      ,
      color: theme.palette.primary.main
  },
  authorText:{
      fontWeight: "bold",
      "&> a":{
        color: theme.palette.primary.main
      }
  }
}));

export default useStyles;
