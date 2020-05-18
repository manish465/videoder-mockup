import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import avatarImage from "../../../Assets/avatarImage.png";

const TopAppBarRight = () => {
    return (
        <>
            <IconButton style={{ color: "#ffffff" }}>
                <GetAppIcon />
            </IconButton>
            <IconButton>
                <Avatar src={avatarImage} />
            </IconButton>
        </>
    );
};

export default TopAppBarRight;
