import { Content } from "./components/Content/Content"
import { Header } from "./components/Header/Header"
import { Grid } from '@mui/material';

export const Project = () => {
    const root = {
        background:'rgb(22, 27, 37)',
        height:'100vh',
        card:{
            maxWidth: "900px",
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '40px',
            boxSizing: 'borderBox',
            // width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minWidth: '300px',
        }
    }
    return (
        <Grid container sx={{...root}}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{...root.card}}
                >
                <Header />
                <Content />
            </Grid>
        </Grid>
    )
}