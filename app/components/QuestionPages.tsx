'use client'
import React from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import QuestionPage from './QuestionPage';
import SwipeableViews from 'react-swipeable-views'
import { mbtiQuestions } from '../constants/questions';
import FinalPage from './FinalPage';
import { useMainContext } from '../context/mainContext';
const QuestionPages = (): JSX.Element => {
    const { questionNumber, questionNumberHandler } = useMainContext()


    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', px: { xs: 1, sm: 2 } }} >
                    <IconButton color='info' size='large' onClick={() => questionNumberHandler('prev')} disabled={questionNumber === 0}>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                </Box>
                <SwipeableViews disabled index={questionNumber} >
                    {mbtiQuestions.map((item, index) => (
                        <QuestionPage number={index} data={item} totalQuestions={mbtiQuestions.length} key={index} />
                    ))}
                    <FinalPage />
                </SwipeableViews>

                <Box sx={{ display: 'flex', alignItems: 'center', px: { xs: 1, sm: 2 } }}>
                    <IconButton color='info' size='large' onClick={() => questionNumberHandler('next')} disabled={questionNumber === mbtiQuestions.length}>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default QuestionPages;