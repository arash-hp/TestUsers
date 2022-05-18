import { Grid, Typography, Button, IconButton, Toolbar, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Menu, ListItemIcon, ListItemText } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import { Formik, Field, Form } from 'formik';

import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export const Content = () => {
    const [currency, setCurrency] = useState('EUR');
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const root = {
        width: '800px',
        maxHeigh: '500px',
        margin: '0 auto',
        padding: '24px',
        display: 'flex',
        boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
        background: 'rgb(33, 43, 53)',
        borderRadius: '16px'
    }
    // const initialValue = { logo: '', link: '' }
    const handleSubmit = (values) => {
        console.log(values)
    }
    return (
        <Grid container sx={{ ...root }}>
            <Toolbar sx={{ width: '100%', flexDirection: 'column', padding: '0 !important' }}>
                <Grid container flexDirection={'column'}>
                    <Typography sx={{ fontSize: 8, fontWeight: 300 }}>
                        مسیرهای ارتباطی
                    </Typography>
                    <Button sx={{
                        width: 115, justifyContent: 'flex-start', fontSize: 9, color: 'rgb(255, 168, 46)', marginTop: '16px', padding: 0, "&:hover": {
                            backgroundColor: "rgb(255, 168, 46 ,.2)",
                            cursor: "pointer"
                        }
                    }}>
                        <IconButton>
                            <AddIcon sx={{ fontSize: 9, color: 'rgb(255, 168, 46)' }} />
                        </IconButton>
                        افزودن مسیر ارتباطی
                    </Button>
                </Grid>
            </Toolbar>
            <Grid container sx={{ background: 'rgb(52, 61, 72)', borderRadius: '16px' }}>
                <Grid container flexDirection={'column'} sx={{ padding: '16px' }}>
                    <Typography sx={{ fontSize: 11, color: 'rgb(255, 255, 255)' }}>
                        افزودن مسیر ارتباطی
                    </Typography>
                    <Formik
                        initialValue={{ logo:'',link:''}}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Grid container flexWrap={'nowrap'} alignItems={'baseline'}
                                gap={'4px'}>
                                <Field name='logo'>{(field) => {
                                    return <TextField
                                        {...field}
                                        name='logo'
                                        id="outlined-select-currency"
                                        select
                                        label="نوع"
                                        size="small"
                                        sx={{
                                            flexBasis: '33%',
                                            maxWidth: '33%',
                                            color: 'black'
                                        }}
                                    >
                                      
                                        <MenuItem value='Telegram' disableRipple>
                                            <TelegramIcon />
                                            Telegram
                                        </MenuItem>
                                        <MenuItem value='Facebook' disableRipple>
                                            <FacebookIcon />
                                            Facebook
                                        </MenuItem>
                                        <MenuItem value='Instagram' disableRipple>
                                            <InstagramIcon />
                                            Instagram
                                        </MenuItem>
                                    </TextField>
                                }}
                                </Field>
                                <Field name='link'>{(field) => {
                                    return <TextField
                                        {...field}
                                        name='link'
                                        margin="normal"
                                        fullWidth
                                        label="لینک"
                                        size="small"
                                        sx={{
                                            flexBasis: '66%',
                                            maxWidth: '66%',
                                        }}
                                    />
                                }}</Field>
                            </Grid>
                            <Grid container justifyContent={'flex-end'}>
                                <Button size='small' sx={{ '&:hover': { background: 'rgb(255, 168, 46 ,.2)' }, color: 'rgb(255, 168, 46)', border: '1px solid rgb(255, 168, 46,.2)', padding: 1, fontSize: 9, lineHeight: .5 }}>انصراف</Button>
                                <Button sx={{ background: 'rgb(255, 168, 46)', '&:hover': { background: 'rgb(178, 117, 32)' }, color: '#ffffff', padding: 1, marginLeft: 1, fontSize: 9 }}>ثبت مسیر ارتباطی</Button>
                            </Grid>
                        </Form>
                    </Formik>
                </Grid>
                {/* <Grid>
                    Input Result
                </Grid> */}
            </Grid>
        </Grid >
    )
}