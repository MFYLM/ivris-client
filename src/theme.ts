import { Theme, createTheme, makeStyles } from '@mui/material/styles';


export const DefaultTheme = createTheme({
    // color
    palette: {
        primary: {
            main: "#ffffff",
            light: "",
            dark: ""
        },
        secondary: {
            main: '#000000',
            light: "",
            dark: ""
        },
        text: {
            primary: "#000000",
        },
        action: {
            disabledBackground: '',
            disabled: 'white',
        },
    },
    // text
    typography: {
        fontSize: 15,
        fontFamily: "sans-serif",
    },
    components: {

    }
});



