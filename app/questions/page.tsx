import React from 'react';
import QuestionPages from '../components/QuestionPages';
import { Fade, Box } from '@mui/material';
const page = () => {

    return (
        <Fade in={true} timeout={1100}>
            <Box>
                <QuestionPages />
            </Box>
        </Fade>
    );
};

export default page;