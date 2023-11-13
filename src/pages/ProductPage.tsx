import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCard from "../components/Cards/CarouselCard";
import {useState} from 'react';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const ProductPage = () => {
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
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "0px", background: "black", paddingBlock: "50px", marginBottom: "5%"}}>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                    marginRight: "10%"
                }}>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                    Are you tired of traditional home staging's limitations and the high costs? With our cutting-edge platform, you gain access to a world of features that make property presentation more powerful and customizable than ever before. 
                    </Typography>
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
            </Box>
            <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={100}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <Box>
                    {/* <Typography sx={{ fontSize: 30, color: "black" }}>Item 1</Typography> */}
                    <CarouselCard 
                        title="Virtual Walkable Environment"
                        text="Walk freely through your future home and get a feel for its dimensions and layout."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Customizable Furniture in Environment"
                        text="Choose from a wide range of furniture styles."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Collaborate with Others"
                        text="Collaborate and make informed decisions together."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Floorplan that Updates with Furniture"
                        text="Floorplan dynamically updates as you add and adjust furniture."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Dollhouse View of Home"
                        text="Explore every nook and cranny from a bird's-eye view."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Photos that Update with Furniture"
                        text="Photos update to reflect your changes."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Change to Day/Night"
                        text="Fine-tune the lighting of your virtual property."
                    />
                </Box>
            </Carousel>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0px", background: "black", paddingBlock: "50px", marginBottom: "5%", marginTop: "5%"}}>
                <Box sx={{
                        display: "flex", 
                        flexDirection: "row", 
                        alignItems: "left", 
                        justifyContent: "left", 
                        textAlign: "left", 
                        marginLeft: "3%",
                        marginRight: "10%",
                        marginBottom: "5%",
                        background: "black",
                }}>
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic"}}>
                    Ready to Experience the Future of Real Estate? Get a Quote Today and take the first step toward revolutionizing the way you present and personalize properties.
                    </Typography>
                </Box>
                <Box sx={{marginRight: "10%"}}>
                    <Typography sx={{ marginLeft: "5%", fontSize: 50, color: "white", fontStyle: "italic"}}>
                    Fillable form address, rooms, size, etc
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};
export default ProductPage;