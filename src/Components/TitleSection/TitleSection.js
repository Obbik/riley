import React from 'react'
import { Typography, Box, IconButton } from "@material-ui/core"
import makeStyles from "./styles"
import start from "../../images/New Project.png"

const TitleSection = () => {
    const classes = makeStyles()
    return (
        <div>
            <div className={classes.toolbar} />
            <Box display="flex" flexDirection="row" justifyContent="space-between" >
                <div className={classes.leftBox}>
                    <Typography variant="h3" className={classes.title}>
                        Riley Wanna Help
                </Typography>
                    <Typography className={classes.text} variant="body2">
                        New solution for your tracking and time <br />
                         management. Make your work simple
                </Typography>
                </div>

                <IconButton className={classes.startIcon}>
                    <img src={start} alt="START" height="128" />
                </IconButton>
            </Box >
        </div >

    )
}

export default TitleSection
