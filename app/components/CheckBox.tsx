'use client'
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { Button, Box, Avatar, Typography } from '@mui/material';
const data = [
    { name: 'monster' },
    { name: 'zombie' },
    { name: 'ghost' },
    { name: 'human' }
]
const CheckBox = () => {
    const [ex, setEx] = useState('')

    return (
        <Grid container spacing={2} sx={{width : 3/4}}>
            {data.map((item, index) => (
                <Grid xs={6} key={index}>
                    <Button color='secondary' variant={item.name === ex ? 'contained' : 'outlined'} sx={{ borderRadius: 10 }} fullWidth onClick={() => setEx(item.name)}>{item.name}</Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default CheckBox;