import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setBooks} from "./actions/books";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SortBooks from "./components/SortBooks/SortBooksContainer";
import BooksGridContainer from "./components/Books/BooksGridContainer";

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
                <Header/>
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




