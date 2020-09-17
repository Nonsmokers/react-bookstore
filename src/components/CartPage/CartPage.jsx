import React from 'react';
import CartEmpty from "./CartEmpty";
import CartListContainer from "./CartListContainer";
import CartForm from "./CartForm";
import {makeStyles, List} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    wrapper: {
        display: "flex",
        width: '100%'
    },
    form: {
        width: '40%'
    }
}))
const CartPage = (props) => {

    const classes = useStyles();
    return (
        <>
            <div>
                {props.count === 0 ? <CartEmpty/> :
                    <div className={classes.wrapper}>
                        <List className={classes.list}>
                            {props.items.map(book => <CartListContainer key={book} {...book} />)}
                        </List>
                        <div className={classes.form}>
                            <CartForm count={props.count} totalPrice={props.totalPrice}/>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default CartPage;