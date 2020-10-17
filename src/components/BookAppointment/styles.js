import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  datePickerBox: {
    width: "50%",
    padding: theme.spacing(3),
    fontSize: "2rem"
  },
  datePicker: {
    fontSize: "2rem",
  },
}));

export default useStyles;
