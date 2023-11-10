import { Box, Card, CardMedia, Container, Typography } from "@mui/material";

const FuturePage = () => {
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
                    alignItems: "left", 
                    justifyContent: "left", 
                    textAlign: "left", 
                    marginLeft: "10%",
                    marginRight: "10%"
                }}>
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>Our Future Plans</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                    Our cutting-edge furniture customization platform offers users the unique opportunity to design and personalize their dream living spaces in an immersive virtual environment, all while collaborating with others to shape the future of interior design. With a bright horizon ahead, we're actively developing new features and innovations to redefine the way people furnish their homes, making this investment an exciting gateway to the future of personalized home design.                    </Typography>
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
        </Container>
    );
};


export default FuturePage;