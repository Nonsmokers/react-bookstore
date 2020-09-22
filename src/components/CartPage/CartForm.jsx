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
const options = [
    {value: "post", label: "Почтой"},
    {value: "delivery: ", label: "Доставка курьером"},
    {value: "pickup", label: "Самовывоз"}
]

const CartForm = (props) => {

    const {register, control, handleSubmit, reset, errors} = useForm({defaultValues});
    const [open, setOpen] = React.useState(false);

    const onSubmit = (values) => {
        console.log(values)
        reset(defaultValues);
        onSnackbarsOpen()
    };

    const onSnackbarsOpen = () => {
        setOpen(true);
    };
    const onSnackbarsClose = (event, reason) => {
        if (reason === 'clickaway') {
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
                                        <Grid item><AccountCircle color={'secondary'}/></Grid>
                                        <Grid item>
                                            <Controller as={TextField} type={'text'}
                                                        name='name' label="Фамилия Имя"
                                                        control={control}
                                                        ref={register({
                                                            required: "this is a required",
                                                            maxLength: {
                                                                value: 2,
                                                                message: "Max length is 2"
                                                            }
                                                        })}
                                            />
                                            {errors.firstName && <p>{errors.firstName.message}</p>}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} alignItems="flex-end" className={s.item}>
                                        <Grid item><PhoneIcon color={'secondary'}/></Grid>
                                        <Grid item>
                                            <Controller as={TextField} type="text"
                                                        name="phone" label="Телефон"
                                                        control={control} required/>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} alignItems="flex-end" className={s.item}>
                                        <Grid item><MailIcon color={'secondary'}/></Grid>
                                        <Grid item>
                                            <Controller as={TextField} type='email' name='email'
                                                        label="Ваш e-mail" control={control} required/>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} alignItems="flex-end" item
                                          className={s.itemSelectWrapper}>
                                        <Grid item><DirectionsCarIcon color={'secondary'}/></Grid>
                                        <Grid item className={s.itemSelect}>
                                            <FormControl spacing={1} className={s.formControl}>
                                                <InputLabel>Способ доставки</InputLabel>
                                                <Controller
                                                    as={Select}
                                                    options={options}
                                                    name="FormSelect"
                                                    isClearable
                                                    control={control}
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

