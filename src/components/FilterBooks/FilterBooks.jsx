import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function FilterBooks({setFilter}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button onClick={handleClick}>
                Сортировать
            </Button>
            <Menu
                id="simple-menu" anchorEl={anchorEl} keepMounted
                open={Boolean(anchorEl)} onClose={handleClose}
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

export default FilterBooks;