import { Box, Card, CardMedia, Container, Typography, Divider } from "@mui/material";

const AboutPage = () => {
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
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic"}}>About Us</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                        IVRIS is focused on providing immersive 3D home tours 
                        to give home buyers...
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
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0px", background: "black", paddingBlock: "50px" }}>
                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 700,
                        marginLeft: "10%",
                        marginRight: "10%",
                    }}
                    alt="Road with years placed on the road."
                    src="https://img.freepik.com/premium-photo/2023-new-year-journey-future-vision-concept_31965-57124.jpg?w=2000"
                />
                <Box sx={{
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "left", 
                    justifyContent: "left", 
                    textAlign: "right", 
                    marginRight: "10%",
                    marginLeft: "10%"

                }}>
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic"}}>Our Vision</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                        Reinventing visual staging.
                    </Typography>
                </Box>
            </Box>
            <Divider />
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
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic"}}>Career at IVRIS</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                        Developing the next generation.
                    </Typography>
                </Box>
                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 700,
                        marginRight: "10%",
                    }}
                    alt="People working in a team."
                    src="https://www.strategydriven.com/wp-content/uploads/Putting-Smiles-on-Faces-3-Tips-for-Happy-Employees.jpg"
                />
            </Box>
        </Container>
    );
};


export default AboutPage;