import React from "react";
import FeatureCard from "../../components/Cards/FeatureCard";
import { Box, Card, CardMedia, Container, Typography } from "@mui/material";



const MainPage = () => {
    return (
        <Container sx={{ marginTop: "80px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0px" }}>
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "20px",
                    marginRight: "20px" 
                }}>
                    <Typography sx={{ fontSize: 30 }}>REVOLUTIONIZING</Typography>
                    <Typography sx={{ fontSize: 30 }}>VIRTUAL TOUR</Typography>
                    <Typography sx={{ fontSize: 30 }}>EXPERIENCE</Typography>
                </Box>
                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 700,
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
            </Box>
            <Box className="feature-cards" sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingX: "0px",
                gap: "20px",
                paddingTop: "50px"
            }}>
                <FeatureCard 
                    title="green iguana"
                    text="Allow users to navigate inside their virtual house and apartments"
                    imgPath=""
                    cardAction={() => {
                        console.log("you click one of the feature!");
                    }}
                />
                <FeatureCard 
                    title="green iguana"
                    text="Allow users to navigate inside their virtual house and apartments"
                    imgPath=""
                    cardAction={() => {
                        console.log("you click one of the feature!");
                    }}
                />
                <FeatureCard 
                    title="green iguana"
                    text="Allow users to navigate inside their virtual house and apartments"
                    imgPath=""
                    cardAction={() => {
                        console.log("you click one of the feature!");
                    }}
                />
            </Box>
        </Container>
    );
};


export default MainPage;