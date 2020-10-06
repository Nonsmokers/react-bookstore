import {connect} from "react-redux";
import {addBookToCart} from "../../../redux/actions/cart";
import BookCard from "./BookCard";

const mapStateToProps = ({cartReducer},{id}) => ({
    addedCount: cartReducer.items.reduce((total, book) => total + (book.id === id ? 1:0),0)
});

const mapDispatchToProps = dispatch => ({
    addBookToCart: value => dispatch(addBookToCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);



