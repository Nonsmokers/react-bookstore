import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from '@material-ui/icons/Delete';

const CartHeader = () => {
    return(
        <List>
            <ListItem>
                <ListItemText
                    primary="Single-line item"
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end"
                                aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    )
}

export default CartHeader;


