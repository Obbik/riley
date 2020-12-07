import React from 'react'
import { Grid } from "@material-ui/core"
import Product from "./Product/product"
import makeStyles from "./styles"
const Products = () => {
    const productItem = [
        { image: "baba1", test: "test1", image: "" },
        { image: "baba2", test: "test2" },
        { image: "baba3", test: "test3" },
    ]

    const classes = makeStyles()
    return (
        <div>
            <div className={classes.toolbar} />
            <Grid container justify="space-evenly" spacing={3}>
                {productItem.map((content) => (
                    <Grid item xs={12} lg={1}>
                        <Product content={content} />
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default Products
