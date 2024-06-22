import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
const page = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100dvh', px: 3 }}>
      <Typography variant='h3' pb={10} textAlign='center' fontWeight={400}>
        Welcome to the MBTI test app. <br /> you can find your mbti type by answering the questions.
      </Typography>
      <Link href='questions'>
        <Button color='primary' size='large' variant='contained'>
          See the questions
        </Button>
      </Link>
    </Box >
  );
};

export default page;