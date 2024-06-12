import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
    const valueFormatter = (value: number | null) => `${value}%`;
    const data = [
        { label: 'INFJ', value: 1.5 },
        { label: 'ENTJ', value: 1.8 },
        { label: 'INTJ', value: 2.1 },
        { label: 'ENFJ', value: 2.5 },
        { label: 'ENTP', value: 3.2 },
        { label: 'INTP', value: 3.3 },
        { label: 'ESTP', value: 4.3 },
        { label: 'INFP', value: 4.4 },
        { label: 'ISTP', value: 5.4 },
        { label: 'ENFP', value: 8.1 },
        { label: 'ESFP', value: 8.5 },
        { label: 'ESTJ', value: 8.7 },
        { label: 'ISFP', value: 8.8 },
        { label: 'ISTJ', value: 11.6 },
        { label: 'ESFJ', value: 12.3 },
        { label: 'ISFJ', value: 13.8 }
    ];

    return (
        <BarChart
            xAxis={[{
                scaleType: 'band', data: data.map(item => item.label)
            }]}
            series={[{ data: data.map(item => item.value), valueFormatter }]}
            height={300}
            sx={{width:1}}
        />
    );
}