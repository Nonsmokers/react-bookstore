import React from 'react';
import s from './HomePage.module.css';
import {NavLink} from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Button from "@material-ui/core/Button";

import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({palette: {primary: {main: '#8c957b'}}});
const HomePage = () => {
    return (
        <div className={s.root}>
            <div className={s.wrapper}>
                <div className={s.title_wrapper}>
                    <h1>Добро пожаловать в React-bookstore</h1>
                    <h2>Вы наконец заглянули к нам в поисках доброй пары-тройки книг? Мы бесконечно рады,
                        ведь именно затем, дорогой читатель, книжный интернет-магазин React-bookstore и собрал
                        огромную библиотеку.</h2>
                    <ThemeProvider theme={theme}>
                        <NavLink to={`/books/`}
                                 className={s.button}>
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
