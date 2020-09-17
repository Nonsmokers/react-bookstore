import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./CartForm.module.css";
import {
    Card, CardActions, MenuItem, FormControl, Button, Select, InputLabel, TextField, createMuiTheme,
    ThemeProvider, Typography, Grid
} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}, secondary: {main: '#626856'}}});

const CartForm = (props) => {

    const [email, setEmail] = React.useState(null);

    const handleChange = (event) => {
        setEmail(event.target.value);
    };
    return (
        <>
            <div className={s.root}>
                <form>
                    <Typography variant="h6" noWrap>
                        <h2>Оформление заказа</h2>
                    </Typography>
                    <Card className={s.wrapperCard}>
                        <ThemeProvider theme={theme}>
                            <Grid container spacing={1} alignItems="flex-end" className={s.item}>
                                <Grid item><AccountCircle color={'secondary'}/></Grid>
                                <Grid item>
                                    <TextField type={'text'} id="input-with-icon-grid" label="Фамилия Имя Отчество"/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end" className={s.item}>
                                <Grid item><PhoneIcon color={'secondary'}/></Grid>
                                <Grid item>
                                    <TextField type={'phone'} id="input-with-icon-grid" label="Телефон"/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end" className={s.item}>
                                <Grid item><MailIcon color={'secondary'}/></Grid>
                                <Grid item>
                                    <TextField type={'email'}
                                               value={email}
                                               id="input-with-icon-grid"
                                               label="Ваш E-mail"
                                               onChange={handleChange}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end" item className={s.itemSelectWrapper}>
                                <Grid item><DirectionsCarIcon color={'secondary'}/></Grid>
                                <Grid item className={s.itemSelect}>
                                    <FormControl spacing={1} className={s.formControl}>
                                        <InputLabel>Способ доставки</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                        >
                                            <MenuItem value={'Почтой'}>Почтой</MenuItem>
                                            <MenuItem value={'Доставка курьером'}>Доставка курьером</MenuItem>
                                            <MenuItem value={'Самовывоз'}>Самовывоз</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Typography variant="h5" color={'secondary'} className={s.itemPrice}>
                                <h5>Всего товаров: <b>{props.count}</b></h5>
                                <h5>Итого: <b>{props.totalPrice}</b>руб.</h5>
                            </Typography>
                            <NavLink to={'/books'} className={s.item}>
                                <CardActions className={s.buttonWrapper}>
                                    <Button color={'primary'}
                                            variant={"contained"}
                                    > Отправить заказ </Button>
                                </CardActions>
                            </NavLink>
                        </ThemeProvider>
                    </Card>
                </form>
            </div>
        </>
    )
}

export default CartForm;


