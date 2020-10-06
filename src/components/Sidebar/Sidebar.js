import React from 'react';
import {NavLink} from "react-router-dom";
import {
    Drawer, List, Divider, ListItem, ListItemIcon, IconButton, ListItemText, Typography
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../../accets/img/logo.svg';
import s from './Sidebar.module.css';
import {connect} from "react-redux";

const Sidebar = (props) => {

    const [navbarOpen, setNavbarOpen] = React.useState(null);
    const isNavbarOpen = Boolean(navbarOpen);
    const handleNavbarOpen = (event) => {
        setNavbarOpen(event.currentTarget);
    };
    const handleNavbarClose = () => {
        setNavbarOpen(null);
    };

    const links = [
        {to: '/', label: 'Главная', icon: <HomeOutlinedIcon/>},
        {to: '/books', label: 'Каталог', icon: <MenuBookOutlinedIcon/>},
        {to: '/cart', label: 'Корзина', icon: <ShoppingCartOutlinedIcon/>},
    ];

    if (props.isAuthenticated) {
        links.push({to: '/profile', label: 'Профиль', icon: <AccountCircle/>})
        links.push({to: '/settings', label: 'Настройки', icon: <SettingsOutlinedIcon/>})
        links.push({to: '/logout', label: 'Выйти', icon: <ExitToAppIcon/>})
    } else {
        links.push({to: '/auth', label: 'Войти', icon: <ExitToAppIcon/>})
    }

    let renderLinks = (links) => {
        return links.map((link, index) => {
            return (
                <NavLink key={index} exact to={link.to} className={s.sidebarText}>
                    <Divider/>
                    <ListItem button onClick={handleNavbarOpen}>
                        <ListItemIcon>
                            {link.icon}
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="h5" color="textSecondary">
                                {link.label}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </NavLink>
            )
        })
    }

    const list = () => (
        <List className={s.list}>
            <div className={s.logoContainer}>
                <img src={logo} alt='logo' className={s.logo}/>
            </div>
            {renderLinks(links)}
        </List>
    );

    return (
        <nav>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        onClick={handleNavbarOpen}
                        edge="start"
                        className={s.menuButton}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Drawer anchor={anchor} open={isNavbarOpen} onClose={handleNavbarClose}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </ nav>
    );
}
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authReducer.token
});

export default connect(mapStateToProps)(Sidebar);