import React from 'react';
import s from "../CartPage/CartForm/CartForm.module.css";
import {useForm} from "react-hook-form";
import {Card, CardActions, Button, TextField, createMuiTheme, ThemeProvider, Typography, Grid} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import {connect} from "react-redux";
import {auth} from "../../actions/auth";

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}, secondary: {main: '#626856'}}});

const AuthPage = (props) => {

    const defaultValues = {
        email: "",
        password: "",
        returnSecureToken: true
    };

    const {register, handleSubmit, errors, getValues} = useForm({defaultValues});

    const onSubmit = (values) => {
        console.log(values);
    };

    const loginHandler = () => {
        props.auth(
            getValues("email"),
            getValues("password"),
            true
        )
    }
    const registerHandler = () => {
        props.auth(
            getValues("email"),
            getValues("password"),
            false
        )
    }

    return (<>
            <div>
                <div className={s.root}>
                    <div>
                        <Typography variant="h4" noWrap className={s.header}>Оформление заказа</Typography>
                        <Card className={s.wrapperCard}>
                            <ThemeProvider theme={theme}>
                                <form onSubmit={handleSubmit(onSubmit)}>
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
                                    <Grid container spacing={1} alignItems="flex-end" className={s.item}>
                                        <Grid item><PhoneIcon color={'secondary'}/></Grid>
                                        <Grid item>
                                            <TextField type="password" name="password" label="Пароль"
                                                       required
                                                       inputRef={register({
                                                           required: "Это поле обязательное",
                                                           minLength: {
                                                               value: 9,
                                                               message: "Минимальная длина 8"
                                                           },
                                                           pattern: {
                                                               value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                                               message: "Минимальная длина 8"
                                                           }
                                                       })}/>
                                            {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
                                        </Grid>
                                    </Grid>
                                    <CardActions className={s.buttonWrapper}>
                                        <Button color={'primary'}
                                                type="submit"
                                                onClick={loginHandler}
                                                variant={"contained"}
                                        >Войти</Button>
                                    </CardActions>
                                    <CardActions className={s.buttonWrapper}>
                                        <Button color={'primary'}
                                                type="submit"
                                                onClick={registerHandler}
                                                variant={"contained"}
                                        >Зарегистрироваться</Button>
                                    </CardActions>
                                </form>
                            </ThemeProvider>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapDispatchToProps = dispatch => ({
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
});

export default connect(null, mapDispatchToProps)(AuthPage);

