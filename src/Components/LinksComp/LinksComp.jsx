import React from "react";

import {
    Paper,
    Avatar,
    Grid,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import data from "../../Data/LinksData";

const LinksComp = () => {
    const newData = data.slice(0, 5);

    console.log(newData);

    return (
        <Paper
            style={{
                margin: "30px",
                height: "220px",
                backgroundColor: "#171717",
                justifyContent: "center",
            }}
            variant='outlined'>
            <Grid
                container
                style={{ marginTop: "20px" }}
                justify='space-around'
                direction='row'>
                {newData.map((el, key) => (
                    <div key={key}>
                        <IconButton>
                            <Avatar
                                style={{ width: "80px", height: "80px" }}
                                src={el.img}
                            />
                        </IconButton>
                        <Typography style={{ color: "#ffffff" }}>
                            {el.name}
                        </Typography>
                    </div>
                ))}
            </Grid>
            <Button
                endIcon={<ChevronRightIcon fontSize='large' />}
                style={{ marginTop: "10px" }}
                color='primary'>
                VIEW ALL SITE
            </Button>
        </Paper>
    );
};

export default LinksComp;
