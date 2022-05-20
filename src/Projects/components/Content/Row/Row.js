import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, Link } from '@mui/material';
import { useCallback, useState } from 'react';
import { EditRow } from '../EditRow/EditRow';




export const Row = ({ handleDelete, handleEdit, item }) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = useCallback(() => {
        setOpen(false)
    }, [setOpen])

    const openEdit = () => {
        handleOpen()
        setTitle(`ویرایش مسیر ارتباطی ${item.logo}`)
    }

    const deleteRow = () => {
        handleDelete(item.id)
    }

    const onSubmit = (value) => {
        handleEdit(value).then(() => handleClose())
    }
    const root = {
        background: '#343d48 !important',
        margin: '4px 0',
        padding: '16px',
        borderRadius: '16px'
    }

    return (
        <Grid container item sx={{ ...root }}>
            <Grid container flex={2} alignItems="center">
                <Grid container flex={1}  sx={{ fontSize: '12px', color: 'white', gap: '6px',alignItems:'center' }}>
                    {/* <InstagramIcon sx={{ fontSize: 16 }} /> */}
                    {item.logo}
                </Grid>
                <Grid container alignItems="center" flex={4} flexWrap='nowrap' sx={{ color: 'white', fontSize: '10px' }}>
                    لینک  :
                    <Link sx={{ color: 'rgb(255, 168, 46)', fontSize: '12px', cursor: 'pointer', paddingLeft: '8px' }}>{item.website}</Link>
                </Grid>
            </Grid>
            <Grid container flex={1} justifyContent="flex-end">
                <Button
                    onClick={openEdit}
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
                    onClick={deleteRow}
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
            <EditRow open={open} onClose={handleClose} handleSubmit={onSubmit} title={title} item={item} />
        </Grid>
    )
}