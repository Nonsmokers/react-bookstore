import React from "react";
import vector from '../../accets/img/vector.svg'
import s from './ItemPage.module.css'
import {NavLink} from "react-router-dom";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Rating from "@material-ui/lab/Rating";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}, secondary: {main: '#626856'}}});
const ItemPage = (props) => {
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.card}>
                    <div className={s.card_title}>
                        <h1>{props.book.title}</h1>
                        <h2>{props.book.author}</h2>
                        <p>{props.book.description}</p>
                        <div className={s.rating}>
                            <Rating name="read-only" value={props.book.rating} readOnly/>
                        </div>
                        <div className={s.card_title_price}>
                            <p><LocalOfferIcon/> &nbsp;Цена :&nbsp;<b>{props.book.price} ₽</b></p>
                        </div>
                        <div className={s.buttons_wrapper}>
                            <ThemeProvider theme={theme}>
                                <Button
                                    onClick={props.addBookToCart.bind(this, props.book)}
                                    color="primary"
                                    variant="contained"
                                    startIcon={<ShoppingCartIcon/>}
                                > Добавить в корзину</Button>

                                <NavLink to={`/books/`} >
                                    <Button color="secondary" startIcon={<HomeOutlinedIcon/>}>
                                        Вернуться к покупкам </Button>
                                </NavLink>
                            </ThemeProvider>

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





