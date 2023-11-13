import { Box, Card, CardMedia, Container, Typography, Divider, Button, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import {useState} from 'react';

const AboutPage = () => {
    const [email, setEmail] = useState("");
    const [fullName, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


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
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic"}}>Our Mission</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                    IVRIS is on a mission to reshape the real estate industry by offering an innovative platform that empowers home buyers to personalize their dream homes in a virtual, collaborative, and immersive environment while saving realtors money
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
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic"}}>About IVRIS</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                    Our journey is guided by a visionary founder who, as a Realtor in California and a student at UC Irvine, recognized the challenges of traditional home staging. This inspired the creation of a transformative service, which aims to revolutionize the real estate experience. With a commitment to providing an innovative platform that integrates. 
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
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic"}}>Birth of idea</Typography>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                    IVRIS was born from a critical observation:  the conventional practice of physical home staging, while effective, comes at a significant financial cost and lacks customization. After interviewing many experienced Realtors, we knew this was a burden for both agents and home buyers. This realization was made all the more clear to me while hosting an open house, when prospective buyers grappled with the challenge of visualizing the possibilities within vacant properties. IVRIS seeks to bridge this gap with an innovative solution.
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
            <Divider />
            {/* <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0px", background: "black", paddingBlock: "50px" }}>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "left", 
                    justifyContent: "left", 
                    textAlign: "left", 
                    marginLeft: "10%",
                    marginRight: "10%"
                }}>
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic"}}>Let Us Hear You!</Typography>
                    <Box sx={{backgroundColor: "darkgray"}}>
                        <Typography sx={{ fontSize: 30, color: "white", fontStyle: "oblique"}}>Mail Us at @email.com</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    marginLeft: "10%",
                    marginRight: "10%",
                    backgroundColor: "grey",
                }}>
                    <Typography sx={{ fontSize: 50, color: "white", fontStyle: "italic"}}>Send Us A Message!</Typography>
                    <TextField
                        sx = {{fontSize: 20, color: "white", marginTop: "10%"}}
                        label="Email"
                        value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}}
                    />
                    <TextField 
                        sx = {{fontSize: 20, color: "white", marginTop: "10%"}}
                        label="Full Name"
                        value={fullName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value)}}
                    />
                    <TextField 
                        sx = {{fontSize: 20, color: "white", marginTop: "10%"}}
                        label="Subject"
                        value={subject} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setSubject(event.target.value)}}
                    />
                    <TextField 
                        sx = {{fontSize: 20, color: "white", marginTop: "10%"}}
                        label="Message"
                        multiline
                        minRows={4}
                        fullWidth
                        margin="normal"
                        value={message} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setMessage(event.target.value)}}
                    />
                    <Button size="medium" sx={{backgroundColor: "darkgrey", marginTop: "10%"}}>SEND</Button>
                </Box>
            </Box> */}
        </Container>
    );
};


export default AboutPage;