import React from 'react';
import s from './HomePage.module.css';
import {NavLink} from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import {createMuiTheme, ThemeProvider, Button, Typography} from "@material-ui/core";

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}}});
const HomePage = () => {
    return (
        <div className={s.root}>
            <div className={s.wrapper}>
                <div className={s.title_wrapper}>
                    <Typography variant="h1" component="h1">Добро пожаловать в <br/> React-bookstore</Typography>
                    <Typography variant="body2" component="h2">Вы наконец заглянули к нам в поисках доброй пары-тройки
                        книг? Мы бесконечно рады, ведь именно затем, дорогой читатель, книжный интернет-магазин
                        React-bookstore и собрал огромную библиотеку.</Typography>
                    <ThemeProvider theme={theme}>
                        <NavLink to={`/books`}>
                            <Button startIcon={<HomeOutlinedIcon/>}
                                    color={'primary'}
                                    variant={"contained"}
                            > Приступить к покупкам </Button>
                        </NavLink>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
