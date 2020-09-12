import {connect} from "react-redux";
import {removeBookFromCart} from "../../actions/cart";
import CartList from "./CartList";

const mapStateToProps = (state) => ({
    totalPrice: state.cartReducer.items.reduce((total, book) => total + book.price, 0),
    count: state.cartReducer.items.length,
    items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => ({
    removeBookFromCart: id => dispatch(removeBookFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
