import React from 'react';
import {connect} from "react-redux";
import {setBooks} from "../../actions/books";
import Footer from "../../components/CatalogPage/Footer/Footer";
import SortBooks from "./SortBooks/SortBooksContainer";
import BooksGridContainer from "../../components/CatalogPage/Books/BooksGridContainer";
import * as axios from "axios";

class CatalogPage extends React.Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/booksData.json').then(response => {
            setBooks(response.data)
        })
    }

    render() {
        return (
                <div>
                    <SortBooks/>
                    <BooksGridContainer/>
                    <Footer/>
                    }
                </div>
        );
    }
}

const mapStateToProps = () => ({
    /* initialized: state.app.initialized */
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);




