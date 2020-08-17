import {setBooks} from "../actions/books";
import {connect} from "react-redux";
import App from "../App";

const mapStateToProps = (state) => ({
    cards: state.booksReducer.items,
    isReady: state.booksReducer.isReady
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
    //dispatch(action creator(object))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



