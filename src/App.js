import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import {setBooks} from "./actions/books";
import {connect} from "react-redux";
import * as axios from "axios";
import s from "./App.module.css";

class App extends React.Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/booksData.json').then(response => {
            setBooks(response.data)
        })
    }

    render() {
        const {cards, isReady} = this.props

        return (
            <>
                <Header/>
                <main>
                    <Container maxWidth="md">
                        <Grid container spacing={6} className={s.cardGrid}>
                            {!isReady
                                ? 'Загрузка...'
                                : cards.map((card) => (
                                    <Grid item key={card} xs={12} sm={6} lg={4}>
                                        <BookCard {...card}/>
                                    </Grid>
                                ))}
                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <Footer/>
                }
            </>
        );
    }
}

const
    mapStateToProps = (state) => ({
        cards: state.booksReducer.items,
        isReady: state.booksReducer.isReady
    })
const
    mapDispatchToProps = dispatch => ({
        setBooks: books => dispatch(setBooks(books))
        //dispatch(action creator(object))
    })
export default connect(mapStateToProps, mapDispatchToProps)(App);


/*import React from 'react';
import './App.module.css';
import {connect} from "react-redux";
import setBooks from "./actions/books";
import * as axios from "axios";
import BookCard from "./components/BookCard";
import Header from "./components/Header";

class App extends React.Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/booksData.json').then(response => {
            setBooks(response.data)
        })
    }

    render() {
        const {books, isReady} = this.props
        return (
            <>
                <Header/>
                <ul>{!isReady
                    ? 'Загрузка...'
                    : books.map(book => (
                        <li>
                            <BookCard {...book} />
                        </li>
                    ))
                }</ul>
            </>)
    }
}

const mapStateToProps = (state) => ({
    books: state.booksReducer.items,
    isReady: state.booksReducer.isReady
})
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
    //dispatch(action creator(object))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);*/






