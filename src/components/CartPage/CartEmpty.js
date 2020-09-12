import React from 'react';
import {NavLink} from "react-router-dom";
import {createUseStyles} from "react-jss";
import emptyCart from '../../accets/img/empty-cart.svg'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Typography from "@material-ui/core/Typography";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}}});
const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh'
    },
    wrapperCard: {
        margin: '0 15px ',
        boxShadow: '0px 2px 10px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
    image: {
        display: 'block',
        width: '100%',
        maxWidth: '400px'
    },
    title: {
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleHeader: {
        color: '#626856',
        margin: '5px 0',
    },
    titleDescription: {
        color: '#ababab',
        margin: '5px 15px'
    },
    button: {
        margin: '0 0 10px 0'
    }
})

const CartEmpty = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Card className={classes.wrapperCard}>
                    <img className={classes.image} src={emptyCart} alt={'cart'}/>
                    <div className={classes.title}>
                        <Typography variant="h5" className={classes.titleHeader} noWrap>
                            Корзина пуста
                        </Typography>
                        <Typography className={classes.titleDescription} variant="body1">
                            Похоже, вы еще не сделали свой выбор...<br/>
                            Пожалуйста, ознакомьтесь с каталогом нашего React-bookstore.
                        </Typography>
                        <NavLink to={'/books'}>
                            <ThemeProvider theme={theme}>
                                <CardActions>
                                    <Button startIcon={<HomeOutlinedIcon/>}
                                            color={'primary'}
                                            variant={"contained"}
                                            className={classes.button}
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


