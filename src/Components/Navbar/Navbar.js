import React from 'react'
import { AppBar, Toolbar, Typography, Link, IconButton } from "@material-ui/core"
import logo from "../../images/images.png"
import useStyles from "./styles"
const Navbar = () => {
    const classes = useStyles()
    return (

        <AppBar position="fixed" className={classes.AppBar} color="transparent">
            <Toolbar>
                <IconButton className={classes.logo}>
                    <img src={logo} height="30px" alt="logo" />
                </IconButton>
                <IconButton color="primary">
                    <Typography variant="h5" className={classes.logoText}>
                        Logo
                    </Typography>
                </IconButton>
                <div className={classes.grow} />
                <div className={classes.links}>
                    <Link color="black" style={{ textDecoration: "none" }}>
                        <Typography variant="body1" className={classes.link}>
                            New
                            </Typography>
                    </Link>
                    <Link color="black" style={{ textDecoration: "none" }}>
                        <Typography variant="body1" className={classes.link}>
                            Popular
                            </Typography>
                    </Link>
                    <Link color="black" style={{ textDecoration: "none" }}>
                        <Typography variant="body1" className={classes.link}>
                            Featured
                            </Typography>
                    </Link>
                    <Link style={{ textDecoration: "none", marginRight: "25px" }} color="black">
                        <Typography variant="body1" className={classes.link}>
                            Authors
                            </Typography>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar
