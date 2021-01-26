import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    column:{
        padding:theme.spacing(8),
        textAlign:"center",
        color: theme.palette.grey[500],
        "&> *": {
            fontWeight: "600"
        }
    },
    columnHeading:{
        color: theme.palette.tertiary.main,
        borderBottom:`5px solid ${theme.palette.primary.main}`,
        textAlign: "left",
        padding: "1rem"
    }
}));

export default useStyles;
