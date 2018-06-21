import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';

const Visualisation = (props) => {
  return (
    <LineChart width={600} height={300} data={props.data}
               margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="date"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Line type="monotone" dataKey="value" stroke="#8884d8"/>
    </LineChart>
  );
}

export default Visualisation;
