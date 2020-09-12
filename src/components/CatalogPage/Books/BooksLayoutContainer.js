import {setBooks} from "../../../actions/books";
import {connect} from "react-redux";
import BooksLayout from "./BooksLayout";
import orderBy from "lodash/orderBy";

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'price_low': {
            return orderBy(books, 'price', 'asc');
        }
        case 'price_high': {
            return orderBy(books, 'price', 'desc');
        }
        case 'author': {
            return orderBy(books, 'author', 'asc');
        }
        case 'popular': {
            return orderBy(books, 'rating', 'desc');
        }
        default :
            return books;
    }
};

const filterBooks = (books, searchQuery) => books.filter(
    b =>
        b.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        b.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
)

const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery), filterBy)
}

const mapStateToProps = (state) => ({
    books: state.booksReducer.items && searchBooks(
        state.booksReducer.items,
        state.filterReducer.filterBy,
        state.filterReducer.searchQuery
    ),
    isReady: state.booksReducer.isReady,
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksLayout);
