import React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import emptyCart from '../../accets/img/empty-cart.svg'
import {createUseStyles} from "react-jss";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";

const useStyles = createUseStyles({
    wrapper: {
        display: 'block',
        width: '100%',
        maxWidth: '400px'
    },
    wrapperCard: {
        margin: '0 15px 0 15px',
        boxShadow: '0px 2px 10px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
    wrapperTitle: {
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cartTitle: {
        color: '#81a883',
        margin: '5px 0',
    },
    title: {
        color: '#ababab',
        margin: '5px 15px'
    },
    button:{
        margin : '0 0 10px 0'
    }
})

const CartEmpty = () => {
    const classes = useStyles()
    return (
        <Card className={classes.wrapperCard}>
            <img className={classes.wrapper} src={emptyCart} alt={'cart'}/>
            <div className={classes.wrapperTitle}>
                <Typography variant="h5" className={classes.cartTitle} noWrap>
                    Корзина пуста
                </Typography>
                <Typography className={classes.title} variant="body1">
                    Похоже, вы еще не сделали свой выбор...<br/>
                    Пожалуйста, ознакомьтесь с каталогом нашего React-bookstore.
                </Typography>
                <NavLink to={'/catalog'}>
                    <CardActions>
                        <Button startIcon={<HomeOutlinedIcon/>}
                                className={classes.button}
                        > Вернуться к покупкам </Button>
                    </CardActions>
                </NavLink>
            </div>
        </Card>)
}

export default CartEmpty;


