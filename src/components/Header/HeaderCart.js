import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const HeaderCart = (props) => {
    return (
        <IconButton >
            <Badge badgeContent={props.count} color="secondary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}

export default HeaderCart;


