import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    navbar: {
        position:"relative",
        backgroundColor: "transparent",
        zIndex: "2",
        padding: theme.spacing(1)
    },
    logo:{
        width: theme.spacing(8),
        marginLeft: theme.spacing(2),
        transition: "all .5s",
        "&:hover" : {
            transform: "scale(1.1)",
            boxShadow: theme.shadows[6]
        }
    },
    avatar:{
        marginRight: theme.spacing(2)
    },
    drawer:{
        padding: theme.spacing(4),
        backgroundColor: theme.palette.secondary.main,
        height: "100%"
    },
    logoutBtn:{
        marginRight: theme.spacing(2),
        fontWeight: "600"
    },
    menuIcon:{
        width: "50px",
        padding:0,
    }
}));

export default useStyles;

