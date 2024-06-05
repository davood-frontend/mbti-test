import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import CheckIcon from '@mui/icons-material/Check';
import ListAltIcon from '@mui/icons-material/ListAlt';
const FinalPage = ({ showResult, buttonLoading, setButtonLoading }: { showResult: () => void, buttonLoading: boolean, setButtonLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [check, setCheck] = useState(false)
    const handleChange = () => {
        setButtonLoading(true)
        setTimeout(() => {
            setButtonLoading(false)
            setCheck(true)
        }, 3000);
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', pt: 30 }}>
            <Typography variant='h4' pb={5} textAlign='center'>
                Congrags and well done, the test is finished. <br /> click on the following button to see the results.
            </Typography>
            <LoadingButton variant='contained' color={!check ? 'primary' : 'success'} size='large' onClick={handleChange} loading={buttonLoading} loadingPosition='start' startIcon={!check ? <ListAltIcon /> : <CheckIcon />} >{!check ? 'check my type' : 'see the result'}</LoadingButton>
        </Box>
    );
};

export default FinalPage;