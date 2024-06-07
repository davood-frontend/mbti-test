'use client'
import React, { useEffect, useState } from 'react';
import { Box, IconButton, Button, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import QuestionPage from './QuestionPage';
import SwipeableViews from 'react-swipeable-views'
import { mbtiQuestions } from './constants/questions';
import FinalPage from './common/FinalPage';


const QuestionPages = (): JSX.Element => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [storeQuestions, setStoreQuestions] = useState({ ie: 0, ns: 0, ft: 0, jp: 0 })
    const [finalResults, setFinalResults] = useState<{ type: string, percentage: { type: string, percentage: number }[] }>({ type: '', percentage: [] })
    const [buttonLoading, setButtonLoading] = useState(false)
    const changeHandler = (item: number, questionType: string, prev: any, revalidate: boolean) => {
        const clone = { ...storeQuestions }
        if (!revalidate) {
            switch (questionType) {
                case 'ie':
                    clone.ie += item
                    break
                case 'ns':
                    clone.ns += item
                    break
                case 'ft':
                    clone.ft += item
                    break
                case 'jp':
                    clone.jp += item
                    break
            }
        } else {
            switch (questionType) {
                case 'ie':
                    clone.ie -= prev
                    clone.ie += item
                    break
                case 'ns':
                    clone.ns -= prev
                    clone.ns += item
                    break
                case 'ft':
                    clone.ft -= prev
                    clone.ft += item
                    break
                case 'jp':
                    clone.jp -= prev
                    clone.jp += item
                    break
            }
        }
        setStoreQuestions(clone)
    }
    const questionNumberHandler = (action: 'next' | 'prev') => {
        if (action === 'next') {
            setQuestionNumber(prev => prev + 1)
        } else if (action === 'prev') {
            setQuestionNumber(prev => prev - 1)
        }
    }
    const showResult = () => {
        const type = []
        const percentage = []
        if (storeQuestions.ie > 0) {
            type.push('e')
            percentage.push({ type: 'e', percentage: storeQuestions.ie + 50 })
        } else if (storeQuestions.ie < 0) {
            type.push('i')
            percentage.push({ type: 'i', percentage: Math.abs(storeQuestions.ie) + 50 })
        } else if (storeQuestions.ie === 0) {
            type.push('x')
            percentage.push({ type: 'x', percentage: storeQuestions.ie })
        }

        if (storeQuestions.ns > 0) {
            type.push('s')
            percentage.push({ type: 's', percentage: storeQuestions.ns + 50 })
        } else if (storeQuestions.ns < 0) {
            type.push('n')
            percentage.push({ type: 'n', percentage: Math.abs(storeQuestions.ns) + 50 })
        } else if (storeQuestions.ns === 0) {
            type.push('x')
            percentage.push({ type: 'x', percentage: storeQuestions.ns })
        }

        if (storeQuestions.ft > 0) {
            type.push('t')
            percentage.push({ type: 't', percentage: storeQuestions.ft + 50 })
        } else if (storeQuestions.ft < 0) {
            type.push('f')
            percentage.push({ type: 'f', percentage: Math.abs(storeQuestions.ft) + 50 })
        } else if (storeQuestions.ft === 0) {
            type.push('x')
            percentage.push({ type: 'x', percentage: storeQuestions.ft })
        }

        if (storeQuestions.jp > 0) {
            type.push('p')
            percentage.push({ type: 'p', percentage: storeQuestions.jp + 50 })
        } else if (storeQuestions.jp < 0) {
            type.push('j')
            percentage.push({ type: 'j', percentage: Math.abs(storeQuestions.jp) + 50 })
        } else if (storeQuestions.jp === 0) {
            type.push('x')
            percentage.push({ type: 'x', percentage: storeQuestions.jp })
        }

        setFinalResults({ ...finalResults, type: type.join(""), percentage: [...percentage] })

    }
    useEffect(() => {
        console.log(finalResults)
    }, [finalResults])
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }} >
                    <IconButton color='info' size='large' onClick={() => questionNumberHandler('prev')} disabled={questionNumber === 0}>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                </Box>
                <SwipeableViews disabled index={questionNumber} >
                    {mbtiQuestions.map((item, index) => (
                        <QuestionPage number={index} data={item} changeHandler={changeHandler} />
                    ))}
                    <FinalPage buttonLoading={buttonLoading} showResult={showResult} setButtonLoading={setButtonLoading} />
                </SwipeableViews>
                <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
                    <IconButton color='info' size='large' onClick={() => questionNumberHandler('next')} disabled={questionNumber === mbtiQuestions.length}>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default QuestionPages;