import React from 'react';
import {IconButton, ListItemText, ListItem} from '@material-ui/core';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from '@material-ui/icons/Delete';
import {removeBookFromCart} from "../../actions/cart";


const CartItem = (props) => {
    return (
            <ListItem>
                <img src={props.image} />
                <ListItemText primary={props.title}/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={removeBookFromCart}>
                        <DeleteIcon onClick={removeBookFromCart}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

    )
}

export default CartItem;


