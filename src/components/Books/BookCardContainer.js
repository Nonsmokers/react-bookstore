import {connect} from "react-redux";
import {addBookToCart} from "../../actions/cart";
import BookCard from "./BookCard";

const mapStateToProps = (state) => ({
    totalPrice: state.cartReducer.items.reduce((total,book) =>total+book.price,0),
    count: state.cartReducer.items.length
});

const mapDispatchToProps = dispatch => ({
    addBookToCart: value => dispatch(addBookToCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);



