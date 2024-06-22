import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import CheckIcon from '@mui/icons-material/Check';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Link from 'next/link';
import { useMainContext } from '@/app/context/mainContext';
const FinalPage = () => {
    const { showResult, buttonLoading, setButtonLoading, setSnackBar, answeredQuestions } = useMainContext()
    const [check, setCheck] = useState(false)

    const handleChange = () => {
        !check && setButtonLoading(true)

        setTimeout(() => {
            setButtonLoading(false)
            if (answeredQuestions.includes(false)) {
                setSnackBar({ open: true, message: 'please answer all questions', severity: 'error' })

            } else {
                setCheck(true)
                showResult()
            }

        }, 2000);
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100dvh' }}>
            <Typography variant='h3' pb={10} textAlign='center' fontWeight={400}>
                Congrags and well done, the test is finished. <br /> click on the following button to see the results.
            </Typography>
            <Link href={!check ? 'questions' : 'result'}>
                <LoadingButton variant='contained' color={!check ? 'primary' : 'success'} size='large' onClick={handleChange} loading={buttonLoading} loadingPosition='start' startIcon={!check ? <ListAltIcon /> : <CheckIcon />} >{!check ? 'check my type' : 'see the result'}</LoadingButton>
            </Link>
        </Box >
    );
};

export default FinalPage;