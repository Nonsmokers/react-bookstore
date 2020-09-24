import React from 'react';
import s from "./CartListItem.module.css";
import {Card, CardContent, IconButton, ListItemText, ListItem,List} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {NavLink} from "react-router-dom";

const CartListItem = (props) => {
    return (
        <>
            <div className={s.root}>
                <Card className={s.wrapper}>
                    <CardContent className={s.card}>
                        <List className={s.card_container}>
                            <NavLink className={s.image} to={`/books/${props.id}`}>
                                <img src={props.image} className={s.image} alt={'main'}/>
                            </NavLink>
                            <ListItem className={s.item}>
                                <ListItemText primary={props.title}/>
                                <ListItemText primary={props.author}/>
                            </ListItem>
                            <ListItem className={s.item}>
                                <ListItemText className={s.item} primary={`${props.price} руб.`}/>
                            </ListItem>
                            <ListItem className={s.item}>
                                <ListItemText className={s.item} primary={`${props.addedCount} шт.`}/>
                            </ListItem>
                            <ListItem className={s.button_wrapper}>
                                <IconButton className={s.item} onClick={props.removeBookFromCart.bind(this, props.id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default CartListItem;