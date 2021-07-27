import React from 'react';

// ---------------------
// Material Components
// ---------------------
import {
    IconButton,
    Button,
    Menu,
    MenuItem
} from '@material-ui/core'

// ---------------------
// Icons
// ---------------------
import {
    Build,
    Apps
} from '@material-ui/icons'

function Options() {

    // ---------------------
    // Init Component
    // ---------------------
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // ---------------------
    // Html
    // ---------------------
    return (
        <>
            <IconButton edge="start" color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Apps />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <Button startIcon={<Build />}>
                        Compilar
                    </Button>
                </MenuItem>
            </Menu>
        </>
    );
}

export default Options;
