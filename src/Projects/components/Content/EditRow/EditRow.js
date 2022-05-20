import { Grid, Typography, TextField, MenuItem, Button, Icon } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useEffect, useState } from 'react';



export const EditRow = ({ handleSubmit, handleEdit, open, onClose, title, item }) => {



    const orderSchema = Yup.object().shape({
        website: Yup.string()
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                'Enter correct url!'
            )
            .required('Please enter website'),
        logo: Yup.string()
            .required("Logo is required!")
    });


    return <>
        {open && <Grid
            container
            sx={{ background: '#3e4751', borderRadius: '16px' }}>
            <Grid
                container
                flexDirection={'column'} sx={{ padding: '16px' }}>
                <Typography sx={{ fontSize: 11, color: 'rgb(255, 255, 255)' }}>
                    {title}
                </Typography>
                <Formik
                    validationSchema={orderSchema}
                    initialValues={item || { logo: '', website: '' }}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Grid
                                container
                                flexWrap={'nowrap'}
                                alignItems={'baseline'}
                                gap={'4px'}>
                                <Field name='logo'>{({ field, meta }) => {
                                    return <TextField
                                        {...field}
                                        error={meta.error}
                                        helperText={meta.error}
                                        select
                                        label="نوع"
                                        size="small"
                                        sx={{
                                            flexBasis: '33%',
                                            maxWidth: '33%',
                                            color: 'black'
                                        }}>
                                        <MenuItem sx={{ display: 'flex', justifyContent: 'flex-end'}} value='تلگرام' >
                                            Telegram
                                            <TelegramIcon sx={{ marginRight: 2,fontSize:16, }} />
                                        </MenuItem>
                                        <MenuItem value='فیسبوک' sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                                            Facebook
                                            <FacebookIcon sx={{ marginRight: 2 ,fontSize:16}} />
                                        </MenuItem>
                                        <MenuItem value='اینستاگرام' sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                                            Instagram
                                            <InstagramIcon sx={{ marginRight: 2,fontSize:16 }} />
                                        </MenuItem>
                                        <MenuItem value='لینکدین' sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                                            LinkedIn
                                            <LinkedInIcon sx={{ marginRight: 2 ,fontSize:16}} />
                                        </MenuItem>
                                        <MenuItem value='توییتر' sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                                            Twitter
                                            <TwitterIcon sx={{ marginRight: 2,fontSize:16 }} />
                                        </MenuItem>
                                        <MenuItem value='عمومی' sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                                            Public
                                            <PublicIcon sx={{ marginRight: 2,fontSize:16 }} />
                                        </MenuItem>
                                    </TextField>
                                }}
                                </Field>
                                <Field name='website'>{({ field, meta }) => {
                                    return <TextField
                                        {...field}
                                        error={meta.error}
                                        helperText={meta.error}
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
                            <Grid
                                container
                                justifyContent={'flex-end'}>
                                <Button
                                    onClick={onClose}
                                    size='small'
                                    sx={{ '&:hover': { background: 'rgb(255, 168, 46 ,.2)' }, color: 'rgb(255, 168, 46)', border: '1px solid rgb(255, 168, 46,.2)', padding: 1, fontSize: 9, lineHeight: .5 }}>انصراف</Button>
                                <Button
                                    type='submit'
                                    sx={{ background: 'rgb(255, 168, 46)', '&:hover': { background: 'rgb(178, 117, 32)' }, color: '#ffffff', padding: 1, marginLeft: 1, fontSize: 9 }}>{(item) ? `ثبت مسیر ارتباطی ${item.logo}` : 'ثبت مسیر ارتباطی'}</Button>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </Grid>}
    </>
}