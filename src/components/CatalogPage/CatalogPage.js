import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setBooks} from "../../redux/actions/books";
import SortBooks from "./SortBooks/SortBooksContainer";
import BooksGridContainer from "./Books/BooksLayoutContainer";
import Footer from "../../components/CatalogPage/Footer/Footer";
import {removeBookFromCart} from "../../redux/actions/cart";

class CatalogPage extends React.Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('https://react-bookstore-4ee5d.firebaseio.com/books.json').then(response => {
            setBooks(response.data)
        })
    }

    render() {
        return (
            <div>
                <SortBooks/>
                <BooksGridContainer/>
                <Footer/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books)),
    removeBookFromCart: id => dispatch(removeBookFromCart(id))
});

export default connect(null, mapDispatchToProps)(CatalogPage);



