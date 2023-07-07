import { Button } from "@mui/material";
import { useState } from "react";


const StreamPage = () => {
    const [tab, setTab] = useState("Stream");

    
    return (
        <div>
            <Button onClick={() => setTab("abc")}> click me </Button>
        </div>
    );
};


export default StreamPage;