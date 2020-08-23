import React from 'react';
import s from "../../App.module.css";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from "@material-ui/core/CircularProgress";
import BookCardContainer from "./BookCardContainer";

const BooksGrid = (props) => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={6} className={s.cardGrid}>
                {!props.isReady
                    ? <CircularProgress color="secondary" className={s.preloader}/>
                    : props.books.map((card, i) => (
                        <Grid item key={card} xs={12} sm={6} lg={4}>
                            <BookCardContainer key={i} {...card}/>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
}

export default BooksGrid;
