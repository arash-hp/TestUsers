import { Grid, Link, Button, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { EditRow } from '../EditRow/EditRow';
import { useState } from 'react';



const root = {
    background: '#343d48 !important',
    margin: '4px 0',
    padding: '16px',
    borderRadius: '16px'
}
export const Row = ({ handleDelete }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open)
    const handleEdit = () => {
        handleOpen()
    }
    return (
        <Grid container item sx={{ ...root }}>
            <Grid container flex={2} alignItems="center">
                <Grid container flex={1} alignItems="center" sx={{ fontSize: '12px', color: 'white', gap: '6px' }}>
                    <InstagramIcon sx={{ fontSize: 18 }} />
                    Instagram
                </Grid>
                <Grid container alignItems="center" flex={4} flexWrap='nowrap' sx={{ color: 'white', fontSize: '10px' }}>
                    لینک  :
                    <Link sx={{ color: 'rgb(255, 168, 46)', fontSize: '12px', cursor: 'pointer', paddingLeft: '8px' }}>https://google.com</Link>
                </Grid>
            </Grid>
            <Grid container flex={1} justifyContent="flex-end">
                <Button
                    onClick={handleEdit}
                    sx={{
                        width: 80, justifyContent: 'flex-start', fontSize: 12, color: 'rgb(255, 168, 46)', padding: 0, "&:hover": {
                            backgroundColor: "rgb(255, 168, 46 ,.2)",
                            cursor: "pointer"
                        }
                    }}>
                    <IconButton>
                        <EditIcon sx={{ fontSize: 16, color: 'rgb(255, 168, 46)' }} />
                    </IconButton>
                    ویرایش
                </Button>
                <Button
                    onClick={handleDelete}
                    sx={{
                        width: 80, justifyContent: 'flex-start', fontSize: 12, color: 'rgb(244, 67, 54)', padding: 0, "&:hover": {
                            backgroundColor: "rgb(244, 67, 54,.2)",
                            cursor: "pointer"
                        }
                    }}>
                    <IconButton>
                        <DeleteIcon sx={{ fontSize: 16, color: 'rgb(244, 67, 54)' }} />
                    </IconButton>
                    حذف
                </Button>
            </Grid>
            {open && <EditRow />}
        </Grid>
    )
}