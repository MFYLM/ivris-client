import { Card, CardMedia, CardActionArea, CardContent, Typography } from "@mui/material";
import { title } from "process";
import React, { FC } from "react";


interface FeatureCardProps {
    title: string,
    text: string,
    imgPath: string,
    cardAction: () => void
};


const FeatureCard: FC<FeatureCardProps> = ({ title, text, cardAction, imgPath }) => {

    return (
        <Card sx={{ height: 300, width: 300, borderRadius: 4, boxShadow: "" }}>
            <CardActionArea
                onClick={cardAction}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image="../../assets/images/cards/contemplative-reptile.jpg"
                    alt={title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};


export default FeatureCard;