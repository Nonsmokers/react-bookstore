import React from 'react';
import {createUseStyles} from 'react-jss';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '80%'
    },
    wrapper:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'500px'
    }
})

const Settings = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        Информация
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Версия приложения: <strong>1.0</strong>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Settings;


