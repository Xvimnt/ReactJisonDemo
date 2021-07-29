import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
}));

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Typography>
                        © 2021 Copyright:<a href="https://github.com/Xvimnt"> Javier Monterroso</a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}