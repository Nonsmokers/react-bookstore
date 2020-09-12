import React from 'react';
import {List} from "@material-ui/core";
import CartEmpty from "./CartEmpty";
import Typography from "@material-ui/core/Typography";
import CartListContainer from "./CartListContainer";

const CartPage = (props) => {
    return (
        <>
            {props.count === 0 ? <CartEmpty/> :
                <List>
                    {props.items.map(book => <CartListContainer key={book} {...book} />)}
                    <Typography variant="h6" noWrap>
                        Итого:&nbsp;<b>{props.totalPrice}</b>&nbsp;руб.
                    </Typography>
                </List>
            }
        </>
    );
}

export default CartPage;