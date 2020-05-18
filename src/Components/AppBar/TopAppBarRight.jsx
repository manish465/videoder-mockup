import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

const TopAppBarRight = () => {
    return (
        <>
            <IconButton style={{ color: "#ffffff" }}>
                <GetAppIcon />
            </IconButton>
            <IconButton>
                <Avatar src={} />
            </IconButton>
        </>
    );
};

export default TopAppBarRight;
