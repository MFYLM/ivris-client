import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import React, { FC } from "react";


interface ActionCardProps {
    title: string,
    buttonText: string,
    description: string,
    imgPath: string,
    onClick: () => void,
};


const ActionCard: FC<ActionCardProps> = ({ title, buttonText, description, imgPath, onClick }) => {

    return (
        <Card sx={{ maxWidth: 400, maxHeight: 200, borderRadius: "8px", boxShadow: "", background: "black" }}>
            <Typography variant="body2" sx={{ fontSize: 20, color: "white" }}>{title}</Typography>
            <Box sx={{ 
                display: "flex",
                flexDirection: "row",
                padding: "50px",
            }}>
                <CardMedia 
                    sx={{
                        display: "flex",
                        width: "40%",
                        height: "40%",
                    }}
                    component="img"
                    height="140"
                    image="../../assets/images/cards/contemplative-reptile.jpg"
                    alt={title}
                />
                <Box sx={{ 
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" sx={{ color: "white" }}>
                            {description}
                        </Typography>
                    </CardContent>
                    <Button onClick={onClick}>
                        <Typography sx={{ background: "white", borderRadius: "8px", padding: "5px", color: "black" }}>
                            {buttonText}
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Card>
    );
};


export default ActionCard;