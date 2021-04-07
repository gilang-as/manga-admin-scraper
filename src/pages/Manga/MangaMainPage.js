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
import MangaListComponent from "../../components/MangaListComponent";
import PaginationComponent from "../../components/PaginationComponent";
import AddMangaComponent from "../../components/Manga/AddManga";

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
    return(
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
                                    placeholder="Search by email address, phone number, or user UID"
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
                        <MangaListComponent/>
                        <MangaListComponent/>
                        <MangaListComponent/>
                        <Grid container justify="space-around">
                            <PaginationComponent/>
                        </Grid>
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