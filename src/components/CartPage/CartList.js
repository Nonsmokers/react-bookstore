import React from 'react';
import s from "./CartList.module.css";
import {removeBookFromCart} from "../../actions/cart";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    sectionMobile: {
        display: 'flex',
        maxWidth: '75px',
        width: '25%',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
}));

const CartList = (props) => {

    const classes = useStyles();
    const [count, setCount] = React.useState('');
    const handleChangeCount = (event) => {
        setCount(event.target.value);
    };

    return (
        <>
            <div className={s.root}>
                <Card className={s.wrapper}>
                    <CardContent className={s.card}>
                        <ListItem>
                            <img src={props.image} className={classes.sectionMobile} alt={'main'}/>
                            <ListItem className={s.title}>
                                <ListItemText primary={props.title}/>
                                <ListItemText primary={props.author}/>
                            </ListItem>
                            <ListItem className={s.control}>
                                <FormControl>
                                    <InputLabel shrink>
                                        Количество
                                    </InputLabel>
                                    <Select value={count}
                                            onChange={handleChangeCount}
                                            displayEmpty
                                            inputProps={{'aria-label': 'Without label'}}
                                    >
                                        <MenuItem value="">
                                            1
                                        </MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                {/*<ListItemText className={s.price} primary={`${props.price} руб.`}/>*/}
                            </ListItem>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" onClick={removeBookFromCart.bind(this, props.id)}>
                                    <DeleteIcon onClick={removeBookFromCart.bind(this, props.id)} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </CardContent>
                </Card>
            </div>

        </>
    )
}

export default CartList;