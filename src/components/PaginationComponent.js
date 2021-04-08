import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    pagination: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function PaginationComponent() {
    const classes = useStyles();

    const onChangePage = (e, value) => {
        console.log(value)
    }

    return (
        <div className={classes.pagination}>
            <Pagination count={2} shape="rounded" onChange={onChangePage} />
        </div>
    );
}