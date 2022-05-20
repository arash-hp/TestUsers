import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { addWebsite, deleteWebsite, editWebsite, getWebsite } from '../../../api/websiteApi';
import { EditRow } from './EditRow/EditRow';
import { Row } from './Row/Row';


export const Content = () => {

    const [state, setState] = useState([])
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('')
    const handleOpen = () => setOpen(true);
    const handleAddConnect = () => {
        handleOpen()
        setTitle('افزودن مسیر ارتباطی')
    }

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [setOpen])
    const getData = useCallback(() => {
        getWebsite().then(res => setState(res))
    }, [])
    useEffect(() => {
        getData()
    }, [])

    const handleSubmit = (values) => {
        addWebsite(values).then((res) => {
            setState((prev) => {
                return [res, ...prev]
            })
            handleClose()

        })
    }

    const handleEdit = (value) => {
        return editWebsite(value).then((res) => {
            setState((prev) => prev.map((item) => item.id !== value.id ? item : res))
        })
    }

    const root = {
        width: '800px',
        maxHeigh: '500px',
        margin: '0 auto',
        padding: '24px',
        display: 'flex',
        boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
        background: '#212b35',
        borderRadius: '16px'
    }


    const handleDelete = (id) => {
        deleteWebsite(id).then(() => {
            setState((prev) => prev.filter((item) => item.id !== id))
        })
    }
    return (
        <Grid
            container
            sx={{ ...root }}>
            <Toolbar
                sx={{ width: '100%', flexDirection: 'column', padding: '0 !important' }}>
                <Grid
                    container
                    flexDirection={'column'}>
                    <Typography
                        sx={{ fontSize: 8, fontWeight: 300 ,color:'rgb(121, 131, 142)'}}>
                        مسیرهای ارتباطی
                    </Typography>
                    <Button onClick={handleAddConnect}
                        sx={{
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
            <EditRow open={open} onClose={handleClose} handleSubmit={handleSubmit} title={title} />
            {state?.map(item => <Row key={item.id} handleDelete={handleDelete} handleEdit={handleEdit} item={item} />)}
        </Grid >
    )
}