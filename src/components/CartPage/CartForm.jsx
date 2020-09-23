import React from 'react';
import s from "./CartForm.module.css";
import {Controller, useForm} from "react-hook-form";
import {
    Card, CardActions, MenuItem, FormControl, Button, Select, InputLabel, TextField, createMuiTheme,
    ThemeProvider, Typography, Grid
} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}, secondary: {main: '#626856'}}});

const defaultValues = {
    name: "",
    phone: "",
    email: "",
    FormSelect: ""
};

const CartForm = (props) => {

    const {register, control, handleSubmit, reset, errors} = useForm({defaultValues});
    const [open, setOpen] = React.useState(false);

    const onSubmit = (values) => {
        console.log(values);
        reset(defaultValues);
        onSnackbarsOpen();
        props.removeBookFromCart()
    };

    const onSnackbarsOpen = () => {
        setOpen(true);
    };
    const onSnackbarsClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <div>
                <div className={s.root}>
                    <div>
                        <Typography variant="h6" noWrap>
                            <h2>Оформление заказа</h2>
                        </Typography>
                        <Card className={s.wrapperCard}>
                            <ThemeProvider theme={theme}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Grid container spacing={1} alignItems="flex-end" className={s.item}>
                                        <Grid item><AccountCircle color={"secondary"}/></Grid>
                                        <Grid item>
                                            <TextField type="text" name="name" label="Фамилия и имя"
                                                       required
                                                       inputRef={register({
                                                           required: "Это поле обязательное",
                                                           maxLength: {
                                                               value: 15,
                                                               message: "Максимальная длина 15"
                                                           },
                                                           minLength: {
                                                               value: 2,
                                                               message: "Минимальная длина 2"
                                                           },
                                                       })}
                                            />
                                            {errors.name && <p className={s.error}>{errors.name.message}</p>}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} alignItems="flex-end" className={s.item}>
                                        <Grid item><PhoneIcon color={'secondary'}/></Grid>
                                        <Grid item>
                                            <TextField type="tel" name="phone" label="Телефон (ххх хх хх)"
                                                       required
                                                       inputRef={register({
                                                           required: "Это поле обязательное",
                                                           maxLength: {
                                                               value: 12,
                                                               message: "Максимальная длина 12"
                                                           },
                                                           minLength: {
                                                               value: 9,
                                                               message: "Минимальная длина 9"
                                                           },
                                                           pattern: {
                                                               value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/,
                                                               message: "Введите в формате (ххх хх хх)"
                                                           }
                                                       })}/>
                                            {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} alignItems="flex-end" className={s.item}>
                                        <Grid item><MailIcon color={'secondary'}/></Grid>
                                        <Grid item>
                                            <TextField name='email'
                                                       label="E-mail" required
                                                       inputRef={register({
                                                           required: "Это поле обязательное",
                                                           pattern: {
                                                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                               message: "Введите корректный e-mail"
                                                           }
                                                       })}
                                            />
                                            {errors.email && <p className={s.error}>{errors.email.message}</p>}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} alignItems="flex-end" item
                                          className={s.itemSelectWrapper}>
                                        <Grid item><DirectionsCarIcon color={'secondary'}/></Grid>
                                        <Grid item className={s.itemSelect}>
                                            <FormControl spacing={1} className={s.formControl}>
                                                <InputLabel>Способ доставки</InputLabel>
                                                <Controller as={Select}
                                                            name="FormSelect"
                                                            control={control}
                                                            isClearable
                                                            required
                                                >
                                                    <MenuItem value={'Почтой'}>Почтой</MenuItem>
                                                    <MenuItem value={'Доставка курьером'}>Доставка курьером</MenuItem>
                                                    <MenuItem value={'Самовывоз'}>Самовывоз</MenuItem>
                                                </Controller>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="h5" color={'secondary'} className={s.itemPrice}>
                                        <h5>Всего товаров: <b>{props.count}</b></h5>
                                        <h5>Итого: <b>{props.totalPrice}</b>руб.</h5>
                                    </Typography>
                                    <CardActions className={s.buttonWrapper}>
                                        <Button color={'primary'}
                                                type="submit"
                                                variant={"contained"}
                                        > Отправить заказ </Button>
                                    </CardActions>
                                    <Snackbar open={open} autoHideDuration={6000} onClose={onSnackbarsClose}>
                                        <Alert onClose={onSnackbarsClose} severity="success">
                                            Заказ успешно выполнен!
                                        </Alert>
                                    </Snackbar>
                                </form>
                            </ThemeProvider>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartForm;

