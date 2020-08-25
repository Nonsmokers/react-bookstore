import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popover from "@material-ui/core/Popover";
import CartHeader from "./CartHeader";
import InputHeader from "./InputHeader";
import Sidebar from "./SidebarHeader";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#9aa68f',
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
    const [PopoverOpen, setPopoverOpen] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isPopoverOpen = Boolean(PopoverOpen);

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
    const handlePopoverOpen = (event) => {
        setPopoverOpen(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setPopoverOpen(null);
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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
            <MenuItem onClick={handlePopoverOpen}>
                <IconButton color="inherit">
                    <Badge badgeContent={props.count} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
                <p>ShoppingCartIcon</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
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
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit"
                                    onClick={handlePopoverOpen}>
                            <Badge badgeContent={props.count} color="secondary">
                                <ShoppingCartIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                    &nbsp;
                    <Popover
                        anchorEl={PopoverOpen}
                        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                        transformOrigin={{vertical: 'top', horizontal: 'right'}}
                        open={isPopoverOpen}
                        onClose={handlePopoverClose}
                    >
                        {props.items.map(book => <CartHeader key={book} title={props.title}/>)}

                    </Popover>
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


