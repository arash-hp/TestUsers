import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { faIR } from '@mui/material/locale'
import '../fonts/FontIran/font.module.css';

const Theme = (props) => {
  const theme = createTheme({
    typography: {
      fontFamily: "IRANSans",
    },
    direction: 'rtl',
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  }, faIR);


  return (
    <ThemeProvider theme={theme} >
      {props.children}
    </ThemeProvider>
  );
}

export { Theme };