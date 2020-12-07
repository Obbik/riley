import { makeStyles } from "@material-ui/core/styles";



export default makeStyles((theme) => ({
    root:{
        width:"400px"
    },
    title:{
        fontWeight:700
    },
    text:{
        width:"90%",
        height:theme.spacing(5),
        display:"flex"
    },
    button:{
        marginLeft:"5%",
        minWidth: theme.spacing(8),
        width:120,
        borderRadius:25
    }
})) 