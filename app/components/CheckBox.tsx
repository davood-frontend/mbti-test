'use client'
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { Button } from '@mui/material';
import { mbtiQuestion } from './constants/questions';
import { useMainContext } from '../context/mainContext';
export type oneOption = {
    value: string,
    score: number
}
const CheckBox = ({ data }: { data: mbtiQuestion }) => {
    const { changeHandler } = useMainContext()
    const [currentOption, setCurrentOption] = useState<oneOption | null>(null)
    const [shouldRevalidate, setShouldRevalidate] = useState(false)
    const onDataChange = (item: any) => {
        setCurrentOption(item)
        changeHandler(item.score, data.questionType, currentOption?.score, shouldRevalidate)
        setShouldRevalidate(true)
    }
    return (
        <Grid container spacing={2} sx={{ width: 1 }}>
            {data.options.map((item, index) => (
                <Grid xs={6} key={index}>
                    <Button color='secondary' variant={item.value === currentOption?.value ? 'contained' : 'outlined'} sx={{ borderRadius: 10 }} fullWidth onClick={() => onDataChange(item)}>{item.value}</Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default CheckBox;