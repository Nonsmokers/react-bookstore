import {connect} from "react-redux";
import {setFilter} from "../../../redux/actions/filter";
import SortBooks from "./SortBooks";

const mapStateToProps = (state) => ({
    filterBy: state.filterReducer.filterBy
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortBooks);



