import {setBooks} from "../../actions/books";
import {connect} from "react-redux";
import BooksGrid from "./BooksGrid";
import orderBy from "lodash/orderBy";

const sortBy=(books, filterBy)=>{
    switch (filterBy) {
        case 'all':{
            return books
        }
        case 'price_low':{
            return orderBy(books, 'price', 'asc')
        }
        case 'price_high':{
            return orderBy(books, 'price', 'desc')
        }
        case 'author':{
            return orderBy(books, 'author', 'asc')
        }
        default :
            return books
    }
}

const mapStateToProps = (state) => ({
    cards: sortBy(state.booksReducer.items, state.booksReducer.filterBy),
    isReady: state.booksReducer.isReady,
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksGrid);
