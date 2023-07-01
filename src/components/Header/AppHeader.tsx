import React, { Dispatch, SetStateAction, useState } from "react";
import { Box } from "@mui/material";


interface AppHeaderProps {
    tab: string;
    setTab: Dispatch<SetStateAction<string>>;
};


const AppHeader = (props: AppHeaderProps) => {
    const { tab, setTab } = props;
    

    return (
        <Box>
            <p>You are at {tab}</p>
        </Box>
    );
};


export default AppHeader;