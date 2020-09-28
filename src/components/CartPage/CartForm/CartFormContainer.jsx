import {connect} from "react-redux";
import {removeBookFromCart, clearCart} from "../../../actions/cart";
import CartForm from "./CartForm";

const mapStateToProps = (state) => ({
    totalPrice: state.cartReducer.items.reduce((total, book) => total + book.price, 0),
    count: state.cartReducer.items.length,
});

const mapDispatchToProps = dispatch => ({
    removeBookFromCart: id => dispatch(removeBookFromCart(id)),
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);
