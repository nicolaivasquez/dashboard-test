import {LineChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Visualisation = (props) => {
  return (
    <Grid container spacing={16}>
      <Grid item>
        <LineChart width={600} height={300} data={props.data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="date"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Line type="monotone" dataKey="value" stroke="#8884d8"/>
        </LineChart>
      </Grid>
      <Grid item>
        {Object.keys(props.metrics).map((key) =>
        <Typography variant='display1'>{key}: {props.metrics[key]}</Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default Visualisation;
