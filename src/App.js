import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setBooks} from "./actions/books";
import Footer from "./components/Footer/Footer";
import SortBooks from "./components/FilterBooks/FilterBooksContainer";
import BooksGridContainer from "./components/Books/BooksGridContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

class App extends React.Component {

    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/booksData.json').then(response => {
            setBooks(response.data)
        })
    }

    render() {
        return (
            <>
                <HeaderContainer/>
                <SortBooks/>
                <BooksGridContainer/>
                <Footer/>
                }
            </>
        );
    }
}

const mapStateToProps = () => ({
    /* initialized: state.app.initialized */
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books)),
    /* books => dispatch(action creator(object)) */
});

export default connect(mapStateToProps, mapDispatchToProps)(App);




