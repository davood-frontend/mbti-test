import React from 'react';
import { PieChart } from '@mui/x-charts';
const DataPie = ({ data, colors }: { data: { value: number }[], colors: string[] }) => {
    return (
        <PieChart
            height={150}
            width={320}
            series={[
                {
                    data: data,
                    innerRadius: 2,
                    outerRadius: 70,
                    paddingAngle: 3,
                    cornerRadius: 3,
                    startAngle: -180,
                    endAngle: 180,
                    cx: 70,
                    cy: 70,

                }
            ]}
            colors={colors}
        />
    );
};

export default DataPie;