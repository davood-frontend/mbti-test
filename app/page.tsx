import React from 'react';
import { Box } from '@mui/material';
import QuestionPages from './components/QuestionPages';
import Background from './components/common/Background';
const page = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Background />
      <QuestionPages />
    </Box >
  );
};

export default page;