import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import CheckBox from './CheckBox';
import { mbtiQuestion } from './constants/questions';
const QuestionPage = ({ number, data, totalQuestions }: { number: number, data: mbtiQuestion, totalQuestions: number }) => {
    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', height: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <Chip label={`Question no.${number + 1} of ${totalQuestions}`} />
            <Typography variant='h3' fontWeight={400} mt={3} >
                {data.question}
            </Typography>
            <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
                <CheckBox data={data} />
            </Box>

        </Box>
    );
};

export default QuestionPage;