import React from "react";

import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import TopAppBar from "./TopAppBar/TopAppBar";
import BottomAppBar from "./BottomAppBar/BottomAppBar";

const useStyles = makeStyles({
    appBar: {
        backgroundColor: "#171717",
        height: "173px",
    },
});

const AppBarComp = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <TopAppBar />
            </Toolbar>
            <Toolbar>
                <BottomAppBar />
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComp;
