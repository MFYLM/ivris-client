import { Box, AppBar, Button, Container, ButtonProps, Toolbar, Typography, IconButton, MenuItem, Menu, Tooltip, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { modifiedText } from "../../utils/textHelper";


const AppFooter = () => {
    const navigate = useNavigate();
    
    const help = ['Home', 'About', 'Future', 'Sponser', 'Contact Us']
    const account = ['Sign In', 'Join']
    const pages = ['Join Newsletter', 'Social Media', 'Blog']
    const legalInfo = ['Copyright', 'All Rights Reserved', 'Terms and Conditions', 'Privacy']
    return (
        <AppBar sx={{position: "absolute", bottom: 0, top: 'auto'}}>
            <Container maxWidth="xl" sx={{marginLeft: "0px", marginRight: "0px", minWidth: "100%", "marginTop": "10px"}}>
                <Box sx={{
                    display: "flex", 
                    justifyContent: 'space-evenly'
                }}>
                    <Box sx={{ 
                        justifyContent: "flex-start", 
                        flexDirection: "column", 
                        display: "flex"
                    }}>
                        {help.map((page) => (
                            <Button key={page} sx={{ color: "black", justifyContent: "flex-start"}}>
                                <Typography>{page}</Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ 
                        justifyContent: "flex-start", 
                        flexDirection: "column", 
                        display: "flex"
                    }}>
                        {account.map((page) => (
                            <Button key={page} sx={{ 
                                color: "black", 
                                justifyContent: "flex-start"
                            }}>
                                <Typography>{page}</Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ 
                        justifyContent: "flex-start", 
                        flexDirection: "column", 
                        display: "flex"
                    }}>
                        {pages.map((page) => (
                            <Button key={page} sx={{ 
                                color: "black", 
                                justifyContent: "flex-start"
                            }}>
                                <Typography>{page}</Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ 
                        justifyContent: "flex-start", 
                        flexDirection: "column", 
                        display: "flex"
                    }}>
                        <Typography>Ivris</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    marginLeft: "0px", 
                    marginRight: "0px", 
                    alignItems: "center",
                }}>
                    {legalInfo.map((page) => (
                        <Button key={page} sx={{ 
                            color: "black", 
                            justifyContent: "flex-start",
                        }}>
                            <Typography>{page}</Typography>
                        </Button>
                    ))}
                </Box>
            </Container>
        </AppBar>
    );
};

export default AppFooter;