import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Visualisation from './Visualisation';

const startData = [...Array(10)].map((_, index) => ({
  date: new Date(new Date().getTime() - 1000 * index),
  value: Math.floor(Math.random() * 100) + 1  ,
})).reverse();
let data = startData;

setInterval((
) => {
  console.log(data);
  data = data
    .concat({
      date: new Date(new Date().getTime() - 1000),
      value: Math.floor(Math.random() * 100) + 1  ,
    })
    .slice(1);
}, 2000);

class Process extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: startData,
      metrics: {
        MetricA: Math.floor(Math.random() * 100) + 1,
        MetricB: Math.floor(Math.random() * 100) + 1
      }
    };

    let data = startData;

    setInterval((
    ) => {
      data = this.state.data
        .concat({
          date: new Date(new Date().getTime() - 1000),
          value: Math.floor(Math.random() * 100) + 1  ,
        });
      if (data.length > 10) {
        data = data.slice(1, 10)
      }
      this.setState({
        data
      })
    }, 2000);
  }

  handleReset() {
    this.setState({
      data: [],
    })
  }

  render() {
    const {props, state} = this;
    return (
      <Card>
        <CardContent>
          {
            props.editable ||
            <Typography variant='subheading'>{props.name}</Typography>
          }
          {
            props.editable &&
            <form onSubmit={(e) => e.preventDefault()}>
              <TextField value={props.name} onChange={(e) => props.handleChangeName(props.id, e.target.value)} />
              <Button color='primary' onClick={(e) => props.handleChangeProcessName(props.id)}>Save</Button>
            </form>
          }
        </CardContent>
        <CardActions>
          <Button color='secondary' onClick={() => props.handleRemoveProcess(props.id)}>Remove</Button>
          <Button color='primary' disabled={props.editable} onClick={() => props.toggleEditing(props.id)}>Edit</Button>
          <Button onClick={this.handleReset.bind(this)}>Reset</Button>
        </CardActions>
        <CardContent>
          <Visualisation
            data={state.data}
            metrics={state.metrics}
          />
        </CardContent>
      </Card>
    )
  }
}

Process.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleRemoveProcess: PropTypes.func,
  handleChangeName: PropTypes.func,
  handleChangeProcessName: PropTypes.func,
  toggleEditing: PropTypes.func,
  editable: PropTypes.bool,
}

export default Process;
