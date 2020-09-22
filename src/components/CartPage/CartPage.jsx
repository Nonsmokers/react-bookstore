import React from 'react';
import CartEmpty from "./CartEmpty";
import CartListContainer from "./CartListItemContainer";
import CartForm from "./CartForm";
import {List} from "@material-ui/core";
import s from "./CartPage.module.css";

const CartPage = (props) => {

    return (
        <>
            <div className={s.root}>
                {props.count === 0 ? <CartEmpty/> :
                    <div className={s.wrapper}>
                        <List className={s.list}>
                            {props.items.map(book => <CartListContainer key={book} {...book} />)}
                        </List>
                        <div className={s.form}>
                            <CartForm count={props.count} totalPrice={props.totalPrice}/>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}



export default CartPage;
