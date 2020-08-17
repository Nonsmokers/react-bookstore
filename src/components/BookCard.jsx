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

const BookCard = (props) => {
    return (
        <Card className={s.root}>
            <CardActionArea>
                <CardMedia
                    className={s.media}
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className={s.addCard}>
                <Typography variant="h7" color="textSecondary" className={s.price}>
                    <LocalOfferIcon /> price: <b>{props.price}</b>
                </Typography>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        startIcon={<ShoppingCartIcon />}
                    >
                        Купить книгу
                    </Button>
                </CardActions>

            </div>
        </Card>
    );
}

export default BookCard;
