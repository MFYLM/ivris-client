import { Box, Button, Container, ButtonProps } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

// interface AppHeaderProps {
//     tab: string;
//     setTab: Dispatch<SetStateAction<string>>;
// };


// const NavigateButton = styled(Button)<ButtonProps>(({ theme }) => ({
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//         backgroundColor: purple[700],
//         transform: "scale(1.3)",

//     },
// }));


const AppHeader = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{
            display: "flex", 
            flexDirection: "row",
            paddingY: "5px", 
            justifyContent: "space-between", 
            borderBottom: "solid", 
            borderWidth: "1px", 
            borderColor: "grey",
            paddingX: "0px",
            minWidth: "100%",
        }}>
            <Box sx={{ display: "flex",  flexDirection: "row", width: "50%", paddingLeft: "30px", justifyContent: "flex-end", gap: "10px" }}>
                <Button variant="outlined" onClick={() => navigate("/")} >Home</Button>
                <Button variant="outlined" onClick={() => navigate("/stream")} >Stream</Button>
            </Box>
            <hr className="h-5 w-0.5 border-none bg-gray-100 dark:bg-gray-800"></hr>
            <Box sx={{ display: "flex", flexDirection: "row", color: "inherit", paddingRight: "30px", justifyContent: "flex-start", gap: "10px" }}>
                <Button variant="outlined" >Log In</Button>
                <Button variant="outlined" >Sign Up</Button>
            </Box>
        </Container>
    );
};


export default AppHeader;