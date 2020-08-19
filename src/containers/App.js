import {setBooks} from "../actions/books";
import {connect} from "react-redux";
import App from "../App";
import {setFilter} from "../actions/filter";

const mapStateToProps = (state) => ({
    cards: state.booksReducer.items,
    isReady: state.booksReducer.isReady,
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books)),
    setFilter: filter => dispatch(setFilter(filter))
    //dispatch(action creator(object))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



