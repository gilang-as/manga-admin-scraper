import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {Chip, FormControlLabel, Input, Switch, useTheme} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const styles = (theme) => ({
    addUser: {
        marginRight: theme.spacing(1),
    },
    formControlStatus: {
        minWidth: "100%",
    },
    formControlFull: {
        minWidth: "100%",
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
});

const genresData = [
    {
        id: 1,
        name: "Comedy"
    }
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const AddMangaComponent = (props) => {
    const { classes } = props;

    const [title, setTitle] = React.useState(null);
    const [japaneseTitle, setJapaneseTitle] = React.useState(null);
    const [englishTitle, setEnglishTitle] = React.useState(null);
    const [status, setStatus] = React.useState(null);
    const [volumes, setVolumes] = React.useState(null);
    const [chapters, setChapters] = React.useState(null);
    const [publishing, setPublishing] = React.useState(false);
    const [publishedFrom, setPublishedFrom] = React.useState(new Date());
    const [publishedTo, setPublishedTo] = React.useState(new Date());
    const [synopsis, setSynopsis] = React.useState(null);
    const [genres, setGenres] = React.useState([]);
    const [imageUrl, setImageUrl] = React.useState(null);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setGenres(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({
            title,
            japaneseTitle,
            englishTitle,
            status,
            volumes,
            chapters,
            publishing,
            publishedFrom,
            publishedTo,
            synopsis,
            genres,
            imageUrl
        })
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleClickOpen} className={classes.addUser}>
                Add Manga
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Manga</DialogTitle>
                <form className={classes.form} onSubmit={onSubmit}>
                    <DialogContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="title"
                                    name="title"
                                    label="Title"
                                    value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="title_japanese"
                                    name="title_japanese"
                                    label="Japanese Title"
                                    value={japaneseTitle}
                                    onChange={(e)=>setJapaneseTitle(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="title_english"
                                    name="title_english"
                                    label="English Title"
                                    value={englishTitle}
                                    onChange={(e)=>setEnglishTitle(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControlStatus}>
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        required
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Status"
                                        value={status}
                                        onChange={(e)=>setStatus(e.target.value)}
                                    >
                                        <MenuItem value={'aired'}>Aired</MenuItem>
                                        <MenuItem value={'unfinished'}>Unfinished</MenuItem>
                                        <MenuItem value={'finished'}>Finished</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="volumes"
                                    name="volumes"
                                    label="Volumes"
                                    value={volumes}
                                    onChange={(e)=>setVolumes(e.target.value)}
                                    type="number"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="chapters"
                                    name="chapters"
                                    label="Chapters"
                                    value={chapters}
                                    onChange={(e)=>setChapters(e.target.value)}
                                    type="number"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControlLabel
                                    label="Publishing"
                                    control={
                                        <Switch
                                            name="checkedB"
                                            color="primary"
                                            checked={publishing}
                                            onChange={(e)=>setPublishing(e.target.checked)}
                                        />
                                    }
                                />
                            </Grid>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl>
                                        <KeyboardDatePicker
                                            required
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Published From"
                                            format="dd/MM/yyyy"
                                            value={publishedFrom}
                                            onChange={(date)=>setPublishedFrom(date)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl>
                                        <KeyboardDatePicker
                                            required
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Published To"
                                            format="dd/MM/yyyy"
                                            value={publishedTo}
                                            onChange={(date)=>setPublishedTo(date)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControlFull}>
                                    <TextField
                                        required
                                        id="synopsis"
                                        label="Synopsis"
                                        checked={synopsis}
                                        onChange={(e)=>setSynopsis(e.target.value)}
                                        multiline
                                        rows={2}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControlFull}>
                                    <InputLabel id="genres">Genres</InputLabel>
                                    <Select
                                        required
                                        labelId="genres"
                                        id="genres"
                                        multiple
                                        onChange={handleChange}
                                        value={genres}
                                        input={<Input id="genres" />}
                                        renderValue={(selected) => (
                                            <div className={classes.chips}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={genresData.find(o => o.id === value).name} className={classes.chip} />
                                                ))}
                                            </div>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {genresData.map((genre) => (
                                            <MenuItem key={genre.id} value={genre.id} style={getStyles(genre, genres, theme)}>
                                                {genre.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="image_url"
                                    name="image_url"
                                    label="Image Url"
                                    checked={imageUrl}
                                    onChange={(e)=>setImageUrl(e.target.checked)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Grid container justify="space-between" >
                            <Grid item>
                                <TextField
                                    size="small"
                                    id="number"
                                    label="MAL ID"
                                    type="number"
                                    variant="outlined"
                                    style={{
                                        width: "35%"
                                    }}
                                />
                                <Button color="primary" style={{marginLeft: "5px"}}>
                                    Generate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={handleClose} color="secondary">
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}

AddMangaComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddMangaComponent);