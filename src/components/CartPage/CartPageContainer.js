import {connect} from "react-redux";
import CartPage from "./CartPage";
import {removeBookFromCart} from "../../actions/cart";
import uniqBy from "lodash/uniqBy";

const mapStateToProps = (state) => ({
    totalPrice: state.cartReducer.items.reduce((total, book) => total + book.price, 0),
    count: state.cartReducer.items.length,
    items: uniqBy(state.cartReducer.items, i=>i.id)
});

const mapDispatchToProps = dispatch => ({
    removeBookFromCart: id => dispatch(removeBookFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
