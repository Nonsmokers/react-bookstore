import React from 'react';
import CartItem from "./CartItem";
import {createUseStyles} from 'react-jss';
import {List} from "@material-ui/core";
import CartEmpty from "./CartEmpty";

const useStyles = createUseStyles({
    root: {},
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
    },
    wrapperTitle: {
        marginTop: '20px',
        color: '#9aa68f',
    }
})

const CartPage = (props) => {
    const classes = useStyles()
    return (
        <>
            {props.count === 0 ?
                <div className={classes.wrapper}>
                    <CartEmpty />
                </div> :

                <List> {props.items.map(book => <CartItem key={book}   {...book}/>)} </List>}
        </>
    );
}

export default CartPage;