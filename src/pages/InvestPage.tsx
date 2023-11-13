import { Box, Card, CardMedia, Container, Typography, Button} from "@mui/material";
import FeatureCard from "../components/Cards/FeatureCard";


const InvestPage = () => {
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
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "0px", background: "black", paddingBlock: "50px" }}>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                    marginRight: "10%"
                }}>
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>Invest in Our Vision: Shaping the Future of Home Design</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                    IVRIS is not just a service of the present; it's a vision for the future. As technology marches forward, we are committed to expanding the possibilities for home customization and design.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "0px", background: "white", paddingBlock: "50px" }}>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                    marginRight: "10%",
                    paddingBlock: "50px",
                }}>
                    <Box sx = {{
                        background: "black",
                        padding: 10
                    }}>
                        <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>Future Innovations - Redefining the Possibilities</Typography>
                        <Typography sx={{ fontSize: 30, color: "white" }}>
                        We're committed to staying at the forefront of technology and design. Our future is bright and explore future features in the future tab.
                        </Typography>
                    </Box>
                    <Box sx = {{
                        background: "black",
                        marginLeft: "10%",
                        padding: 10
                    }}>
                        <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>Patents - Protecting Our Innovations</Typography>
                        <Typography sx={{ fontSize: 30, color: "white" }}>
                        IVRIS takes pride in safeguarding its groundbreaking technologies and features, ensuring that our investors are backed by a strong foundation of intellectual property.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                    marginRight: "10%",
                    background: "black",
                    
                    padding: 10
                }}>
                    <Box>
                        <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>Interviews and Research - A Commitment to Excellence</Typography>
                        <Typography sx={{ fontSize: 30, color: "white" }}>
                        We continuously engage in interviews and in-depth research to understand the evolving needs and preferences of our users. This data-driven approach informs our product development and ensures that we're constantly aligning with market trends.
                        </Typography>    
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                    marginRight: "10%",
                    marginTop: "3%",
                    background: "black",
                    padding: 10
                }}>
                    <Box>
                        <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>Partnerships - Expanding Horizons</Typography>
                        <Typography sx={{ fontSize: 30, color: "white" }}>
                        To achieve our vision, we actively seek strategic partnerships with leading furniture manufacturers, real estate agencies, and interior design experts. These collaborations will further enrich our platform and offer users access to an even wider range of furniture options.
                        </Typography>    
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                    marginRight: "10%",
                    marginTop: "3%",
                    background: "black",
                    padding: 10
                }}>
                    <Box>
                        <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>Future Business Plan - A Roadmap to Success</Typography>
                        <Typography sx={{ fontSize: 30, color: "white" }}>
                        Our future business plan includes expanding our user base, enhancing our platform's features, and exploring global markets. We are poised for remarkable growth and welcome investors who share our vision to join us on this exciting journey. 
                        </Typography>    
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                    marginRight: "10%",
                    marginTop: "3%",
                    background: "black",
                    padding: 10
                }}>
                    <Box>
                        <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>A Word to Investors - Be a Part of Our Story</Typography>
                        <Typography sx={{ fontSize: 30, color: "white" }}>
                        We're looking for partners who believe in the future of personalized living spaces and the potential of IVRIS. Your investment is an endorsement of our mission and a key driver of our success. Together, we can redefine the world of real estate and design. Join us, and let's create a world of uniquely personalized and immersive homes.
                        </Typography>
                        <Button
                            sx = {{
                                padding: 5,
                                background: "grey",
                                marginTop: "5%"
                            }}
                            onClick={() => console.log("Sponsered!")}>
                            Sponser Us
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};


export default InvestPage;