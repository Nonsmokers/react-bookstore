import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setBooks} from "../../actions/books";
import find from "lodash/find";
import CircularProgress from "@material-ui/core/CircularProgress";
import ItemPage from "./ItemPage";
import {addBookToCart} from "../../actions/cart";

class ItemPageContainer extends React.Component {
    componentWillMount() {
        const {setBooks} = this.props;
            axios.get('/booksData.json').then(response => {
                setBooks(response.data)
            })
    }

    render() {
        const bookId = this.props.match.params.id;
        const book = find(this.props.books, {'id': +bookId});
        return (!this.props.isReady) ? <CircularProgress /> :
            <>
                <ItemPage book={book} addBookToCart={this.props.addBookToCart}/>
            </>
    }
}

const mapStateToProps = (state) => ({
    books: state.booksReducer.items,
    isReady: state.booksReducer.isReady
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books)),
    addBookToCart: value => dispatch(addBookToCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer);





