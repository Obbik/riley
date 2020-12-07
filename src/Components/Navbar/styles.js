import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    logo: {
        marginLeft: theme.spacing(5)
    },
    AppBar: {
        marginTop: "1rem",
        boxShadow: "none",
        height: theme.spacing(15),
    },
    logoText: {
        marginLeft: "10px"
    },
    grow: {
        flexGrow: 1,
    },
    links: {
        display: "flex",

    },
    link: {
        marginLeft: "4rem",
        fontSize: theme.spacing(3.5)
    }
}))