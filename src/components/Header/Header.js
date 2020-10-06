import React from 'react';
import {NavLink} from "react-router-dom";
import HeaderCart from "./HeaderCart";
import HeaderInput from "./HeaderInput";
import Sidebar from "../Sidebar/Sidebar";
import {makeStyles,MenuItem, Typography, IconButton, Toolbar, AppBar, Menu} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    cart: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    grow: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#626856',
        height: '60px'
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {props.isAuthenticated ?
                <div>
                    <MenuItem onClick={handleMenuClose}>Профиль</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Заказы</MenuItem>
                </div> :
                <NavLink to={'/auth'}>
                    <MenuItem onClick={handleMenuClose}>Войти</MenuItem>
                </NavLink>
            }
        </Menu>
    );
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <NavLink to={'/cart'} className={classes.cart}>
                <MenuItem>
                    <HeaderCart count={props.count}/>
                    <p>Корзина</p>
                </MenuItem>
            </NavLink>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static"
                    className={classes.header}>
                <Toolbar>
                    <Sidebar edge="start" color="inherit"/>

                    <Typography className={classes.title} variant="h6" noWrap>
                        React-bookstore
                    </Typography>
                    <HeaderInput setSearchQuery={props.setSearchQuery}/>
                    <div className={classes.grow}/>
                    <NavLink to={'/cart'}>
                        <div className={classes.sectionDesktop}>
                            <HeaderCart count={props.count}/>
                        </div>
                    </NavLink>&nbsp;
                    <Typography className={classes.title} variant="h6" noWrap>
                        Итого:&nbsp;<b>{props.totalPrice}</b>&nbsp;руб.
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

export default Header;


