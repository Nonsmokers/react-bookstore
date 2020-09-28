import React from 'react';
import CartEmpty from "./CartEmpty/CartEmpty";
import CartListContainer from "./CartListItem/CartListItemContainer";
import {List} from "@material-ui/core";
import s from "./CartPage.module.css";
import CartFormContainer from "./CartForm/CartFormContainer";

const CartPage = (props) => {

    return (
        <>
            <div className={s.root}>
                {props.count === 0 ? <CartEmpty/> :
                    <div className={s.wrapper}>
                        <List className={s.list}>
                            {props.items.map((book, id) => <CartListContainer key={id} {...book} />)}
                        </List>
                        <div className={s.form}>
                            <CartFormContainer/>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}


export default CartPage;
