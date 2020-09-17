import React from 'react';
import s from "./CartList.module.css";
import {Card, CardContent, IconButton, ListItemText, ListItem} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const CartList = (props) => {
    return (
        <>
            <div className={s.root}>
                <Card className={s.wrapper}>
                    <CardContent className={s.card}>
                        <ListItem className={s.card_container}>
                            <img src={props.image} className={s.image} alt={'main'}/>
                            <ListItem className={s.title}>
                                <ListItemText primary={props.title}/>
                                <ListItemText primary={props.author}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText className={s.price} primary={`${props.price} руб.`}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText className={s.price} primary={`${props.addedCount} шт.`}/>
                            </ListItem>
                            <IconButton edge="end">
                                <DeleteIcon onClick={props.removeBookFromCart.bind(this, props.id)}/>
                            </IconButton>
                        </ListItem>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default CartList;