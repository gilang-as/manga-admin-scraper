import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Skeleton} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: '15px',
    },
    details: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 155
    },
    controls: {
        height: 50
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MangaListLoadingComponent() {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0}>
            <Skeleton animation="wave" variant="rect" className={classes.cover} />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="div" key="h5" variant="h5">
                        <Skeleton animation="wave" />
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <Skeleton animation="wave" />
                    </Typography>
                    <Skeleton animation="wave" className={classes.controls} />
                </CardContent>
            </div>
        </Card>
    );
}