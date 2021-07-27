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
    EmojiSymbols,
    Apps,
    ErrorOutline,
    BubbleChart
} from '@material-ui/icons'

function Reports() {

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
            <IconButton  edge="start" color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
                    <Button startIcon={<BubbleChart />}>
                        AST
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button startIcon={<EmojiSymbols />}>
                        Tabla de Tokens
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button startIcon={<ErrorOutline />}>
                        Tabla de Errores
                    </Button>
                </MenuItem>
            </Menu>
        </>
    );
}

export default Reports;
