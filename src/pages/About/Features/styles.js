import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.tertiary.light,
        marginBottom: theme.spacing(10)
    },
    column:{
        padding:theme.spacing(8),
        textAlign:"center",
        color: theme.palette.grey[500],
    },
    heading:{
        color: theme.palette.primary.main
    },
    description:{
        color: theme.palette.tertiary.dark,
        fontStyle:"italic"
    },
    icon:{
        color: theme.palette.primary.main
    }
}));

export default useStyles;