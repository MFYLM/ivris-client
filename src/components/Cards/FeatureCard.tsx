import { Card, CardMedia, CardActionArea, CardContent, Typography } from "@mui/material";
import React, { FC } from "react";


interface CardProps {
    text: string,
    imgPath: string,
};


const FeatureCard: FC<CardProps> = ({ text, imgPath }) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea 
                onClick={() => {
                    console.log("");
                }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};


export default FeatureCard;