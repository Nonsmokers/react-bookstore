import {connect} from "react-redux";
import {setSearchQuery} from "../../actions/filter";
import Header from "./Header";

const mapStateToProps = (state) => ({
    totalPrice: state.cartReducer.items.reduce((total,book) =>total+book.price,0),
    count: state.cartReducer.items.length
});

const mapDispatchToProps = dispatch => ({
    setSearchQuery: value => dispatch(setSearchQuery(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);



