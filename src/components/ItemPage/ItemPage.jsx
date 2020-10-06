import React from "react";
import vector from '../../accets/img/vector.svg'
import s from './ItemPage.module.css'
import {NavLink} from "react-router-dom";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Rating from "@material-ui/lab/Rating";
import {Button, createMuiTheme, ThemeProvider, Typography} from "@material-ui/core";

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}, secondary: {main: '#626856'}}});
const ItemPage = (props) => {
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.card}>
                    <div className={s.card_title}>
                        <Typography variant="h3" component="h3">{props.book.title}</Typography>
                        <Typography variant="h4" component="h4">{props.book.author}</Typography>
                        <Typography variant="body1" component="p"
                                    className={s.card_title_description}>{props.book.description}</Typography>
                        <div className={s.rating}>
                            <Rating name="read-only" value={props.book.rating} readOnly/>
                        </div>
                        <div className={s.card_title_price}>
                            <Typography variant="body1" component="p"><LocalOfferIcon/> &nbsp;Цена :&nbsp;
                                <b>{props.book.price} ₽</b></Typography>
                        </div>
                        <div className={s.buttons_wrapper}>

                            <Button
                                onClick={props.addBookToCart.bind(this, props.book)}
                                color="primary"
                                className={s.add_book_button}
                                variant="contained"
                                startIcon={<ShoppingCartIcon/>}
                            > Добавить в корзину</Button>

                            <NavLink to={`/books`}>
                                <ThemeProvider theme={theme}>
                                    <Button color="secondary" startIcon={<HomeOutlinedIcon/>}>
                                        Вернуться к покупкам </Button>
                                </ThemeProvider>
                            </NavLink>

                        </div>
                    </div>
                    <div className={s.card_image}>
                        <img src={props.book.image} className={s.card_image_photo} alt="main_photo"/>
                        <img src={vector} className={s.card_image_background} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemPage;





