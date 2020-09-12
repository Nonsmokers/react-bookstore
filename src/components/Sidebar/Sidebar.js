import React from 'react';
import {NavLink} from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Typography from "@material-ui/core/Typography";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import logo from '../../accets/img/logo.png'
import s from './Sidebar.module.css'

const Sidebar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(null);

    const isNavbarOpen = Boolean(navbarOpen);

    const handleNavbarOpen = (event) => {
        setNavbarOpen(event.currentTarget);
    };
    const handleNavbarClose = () => {
        setNavbarOpen(null);
    };

    const list = () => (
        <List className={s.list}>
            <div className={s.logoContainer}>
                <img src={logo} alt='logo' className={s.logo}/>
            </div>
            &nbsp;
            <NavLink exact to="/" className={s.sidebarText}>
                <ListItem button onClick={handleNavbarOpen}>
                    <ListItemIcon>
                        <HomeOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h5" color="textSecondary">
                            Главная
                        </Typography>
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink exact to="/books" className={s.sidebarText}>
                <ListItem button onClick={handleNavbarOpen}>
                    <ListItemIcon>
                        <MenuBookOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h5" color="textSecondary">
                            Каталог
                        </Typography>
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink exact to="/cart" className={s.sidebarText}>
                <ListItem button onClick={handleNavbarOpen}>
                    <ListItemIcon>
                        <ShoppingCartOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h5" color="textSecondary">
                            Корзина
                        </Typography>
                    </ListItemText>
                </ListItem>
            </NavLink>
            <Divider/>
            <NavLink exact to="/settings" className={s.sidebarText}>
                <ListItem button onClick={handleNavbarOpen}>
                    <ListItemIcon>
                        <SettingsOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h5" color="textSecondary">
                            Настройки
                        </Typography></ListItemText>
                </ListItem>
            </NavLink>
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

export default Sidebar;

