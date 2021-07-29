import React from 'react';

// ---------------------
// Material Components
// ---------------------
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// ---------------------
// My Components
// ---------------------
import Reports from './reports'
import Options from './options'

// ---------------------
// Styles
// ---------------------
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Reports />
                    <Typography variant="h6" className={classes.title}>
                        Compilador
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
