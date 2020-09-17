import React from 'react';
import {Card, Typography, CardContent} from "@material-ui/core";
import s from "./SettingsPage.module.css";

const SettingsPage = () => {
    return (
        <div className={s.wrapper}>
            <Card className={s.root}>
                <CardContent className={s.title}>
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