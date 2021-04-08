import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import Typography from "@material-ui/core/Typography";
import MainLayout from "../../components/container/MainLayout";
import MangaListComponent from "../../components/Manga/MangaListComponent";
import AddMangaComponent from "../../components/Manga/AddManga";
import {useQuery} from "@apollo/client";
import {GET_MANGA} from "../../queries/manga.queries"
import Pagination from "@material-ui/lab/Pagination";
import MangaListLoadingComponent from "../../components/Manga/MangaListLoadingComponent";

const styles = (theme) => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 16px',
    },
    pagination: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
});

const mangaMenu = [{
    name: "List",
    slug: "/manga"
},{
    name: "Genre",
    slug: "/manga/genre"
}]

const MangaMainPage = (props) => {
    const { classes } = props;

    const [page, setPage] = React.useState(1)

    const limit = 5;
    const { loading, error, data } = useQuery(GET_MANGA, {
        variables:{
            skip: page,
            limit
        }
    });

    const onChangePage = (e, value) => {
        setPage(value);
    }

    return error?(<h1>Error</h1>):(
        <MainLayout title={"Manga List"} menu={mangaMenu}>
            <Paper className={classes.paper}>
                <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <SearchIcon className={classes.block} color="inherit" />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    placeholder="Search manga"
                                    InputProps={{
                                        disableUnderline: true,
                                        className: classes.searchInput,
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <AddMangaComponent/>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <RefreshIcon className={classes.block} color="inherit" />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div className={classes.contentWrapper}>
                    <Typography color="textSecondary" align="center">
                        {loading?(
                            <>
                                <MangaListLoadingComponent/>
                                <MangaListLoadingComponent/>
                                <MangaListLoadingComponent/>
                                <MangaListLoadingComponent/>
                                <MangaListLoadingComponent/>
                            </>
                        ):data.getManga.items.map((dt, index)=>{
                            return <MangaListComponent data={dt} key={index}/>
                        })}
                        {loading?null:(
                            <Grid container justify="space-around">
                                <div className={classes.pagination}>
                                    <Pagination count={data.getManga.count} shape="rounded" page={page} onChange={onChangePage} />
                                </div>
                            </Grid>
                        )}
                    </Typography>
                </div>
            </Paper>
        </MainLayout>
    )
}

MangaMainPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MangaMainPage);