import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import * as axios from "axios";
import s from "./App.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

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
                                ? <CircularProgress color="secondary" className={s.preloader}/>
                                : cards.map((card, i) => (
                                    <Grid item key={card} xs={12} sm={6} lg={4}>
                                        <BookCard key={i} {...card}/>
                                    </Grid>
                                ))}
                        </Grid>
                    </Container>
                </main>
                <Footer/>
                }
            </>
        );
    }
}

export default App;



