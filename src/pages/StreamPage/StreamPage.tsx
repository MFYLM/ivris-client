import React, { useState } from "react";
import AppHeader from "../../components/Header/AppHeader";
import { Button } from "@mui/material";


const StreamPage = () => {
    const [tab, setTab] = useState("Stream");

    
    return (
        <div>
            <AppHeader tab={tab} setTab={setTab} />
            <Button  onClick={() => setTab("abc")}> click me </Button>
        </div>
    );
};


export default StreamPage;