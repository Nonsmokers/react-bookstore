import {connect} from "react-redux";
import CartPage from "./CartPage";
import uniqBy from "lodash/uniqBy";

const mapStateToProps = (state) => ({
    count: state.cartReducer.items.length,
    items: uniqBy(state.cartReducer.items, i => i.id)
});

export default connect(mapStateToProps, null)(CartPage);
