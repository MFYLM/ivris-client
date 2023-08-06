import { createTheme } from '@mui/material/styles';
import { red, purple } from '@mui/material/colors';


const DefaultTheme = createTheme({
    // color
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: red[500],
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

export default DefaultTheme;