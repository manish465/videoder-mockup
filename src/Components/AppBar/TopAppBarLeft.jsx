import React from "react";

import {
    Grid,
    TextField,
    IconButton,
    MuiThemeProvider,
    createMuiTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const theme = createMuiTheme({
    palette: {
        primary: { main: "#ffffff" },
        text: { secondary: "#9E9E9E", primary: "#ffffff" },
    },
});

const TopAppBarLeft = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <IconButton
                style={{
                    color: "#FFFFFF",
                    marginRight: "20px",
                    marginTop: "15px",
                }}>
                <MenuIcon />
            </IconButton>
            <Grid container spacing={1} alignItems='flex-end'>
                <Grid item>
                    <SearchIcon style={{ marginRight: "10px" }} />
                </Grid>
                <Grid item>
                    <TextField
                        style={{ color: "#ffffff" }}
                        label='Search or Enter URL'
                    />
                </Grid>
            </Grid>
        </MuiThemeProvider>
    );
};

export default TopAppBarLeft;
