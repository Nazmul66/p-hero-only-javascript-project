import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const dataFile = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      

    return (
        <div>
            <LineChart 
                width={1000}
                height={300}
                data={dataFile}
            >
              <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
              <Line type="monotone" dataKey="pv" stroke="red"></Line>
              <Line type="monotone" dataKey="uv" stroke="blue"></Line>
              <Tooltip />
              <XAxis dataKey="name"></XAxis>
              <YAxis></YAxis>
              <Legend></Legend>

            </LineChart>
        </div>
    );
};

export default Dashboard;