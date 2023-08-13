import { Box, AppBar, Button, Container, ButtonProps, Toolbar, Typography, IconButton, MenuItem, Menu, Tooltip, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { modifiedText } from "../../utils/textHelper";
import { pageToURLMap } from "../../types/pageMap";

const pages = ['Home', 'About', 'Product', 'Invest', 'Future', "Contact Us"];
const settings = ['Profile', 'Account', 'Dashboard', 'Login'];



const AppHeader = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="fixed">
            <Container maxWidth="xl" sx={{ marginRight: "0px", marginLeft: "0px", minWidth: "100%" }}>
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {modifiedText("Place Logo Here")}
                        </Typography>

                        <Box sx={{ justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
                            {pages.map((page) => (
                                <Typography 
                                    component="a"
                                    href={pageToURLMap.get(page)}
                                    sx={{ 
                                        color: "black", 
                                        textDecoration: 'none', 
                                        width: "80px", 
                                        padding: "20px",
                                        fontSize: 24,
                                        '&:hover': {
                                            textDecoration: "None",
                                        },
                                    }}
                                    textAlign="center"
                                >
                                    {page}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};


export default AppHeader;