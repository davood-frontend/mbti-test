import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
const DataBar = () => {
    const valueFormatter = (value: number | null) => `${value}%`;
    return (
        <BarChart
            series={[
                { data: [40], stack: 'A', label: 'Introversion', valueFormatter },
                { data: [60], stack: 'A', label: 'Extroversion', valueFormatter },
                { data: [75], stack: 'B', label: 'intuitive', valueFormatter },
                { data: [25], stack: 'B', label: 'Sensing', valueFormatter },
                { data: [80], stack: 'C', label: 'feeling', valueFormatter },
                { data: [20], stack: 'C', label: 'Thinking ', valueFormatter },
                { data: [51], stack: 'D', label: 'Judging', valueFormatter },
                { data: [49], stack: 'D', label: 'Perceiving', valueFormatter },
            ]}
            width={900}
            height={330}
            colors={['#c45161', '#e094a0', '#5e62a9', '#434279', '#f2b6c0', '#f2dde1', '#cbc7d8', '#8db7d2',]}
            slotProps={{ legend: { padding: -10} }}
        />
    );
};

export default DataBar;