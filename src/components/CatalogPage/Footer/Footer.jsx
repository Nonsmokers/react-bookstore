import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    footer: {
        margin: '20px'
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                React-bookstore
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                <a href={'https://github.com/Nonsmokers'}>https://github.com/Nonsmokers</a>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {new Date().getFullYear()}
            </Typography>
        </footer>
    )
}


export default Footer