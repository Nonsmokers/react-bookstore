import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import s from './BookCard.module.css';
import {NavLink} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}, secondary: {main: '#626856'}}});

const BookCard = book => {
    const {id, image, title, author, rating, price, addBookToCart, addedCount} = book;

    return (
        <Card className={s.root} elevation={3}>
            <NavLink to={`/books/${id}`}>
                <CardActionArea>
                    <CardMedia className={s.media} image={image}/>
                    <CardContent className={s.content}>
                        <Typography variant="h6" component="h5" className={s.title}>
                            {title}
                        </Typography>
                        <Typography variant="body2" component="p" color="textSecondary" >
                            {author}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </NavLink>
            <div className={s.rating}>
                <Rating name="read-only" value={rating} readOnly/>
            </div>
            <div>
                <Typography variant="h6" color="textSecondary" className={s.price}>
                    <LocalOfferIcon/> Цена: <b> {price} ₽</b>
                </Typography>
                <CardActions>
                    <ThemeProvider theme={theme}>
                        <Button
                            className={s.addCardButton}
                            onClick={addBookToCart.bind(this, book)}
                            color="primary"
                            variant="contained"
                            startIcon={<ShoppingCartIcon/>}
                        >
                            Добавить в корзину {addedCount > 0 && `(${addedCount})`}
                        </Button>
                    </ThemeProvider>
                </CardActions>

            </div>
        </Card>
    )
}

export default BookCard;
