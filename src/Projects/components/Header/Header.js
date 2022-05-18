import { Toolbar, Typography, Grid, Button, IconButton, Paper } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
export const Header = () => {
    const root   = {
        width: '800px',
        maxHeigh: '500px',
        margin: '0 auto',
        padding: '16px 0',
        display: 'flex',
        justifyContent: 'center',
    }

    // Define theme settings

    const lightTheme = createTheme({
        palette: {
            mode: "light",
            background: {
                paper: "#f2f2f2",
            },
            text: {
                primary: "#11111",
            },
        },
    });

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            background: {
                paper: "#222",
            },
            text: {
                primary: "#fff",
            },
        },
    });
    // The light theme is used by default
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // This function is triggered when the Switch component is toggled
    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        console.log(isDarkTheme)
    };

    return (
        // <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
            // <Paper>
                <Grid container sx={{ ...root }}>
                    <Toolbar sx={{ width: '100%', justifyContent: 'space-between' ,padding:'0 !important'}}>
                        <Grid container >
                            <Typography sx={{fontSize:14}}>
                                تنظیمات کاربری
                            </Typography>
                        </Grid>
                        <Grid container sx={{ justifyContent: 'end' }}>
                            <Grid item>
                                <Button>English</Button>
                            </Grid>
                            <Grid item>
                                <Button>فارسی</Button>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <DarkModeIcon
                                        checked={isDarkTheme}
                                        onClick={changeTheme}
                                        sx={{color:'#ffffff'}} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Grid>
            // </Paper>
        // </ThemeProvider>

    )
}