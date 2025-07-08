import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#5e35b1',
        },
        secondary: {
            main: '#f50057',
        },
    },
    error: {
        main: red.A400
    }
})