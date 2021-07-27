import React from 'react';
// ---------------------
// Material Components
// ---------------------
import { Grid, Button } from '@material-ui/core';
import {
    Build
} from '@material-ui/icons'
// ---------------------
// Bootstrap Components
// ---------------------

// ---------------------
// My Components
// ---------------------
import Input from './input'

// ---------------------
// Html
// ---------------------
function Editors() {
    return (
        <Grid container spacing={1} style={{ height: "100%" }} >
            <Grid item md={5} xs={5}>
                <Input />
            </Grid>
            <Grid item md={2} xs={2} justifyContent="center">
                <Grid container >
                    <Grid item md={2} xs={2}></Grid>
                    <Grid item md={8} xs={8} justifyContent="center">
                        <Button startIcon={<Build />} color="primary-dark" variant="contained"> Compile</Button>
                    </Grid>
                    <Grid item md={2} xs={2}></Grid>
                </Grid>
            </Grid>
            <Grid item md={5} xs={5}>
                <Input />
            </Grid>
        </Grid>
    );
}

export default Editors;
