import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}))

const Sidebar = () => {
    const classes = useStyles();
    const [navbarOpen, setNavbarOpen] = React.useState(null);

    const isNavbarOpen = Boolean(navbarOpen);

    const handleNavbarOpen = (event) => {
        setNavbarOpen(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setNavbarOpen(null);
    };

    const list = () => (
        <div>
            <List className={classes.list}>
                <NavLink exact to="/home">
                    <ListItem onClick={handleNavbarOpen}>
                        <ListItemIcon>
                            <HomeOutlinedIcon/>
                            Главная
                        </ListItemIcon>
                    </ListItem>
                </NavLink>

                <NavLink exact to="/">
                    <ListItem onClick={handleNavbarOpen}>
                        <ListItemIcon>
                            <MenuBookOutlinedIcon/>
                            Каталог
                        </ListItemIcon>
                    </ListItem>
                </NavLink>
            </List>
            <Divider/>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                    >
                        <MenuIcon onClick={handleNavbarOpen}/>
                    </IconButton>
                    <Drawer anchor={anchor} open={isNavbarOpen} onClose={handlePopoverClose}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
export default Sidebar;


