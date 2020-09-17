import React from 'react';
import {NavLink} from "react-router-dom";
import emptyCart from '../../accets/img/empty-cart.svg'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Typography from "@material-ui/core/Typography";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import s from "./CartEmpty.module.css";

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}}});

const CartEmpty = () => {
    return (
        <>
            <div className={s.root}>
                <Card className={s.wrapperCard}>
                    <img className={s.image} src={emptyCart} alt={'cart'}/>
                    <div className={s.title}>
                        <Typography variant="h5" className={s.titleHeader} noWrap>
                            Корзина пуста
                        </Typography>
                        <Typography className={s.titleDescription} variant="body1">
                            Похоже, вы еще не сделали свой выбор...<br/>
                            Пожалуйста, ознакомьтесь с каталогом нашего React-bookstore.
                        </Typography>
                        <NavLink to={'/books'}>
                            <ThemeProvider theme={theme}>
                                <CardActions>
                                    <Button startIcon={<HomeOutlinedIcon/>}
                                            color={'primary'}
                                            variant={"contained"}
                                            className={s.button}
                                    > Вернуться к покупкам </Button>
                                </CardActions>
                            </ThemeProvider>

                        </NavLink>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default CartEmpty;


