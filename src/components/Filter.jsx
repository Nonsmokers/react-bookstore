import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const FilterContainer = () => {
    return
}

function Filter(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItem = (event) => {
        const setFilter = props.setFilter
        setFilter(event.currentTarget)
    };

    return (
        <div>
            <Button onClick={handleClick}>
                Сортировать
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleItem}>Все</MenuItem>
                <MenuItem onClick={handleClose}>Популярные</MenuItem>
                <MenuItem onClick={handleClose}>Цене(возрастанение)</MenuItem>
                <MenuItem onClick={handleClose}>Цене(убывание)</MenuItem>
                <MenuItem onClick={handleClose}>Автор</MenuItem>
            </Menu>
        </div>
    );
}

export default Filter;