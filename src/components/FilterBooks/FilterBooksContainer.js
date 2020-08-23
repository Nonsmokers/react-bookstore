import {connect} from "react-redux";
import {setFilter} from "../../actions/filter";
import FilterBooks from "./FilterBooks";

const mapStateToProps = (state) => ({
    filterBy: state.filterReducer.filterBy
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBooks);



