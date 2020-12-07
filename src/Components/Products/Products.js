import React from 'react'
import { Grid } from "@material-ui/core"
import Product from "./Product/product"
import makeStyles from "./styles"

import programmer from "../../images/Programmer.svg"
import fish_1 from "../../images/fish1.svg"
import fish_2 from "../../images/fish2.svg"

const Products = () => {
    const productItem = [
        { title:"Programming",text: "Learn to be a professional programmer in your daily work", image: programmer },
        { title:"Educating", text: "Explore a new solution to educate you in your job duties  ", image: fish_1 },
        { title:"Communicating", text: "Learn how to be better at communicating with other", image: fish_2 },
    ]

    const classes = makeStyles()
    return (
        <div>
            <div className={classes.toolbar} />
            <Grid container justify="space-evenly" spacing={2}>
                {productItem.map((content) => (
                    <Grid item xs={12} lg={3}>
                        <Product content={content} />
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default Products
