import {Grid,Typography,TextField,MenuItem,Button} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Formik,Form,Field} from 'formik';

export const EditRow = ({handleSubmit}) => {
    return <Grid container flexDirection={'column'} sx={{ padding: '16px' }}>
        <Typography sx={{ fontSize: 11, color: 'rgb(255, 255, 255)' }}>
            ویرایش مسیر ارتباطی
        </Typography>
        <Formik
            initialValue={{ logo: '', link: '' }}
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
}