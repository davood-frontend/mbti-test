import React from 'react';
import { PieChart } from '@mui/x-charts';
const DataPie = ({ data, colors }: { data: any, colors: string[] }) => {
    const valueFormatter = (value: number) => `${value}%`;
    // colors={['red','blue']}
    return (
        <PieChart
            height={150}
            width={360}
            series={[
                {
                    data: data,
                    innerRadius: 2,
                    outerRadius: 70,
                    paddingAngle: 3,
                    cornerRadius: 3,
                    startAngle: -180,
                    endAngle: 180,
                    cx: 100,
                    cy: 70,

                }
            ]}
            colors={colors}
        />
    );
};

export default DataPie;