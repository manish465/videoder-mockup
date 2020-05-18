import React, { useState } from "react";
import { Tabs, Tab, MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: { primary: { main: "#ffffff" }, text: { secondary: "#9E9E9E" } },
});

const BottomAppBar = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <MuiThemeProvider theme={theme}>
            <Tabs
                variant='standard'
                value={activeTab}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                scrollButtons='desktop'>
                <Tab label='HOME' />
                <Tab label='MUSIC' />
                <Tab label='SUBSCRIPTIONS' />
                <Tab label='SPORTS' />
                <Tab label='GAMING' />
                <Tab label='NEWS' />
                <Tab label='LIVE' />
                <Tab label='YOUTUBE SPOTLIGHT' />
            </Tabs>
        </MuiThemeProvider>
    );
};

export default BottomAppBar;
