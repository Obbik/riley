
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    leftBox: {
        marginTop: "5rem",
        marginLeft: theme.spacing(8)
    },
    title:
    {
        fontWeight: "900",

        marginBottom: theme.spacing(2),
        fontSize: "5rem"
    },
    startIcon: {
        marginTop: "5rem",
        marginRight: theme.spacing(15)
    },
    text: {
        fontSize: "3rem",
        letterSpacing: "1px",
        lineHeight: "3rem",
        color: "rgb(144,144,144)"
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(2)
    },
}))

