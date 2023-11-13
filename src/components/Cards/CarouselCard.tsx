import { Card, CardMedia, CardActionArea, CardContent, Typography } from "@mui/material";
import { title } from "process";
import React, { FC } from "react";
import { textSpanEnd } from "typescript";


interface CarouselCardProps {
    title: string,
    text: string,
};


const CarouselCard: FC<CarouselCardProps> = ({ title, text}) => {

    return (
        <Card sx={{ justifyContent: "center", height: 700, width: 600, marginLeft: "auto", "marginRight": "auto", borderRadius: 4, boxShadow: "", background: "black" }}>
            <CardContent>
                <Typography sx = {{fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center', paddingBlock: "50px"}}>
                    {title}
                </Typography>
                <Typography sx = {{fontSize: 30, color: "white", fontStyle: "italic", alignItems: 'center'}}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
        // <div className='card'>
        //     <h2>{title}</h2>
        //     <p>{text}</p>
        // </div>
    );
};


export default CarouselCard;