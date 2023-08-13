import React from "react";
import FeatureCard from "../../components/Cards/FeatureCard";
import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import ActionCard from "../../components/Cards/ActionCard";


const MainPage = () => {

    return (
        <Container sx={{ 
            marginTop: "74px", 
            minWidth: "100%",
            marginRight: "0px",
            marginLeft: "0px",
            "@media (min-width:600px)": {
                paddingLeft: "0px",
                paddingRight: "0px",
            },
            }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0px", background: "black", paddingBlock: "50px" }}>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                }}>
                    <Typography sx={{ fontSize: 35, color: "white" }}>REVOLUTIONIZING</Typography>
                    <Typography sx={{ fontSize: 35 }}>VIRTUAL TOUR</Typography>
                    <Typography sx={{ fontSize: 35 }}>EXPERIENCE</Typography>
                </Box>
                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 700,
                        marginRight: "10%",
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
            </Box>
            <Box className="feature-cards" sx={{
                display: "flex",
                marginTop: "20px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "100%",
                padding: "20px",
                gap: "20px",
                paddingTop: "50px",
                marginX: "5%",
                borderRadius: "8px",
                background: "black"
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "space-around",
                    maxWidth: "100%",
                    padding: "20px",
                }}
            >
                <ActionCard 
                    title="Product"
                    description="blah blah blah"
                    buttonText="Service"
                    imgPath=""
                    onClick={() => console.log("go to service") }
                />
                <ActionCard 
                    title="Invest"
                    description="blah blah blah"
                    buttonText="Support"
                    imgPath=""
                    onClick={() => console.log("go to support") }
                />
            </Box>
        </Container>
    );
};


export default MainPage;