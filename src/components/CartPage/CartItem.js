import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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


