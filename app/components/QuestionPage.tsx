import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import CheckBox from './CheckBox';
import { mbtiQuestion } from './constants/questions';
const QuestionPage = ({ number, data, changeHandler }: { number: number, data: mbtiQuestion, changeHandler: (item: any, questionType: string, prev: any, revalidate: boolean) => void }) => {
    return (
        <Box sx={{ width: 800, mx: 'auto', textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <Chip label={`Question no.${number + 1} of 16`} />
            <Typography variant='h3' fontWeight={400} mt={3}>
                {data.question}
            </Typography>
            <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
                <CheckBox data={data} changeHandler={changeHandler} />
            </Box>

        </Box>
    );
};

export default QuestionPage;