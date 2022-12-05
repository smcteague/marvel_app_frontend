import React, { useState } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CssBaseline,
    Grid,
    Stack,
    Box,
    Typography,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth } from 'firebase/auth';

import { myServerCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CharacterForm } from '../CharacterForm/CharacterForm';


const theme = createTheme();

export const Gallery = () => {
    let {characterData, getData} = useGetData();
    let [open, setOpen] = useState(false);

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogClickOpen = () => {
        setDialogOpen(true)
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false);
    };

    let handleOpen = () => {
        setOpen(true)
    };

    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = async (cardId: any) => {
        await myServerCalls.delete(`${cardId}`)
        getData();
    };

    const MyAuth = localStorage.getItem('myAuth');
    console.log(MyAuth);
    if (MyAuth == 'true') {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>
                    <Box
                        sx = {{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component = 'h1'
                                variant = 'h2'
                                align = 'center'
                                color = 'text.primary'
                                gutterBottom
                            >
                                My Marvel Character Collection
                            </Typography>
                            <Typography
                                variant = 'h5'
                                align = 'center'
                                color = 'text.secondary'
                                paragraph
                            >
                                Check out my favorite characters!
                            </Typography>
                            <Stack
                                sx = {{pt: 4}}
                                direction = {{sm: 'column', md: 'row'}}
                                spacing = {2}
                                justifyContent = 'center'
                            >
                                <Button
                                    variant = 'contained'
                                    onClick = {handleDialogClickOpen}
                                >
                                    Add New Character
                                </Button>
                                <Dialog
                                    open = {dialogOpen}
                                    onClose = {handleDialogClickClose}
                                    aria-labellby = 'form-dialog-title'
                                >
                                    <DialogTitle id='form-dialog-title'>
                                        Add New Character                                       
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>Add a New Character</DialogContentText>
                                        <CharacterForm />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            onClick = {handleDialogClickClose}
                                            color = 'primary'
                                        >
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Stack>
                        </Container>
                    </Box>
                    <Container
                        sx = {{ py: 8 }}
                        maxWidth = 'md'
                    >
                        <Grid
                            container
                            spacing = {4}
                        >
                            {characterData.map((character: {
                                id: string, 
                                name: string,
                                description: string,
                                comics_appeared_in: number,
                                super_power: string
                            }) => (
                                <Grid
                                    item key = {character.id}
                                    xs = {12}
                                    sm = {6}
                                    md = {4}
                                >
                                    <Card
                                        sx = {{ 
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column' 
                                        }}
                                    >
                                        <CardContent sx={{ flexGrow: 1}}>
                                            <Typography
                                                gutterBottom
                                                variant = 'h5'
                                                component = 'h2'                                                
                                            >
                                                {character.id}
                                            </Typography>
                                            <Typography>{character.name}</Typography>
                                            <Typography>{character.description}</Typography>
                                            <Typography>{character.comics_appeared_in}</Typography>
                                            <Typography>{character.super_power}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                onClick = {handleOpen}
                                                size = 'small'
                                            >
                                                Update
                                            </Button>
                                            <Button
                                                onClick = {() => deleteData(character.id)}
                                                size = 'small'
                                            >
                                                Delete
                                            </Button>
                                        </CardActions>
                                        <Dialog
                                            open = {open}
                                            onClose = {handleClose}
                                            aria-labelledby = 'form-dialog-title'
                                        >
                                            <DialogTitle id='form-dialog-title'>Update a Character</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>Character Id: {character.id}</DialogContentText>
                                                <CharacterForm id={character.id} />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button
                                                    onClick = {handleClose}
                                                    color = 'primary'
                                                >
                                                    Cancel
                                                </Button>
                                            </DialogActions>                                          
                                        </Dialog>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        )
    } else {
        return (
            <div>
                <h3>Please Sign In to View Your Marvel Characters Collection</h3>
            </div>
        )
    };
}

