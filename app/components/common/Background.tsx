import React from 'react';
import { Box, Avatar } from '@mui/material';
import bg from '@/app/assets/bg.jpg'
import Image from 'next/image';
const Background = () => {
    return (
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: 1, height: 1, zIndex: -1 }}>
            <Avatar variant='rounded' sx={{ height: '100dvh', width: 1 }}>
                <Image src={bg} fill style={{ objectFit: "cover" }} alt='background' />
            </Avatar>
        </Box>
    );
};

export default Background;