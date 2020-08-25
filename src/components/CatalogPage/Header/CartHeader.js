import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from '@material-ui/icons/Delete';

const CartHeader = (props) => {
    return (

        <List>

            <ListItem>
                <ListItemText primary={props.title}/>
                <ListItemSecondaryAction>
                    <IconButton edge="end">
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    )
}

export default CartHeader;


