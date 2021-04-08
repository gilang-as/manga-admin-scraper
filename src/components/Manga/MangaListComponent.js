import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CardActions} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
        textAlign: "left",
        flex: '1 0 auto',
    },
    cover: {
        width: 185,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MangaListComponent({data}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0}>
            <CardMedia
                className={classes.cover}
                image={data.image_url}
                title={data.title}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="h6" component="h6">
                        {data.title}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {data.original_title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {data.status}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <b>Chapters : </b> {data.chapters}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <b>Volumes : </b> {data.volumes}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary">
                        Details
                    </Button>
                    <Button size="small" color="secondary">
                        Chapters
                    </Button>
                </CardActions>
            </div>
        </Card>
    );
}