import React from 'react';
import CartEmpty from "./CartEmpty/CartEmpty";
import CartListContainer from "./CartListItem/CartListItemContainer";
import {List} from "@material-ui/core";
import s from "./CartPage.module.css";
import CartFormContainer from "./CartForm/CartFormContainer";
import AuthPage from "../AuthPage/Authentication";

const CartPage = (props) => {

    return (
        <>
            <div className={s.root}>
                {props.count === 0 ? <CartEmpty/> :
                    <div className={s.wrapper}>
                        <List className={s.list}>
                            {props.items.map((book, id) => <CartListContainer key={id} {...book} />)}
                        </List>
                        {(props.isAuthenticated) ?
                            <div className={s.form}><CartFormContainer/></div> :
                            <div className={s.form}><AuthPage/></div>
                        }
                    </div>
                }
            </div>
        </>
    );
}


export default CartPage;
