import React from "react";
import FeatureCard from "../../components/Cards/FeatureCard";
import { Box, Container } from "@mui/material";



const MainPage = () => {
    return (
        <div className="content">
            <div className="">
                <Box sx={{
                    
                }}>
                    <p>REVOLUTIONIZING</p>
                    <p>VIRTUAL TOUR</p>
                    <p>EXPERIENCES</p>
                </Box>
            </div>
            <Container className="feature-cards" sx={{
                 display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingX: "0px",
                gap: "20px",
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
            </Container>
        </div>
    );
};


export default MainPage;