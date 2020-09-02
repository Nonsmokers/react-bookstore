import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: '22px'
    }
}));

function SortBooks({setFilter}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const SortMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const SortMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <Button onClick={SortMenuOpen}>
                Сортировать книги <ArrowDropDownOutlinedIcon/>
            </Button>
            <Menu anchorEl={anchorEl} keepMounted
                  open={Boolean(anchorEl)} onClose={SortMenuClose}
            >
                <MenuItem onClick={setFilter.bind(this, 'all')}>Все</MenuItem>
                <MenuItem onClick={setFilter.bind(this, 'popular')}>Популярные</MenuItem>
                <MenuItem onClick={setFilter.bind(this, 'price_high')}>Цене(убывание)</MenuItem>
                <MenuItem onClick={setFilter.bind(this, 'price_low')}>Цене(возрастанение)</MenuItem>
                <MenuItem onClick={setFilter.bind(this, 'author')}>Автор</MenuItem>
            </Menu>
        </div>
    );
}

export default SortBooks;