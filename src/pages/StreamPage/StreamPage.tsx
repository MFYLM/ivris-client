import { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Button } from "rsuite";
import { MetaProvider} from "pixel-streaming";


const PixelStreaming = () => {
    

    return (
        <>
        </>
    );
};


const StreamPage = () => {
    return (
        <MetaProvider>
            <PixelStreaming />
        </MetaProvider>
    );
};


export default StreamPage;