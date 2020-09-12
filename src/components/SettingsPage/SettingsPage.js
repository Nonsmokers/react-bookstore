import React from 'react';
import {createUseStyles} from 'react-jss';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '60%',
        boxShadow: '0px 2px 10px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
    wrapper:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        minWidth: '100vw',
        minHeight: '90vh'
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const SettingsPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <Card className={classes.root}>
                <CardContent className={classes.title}>
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

export default SettingsPage;


