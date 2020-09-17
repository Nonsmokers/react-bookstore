import React from 'react';
import {IconButton, Badge} from '@material-ui/core';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const HeaderCart = (props) => {
    return (
        <IconButton>
            <Badge badgeContent={props.count} color="secondary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}

export default HeaderCart;


