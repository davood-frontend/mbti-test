import React from 'react';
import { Button, Box, Avatar, Typography } from '@mui/material';
import bg from '@/app/assets/bg.jpg'
import Image from 'next/image';
import CheckBox from './components/CheckBox';
const page = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 0, right: 0, width: 1, height: 1, zIndex: -1 }}>
        <Avatar variant='rounded' sx={{ height: '100vh', width: 1 }}>
          <Image src={bg} fill style={{ objectFit: "cover" }} alt='background' />
        </Avatar>
      </Box>
      <Box sx={{ pt: 30, width: '50%', mx: 'auto', textAlign: 'center' }}>
        <Typography color='secondary' variant='h5' fontWeight={500}>
          Just a couple more questions
        </Typography>
        <Typography variant='h3' fontWeight={400} mt={2.5}>
          which thing is the best thing?
        </Typography>
        <Box sx={{ mt: 6,display:'flex',justifyContent:'center' }}>
          <CheckBox />
        </Box>
      </Box>
    </Box>
  );
};

export default page;