import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCard from "../components/Cards/CarouselCard";

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

const FuturePage = () => {
    return (
        <Container sx={{ 
            marginTop: "74px", 
            minWidth: "100%",
            marginRight: "0px",
            marginLeft: "0px",
            marginBottom: "10%",
            "@media (min-width:600px)": {
                paddingLeft: "0px",
                paddingRight: "0px",
            },
            }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0px", background: "black", paddingBlock: "50px", marginBottom: "5%"}}>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                    marginRight: "10%"
                }}>
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>The Evolution of IVRIS - Our Vision</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                    Our cutting-edge furniture customization platform offers users the unique opportunity to design and personalize their dream living spaces in an immersive virtual environment, all while collaborating with others to shape the future of interior design. With a bright horizon ahead, we're actively developing new features and innovations to redefine the way people furnish their homes, making this investment an exciting gateway to the future of personalized home design.                    </Typography>
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
                        title="Purchasable Furniture: Real Furniture, Realized Dreams"
                        text="You'll be able to bring your virtual vision to life with real, purchasable furniture available directly through our platform. Instead of hours of searching you are only a click away."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Account Creation - Your Design Journey, Your Personalized Space"
                        text="Users will be able to save their design layouts. By creating an account you can keep iterating your dream home and make changes in the future."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Enter Current Furniture Dimensions/Type/Color - Realism Meets Customization"
                        text="You'll be able to input information about your existing furniture and we will find similar pieces bridging the gap between your possessions and your vision for the future."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Day/Night Slider - Tailoring Your Ambiance"
                        text="IVRIS is looking to enhance the realism of your virtual tour with a day/night slider. This feature will enable you to adjust the lighting and ambiance in your virtual home."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Seamless Indoor-Outdoor Transitions - Where Boundaries Disappear"
                        text="You can explore your dream home seamlessly, from the cozy confines of the interior to the fresh expanses of the outdoor space."
                    />
                </Box>
                <Box>
                    <CarouselCard 
                        title="Virtual Home Party - Social media of the future"
                        text="Invite friends and family into your virtual home and interact like never before."
                    />
                </Box>
            </Carousel>
                
        </Container>
    );
};


export default FuturePage;