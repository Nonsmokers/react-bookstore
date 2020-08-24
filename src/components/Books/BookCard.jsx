import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import s from './BookCard.module.css';

const BookCard = book => {
    const {image,title,author,price,addBookToCart,totalCount} = book;
    return (
        <Card className={s.root}>
            <CardActionArea>
                <CardMedia
                    className={s.media}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h5">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {author}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div>
                <Typography variant="h6" color="textSecondary" className={s.price}>
                    <LocalOfferIcon/> Цена: <b> {price} ₽</b>
                </Typography>
                <CardActions>
                    <Button
                        className={s.addCardButton}
                        onClick={addBookToCart.bind(this, book)}
                        color="primary"
                        variant="contained"
                        startIcon={<ShoppingCartIcon/>}
                    >
                        Добавить в корзину {totalCount >0 && `(${totalCount})`}
                    </Button>
                </CardActions>

            </div>
        </Card>
    );
}

export default BookCard;
