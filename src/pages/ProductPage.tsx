import { Box, Card, CardMedia, Container, Typography } from "@mui/material";

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
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic", alignItems: 'center'}}>Our Main Product</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                    Our tailored furniture customization service lets you create personalized home furnishings in a virtual, interactive environment, easily share your designs, and collaborate with others to perfect your ideal living space. 
                    Explore endless possibilities and turn your dream home into reality with our convenient online customization platform. 
                    </Typography>
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
export default ProductPage;