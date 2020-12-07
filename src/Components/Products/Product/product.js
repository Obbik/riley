import React from 'react'
import makeStyles from "./styles"
import { Card, CardContent, Typography, Button } from "@material-ui/core"
const product = ({content}) => {
    const classes = makeStyles()
    return (
  
            <Card className={classes.root}>
                    <img src={content.image}/>
                <CardContent >
                    <div>
                        <Typography variant="h6" className={classes.title}>
                        {content.title}
                        </Typography>
                        
                        <Typography variant="body1" className={classes.text}>
                            {content.text}
                            <Button variant="outlined" color="secondary" className={classes.button}>
                            Explore
                           </Button>
                        </Typography>
                       
                    </div>
                        
                </CardContent>
            </Card>
   
    )
}

export default product
