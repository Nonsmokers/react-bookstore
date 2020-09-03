import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import CartHeader from "./CartHeader";
import InputHeader from "./InputHeader";
import Sidebar from "./SidebarHeader";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    cart: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    grow: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#C9D5B1',
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
            <MenuItem onClick={handleMenuClose}>Профиль</MenuItem>
            <MenuItem onClick={handleMenuClose}>Заказы</MenuItem>
            <MenuItem onClick={handleMenuClose}></MenuItem>
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
            <NavLink to={'/Cart'} className={classes.cart}>
                <MenuItem>
                    <CartHeader count={props.count}/>
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
                    <Sidebar edge="start"
                             className={classes.menuButton}
                             color="inherit">
                    </Sidebar>

                    <Typography className={classes.title} variant="h6" noWrap>
                        React-bookstore
                    </Typography>
                    <InputHeader setSearchQuery={props.setSearchQuery}/>
                    <div className={classes.grow}/>
                    <NavLink to={'/Cart'}>
                        <div className={classes.sectionDesktop}>
                            <CartHeader count={props.count}/>
                        </div>
                    </NavLink>&nbsp;
                    <Typography className={classes.title} variant="h6" noWrap>
                        Итого: &nbsp;  <b>{props.totalPrice}</b> &nbsp; руб.
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


