import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { Root } from './styled';

const DailyUsagesLineChart = ({ dailyUsages }) => {
  return (
    <Root>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={dailyUsages}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="usage"
            stroke="#E16424"
            fill="#EA9066"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Root>
  );
};

export default DailyUsagesLineChart;
