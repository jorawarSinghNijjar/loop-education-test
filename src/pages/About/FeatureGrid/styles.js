import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container:{
        width:"100%",
        "&> :nth-child(1)":{
            order: "2"
        },
        "&> :nth-child(2)":{
            order: "1"
        },
        "&> :nth-child(3)":{
            order: "3"
        },
        "&> :nth-child(4)":{
            order: "4"
        },
        "&> :nth-child(5)":{
            order: "6"
        },
        "&> :nth-child(6)":{
            order: "5"
        },
        [theme.breakpoints.down('sm')]: {
            "&> :nth-child(1)":{
                order: "1"
            },
            "&> :nth-child(2)":{
                order: "2"
            },
            "&> :nth-child(3)":{
                order: "3"
            },
            "&> :nth-child(4)":{
                order: "4"
            },
            "&> :nth-child(5)":{
                order: "5"
            },
            "&> :nth-child(6)":{
                order: "6"
            },backgroundColor: 'red',
        },

    },
    content:{
        height: theme.spacing(50),
        padding: theme.spacing(13),
        "&> *":{
            marginBottom: ".5rem"
        },
        backgroundColor: theme.palette.grey[200]
    },
    imageContainer:{
        height: theme.spacing(50),
    },
    image:{
        width: "100%",
        height:"100%",
        objectFit:"cover"
    },
    icon:{
        color: theme.palette.primary.main
    },
    heading:{
        color: theme.palette.primary.main
    },
    description:{
        color: theme.palette.tertiary.dark,
    }
}));

export default useStyles;