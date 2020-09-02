import React from 'react';
import Card from "@material-ui/core/Card";
import s from "../CatalogPage/Books/BookCard.module.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CartEmpty = (props) => {
    return (
        <Card className={s.root}>
            <CardActionArea>
                <CardMedia className={s.media} />
            </CardActionArea>
            <div>
                <CardActions>
                    <Button
                        className={s.addCardButton}
                        color="primary"
                        variant="contained"
                        startIcon={<ShoppingCartIcon/>}
                    >
                    </Button>
                </CardActions>

            </div>
        </Card>    )
}

export default CartEmpty;


