const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
    navLink: props => ({
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "transparent",
        boxShadow:"none",
        color: theme.palette.primary.main,
        transition: "all .5s",
        '&:hover': {
            transform: "translateY(-4px)",
            backgroundColor:theme.palette.primary.main,
            color: theme.palette.tertiary.main
        }
    }),
    divider: props => ({
        display: props.divider ? "block" : "none"
    })
}));

export default useStyles;

