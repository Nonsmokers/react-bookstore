import {connect} from "react-redux";
import {setSearchQuery} from "../../redux/actions/filter";
import Header from "./Header";

const mapStateToProps = (state) => ({
    totalPrice: state.cartReducer.items.reduce((total, book) => total + book.price, 0),
    count: state.cartReducer.items.length,
    items: state.cartReducer.items,
    isAuthenticated: !!state.authReducer.token
});

const mapDispatchToProps = dispatch => ({
    setSearchQuery: value => dispatch(setSearchQuery(value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);



